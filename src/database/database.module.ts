import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MssqlConfig } from './config';

@Module({ imports: [TypeOrmModule.forRootAsync({ useClass: MssqlConfig })] })
export class DatabaseModule {}
