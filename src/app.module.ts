import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViacepModule } from './viacep/viacep.module';

@Module({
  imports: [ViacepModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
