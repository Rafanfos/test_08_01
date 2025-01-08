import { HttpService } from '@nestjs/axios';
import { CACHE_MANAGER } from '@nestjs/cache-manager';
import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { firstValueFrom } from 'rxjs';
import { IAddress, IViacepAddress } from 'src/interfaces/address.interface';

@Injectable()
export class ViacepService {
  constructor(
    private readonly httpService: HttpService,
    @Inject(CACHE_MANAGER) private cacheService: Cache,
  ) {}

  async getAddress(cep: string): Promise<any> {
    const cachedAddress = await this.cacheService.get(cep);

    if (cachedAddress) {
      return cachedAddress;
    }

    try {
      const response = await firstValueFrom(
        this.httpService.get<IViacepAddress>(
          `https://viacep.com.br/ws/${cep}/json/`,
        ),
      );

      const { logradouro, bairro, localidade, uf } = response.data;

      const formattedAddress: IAddress = {
        street: logradouro,
        neighborhood: bairro,
        city: localidade,
        state: uf,
      };

      return formattedAddress;
    } catch (error) {
      if (error.response.status === 400) {
        throw new BadRequestException('CEP inválido');
      }

      throw new Error('API indisponível');
    }
  }
}
