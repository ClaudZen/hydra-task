import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Query,
} from '@nestjs/common';
import { ProyectBetweenStatusResponse } from './response';
import { ProyectService } from './proyect.service';

@Controller('proyect')
export class ProyectController {
  constructor(private proyectService: ProyectService) {}

  @Get('list-proyects-between-status?')
  async getListProyectsBetweenStatus(
    @Query('after') after: number,
    @Query('before') before: number,
  ): Promise<ProyectBetweenStatusResponse[]> {
    const result: ProyectBetweenStatusResponse[] =
      await this.proyectService.getListProyectsBetweenStatus(after, before);

    if (result.length === 0) {
      throw new HttpException('proyects empty', HttpStatus.NO_CONTENT);
    }
    return result;
  }
}
