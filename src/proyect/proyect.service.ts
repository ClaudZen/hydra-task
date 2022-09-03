import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  ActividadTipo,
  Empresa,
  PrioridadTipo,
  Proyecto,
  ProyectoEstadoTipo,
} from 'src/database/entity';
import { Repository } from 'typeorm';
import { ProyectBetweenStatusResponse } from './response';

@Injectable()
export class ProyectService {
  constructor(
    @InjectRepository(Proyecto)
    private proyectRepository: Repository<Proyecto>,
  ) {}

  async getListProyectsBetweenStatus(
    after: number,
    before: number,
  ): Promise<ProyectBetweenStatusResponse[]> {
    return this.proyectRepository
      .createQueryBuilder('proyecto')
      .select([
        'empresa.nombreEmpresa AS empresa',
        'proyecto.nombreProyecto AS proyecto',
        'actividadTipo.nombreTipo As actividad',
        'prioridadTipo.tipoPrioridad AS prioridad',
        "FORMAT(proyecto.fechaInicioProyecto, 'dd/MM/yyyy') AS fechaInicioProyecto",
        "FORMAT(proyecto.fechaFinalProyectoEstimada, 'dd/MM/yyyy') AS fechaFinalProyectoEstimada",
        'proyectoEstadoTipo.tipoEstado AS estado',
      ])
      .innerJoin(Empresa, 'empresa', 'empresa.id = proyecto.empresaProyectoId')
      .innerJoin(
        ActividadTipo,
        'actividadTipo',
        'actividadTipo.id = proyecto.actividadTipoId',
      )
      .innerJoin(
        PrioridadTipo,
        'prioridadTipo',
        'prioridadTipo.id = proyecto.prioridadTipoId',
      )
      .innerJoin(
        ProyectoEstadoTipo,
        'proyectoEstadoTipo',
        'proyectoEstadoTipo.id = proyecto.estadoId',
      )
      .where('proyecto.estadoId BETWEEN :after AND :before', {
        after: after,
        before: before,
      })
      .orderBy('proyecto.estadoId', 'ASC')
      .getRawMany();
  }
}
