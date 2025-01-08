import { Module } from '@nestjs/common';
import { ViacepController } from './viacep.controller';

@Module({
  imports: [],
  controllers: [ViacepController],
  providers: [],
})
export class ViacepModule {}
