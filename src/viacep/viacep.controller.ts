import { Controller, Get, Param } from '@nestjs/common';
import { ViacepService } from './viacep.service';

@Controller('viacep')
export class ViacepController {
  constructor(private readonly viacepService: ViacepService) {}

  @Get(':cep')
  async getAddress(@Param('cep') cep: string) {
    return await this.viacepService.getAddress(cep);
  }
}
