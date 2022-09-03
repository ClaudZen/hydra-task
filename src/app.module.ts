import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { ProyectModule } from './proyect/proyect.module';
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.development.env', isGlobal: true }),
    DatabaseModule,
    ProyectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
