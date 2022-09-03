import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Proyecto } from 'src/database/entity';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [TypeOrmModule.forFeature([Proyecto]), DatabaseModule],
  providers: [ProyectService],
  controllers: [ProyectController],
})
export class ProyectModule {}
