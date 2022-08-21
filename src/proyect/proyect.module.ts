import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';

@Module({
  providers: [ProyectService],
  controllers: [ProyectController]
})
export class ProyectModule {}
