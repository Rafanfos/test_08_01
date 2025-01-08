import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViacepModule } from './viacep/viacep.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import appConfig from './app.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [
    ViacepModule,
    ConfigModule.forRoot(),
    ConfigModule.forFeature(appConfig),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const typeormConfig = configService.get('dbConfig');
        return {
          ...typeormConfig,
        };
      },
    }),
    LoggerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
