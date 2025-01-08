import { Controller, Get, Param } from '@nestjs/common';
import { ViacepService } from './viacep.service';
import { CepDto } from './dto/cep.dto';

@Controller('viacep')
export class ViacepController {
  constructor(private readonly viacepService: ViacepService) {}

  @Get(':cep')
  async getAddress(@Param() params: CepDto) {
    const { cep } = params;
    return await this.viacepService.getAddress(cep);
  }
}
