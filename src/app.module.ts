import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MssqlConfig } from './config';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: MssqlConfig }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
