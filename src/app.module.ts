import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViacepModule } from './viacep/viacep.module';
import { ViacepController } from './viacep/viacep.controller';

@Module({
  imports: [ViacepModule],
  controllers: [AppController, ViacepController],
  providers: [AppService],
})
export class AppModule {}
