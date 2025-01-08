import { Module } from '@nestjs/common';
import { ViacepController } from './viacep.controller';
import { ViacepService } from './viacep.service';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [HttpModule, CacheModule.register({ ttl: 60, max: 100 })],
  controllers: [ViacepController],
  providers: [ViacepService],
})
export class ViacepModule {}
