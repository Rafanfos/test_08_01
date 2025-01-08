import { Body, Controller, Get } from '@nestjs/common';
import { ViacepService } from './viacep.service';
import { CepDto } from './dto/cep.dto';

@Controller('viacep')
export class ViacepController {
  constructor(private readonly viacepService: ViacepService) {}

  @Get(':cep')
  async getAddress(@Body() cepDto: CepDto) {
    const { cep } = cepDto;
    return await this.viacepService.getAddress(cep);
  }
}
