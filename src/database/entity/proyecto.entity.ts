import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ActividadTipo } from './actividad-tipo.entity';
import { Empresa } from './empresa.entity';
import { PrioridadTipo } from './prioridad-tipo.entity';
import { ProyectoAgente } from './proyecto-agente.entity';
import { ProyectoEstadoTipo } from './proyecto-estado-tipo.entity';
import { ProyectoUsuario } from './proyecto-usuario.entity';
import { ProyectoUsuarioReporte } from './proyecto-usuario-reporte.entity';
import { Tarea } from './tarea.entity';

@Entity('Proyecto', { schema: 'dbo' })
export class Proyecto {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NombreProyecto', length: 50 })
  nombreProyecto: string;

  @Column('varchar', {
    name: 'DescripcionProyecto',
    nullable: true,
    length: 500,
  })
  descripcionProyecto: string | null;

  @Column('datetime', { name: 'FechaCreacion' })
  fechaCreacion: Date;

  @Column('date', { name: 'FechaInicioProyecto', nullable: true })
  fechaInicioProyecto: Date | null;

  @Column('date', { name: 'FechaFinalProyectoEstimada', nullable: true })
  fechaFinalProyectoEstimada: Date | null;

  @Column('datetime', { name: 'FechaFinalProyectoReal', nullable: true })
  fechaFinalProyectoReal: Date | null;

  @Column('float', { name: 'HorasEstimadas', nullable: true, precision: 53 })
  horasEstimadas: number | null;

  @Column('float', { name: 'HorasReales', nullable: true, precision: 53 })
  horasReales: number | null;

  @ManyToOne(() => ActividadTipo, (actividadTipo) => actividadTipo.proyectos)
  @JoinColumn([{ name: 'ActividadTipoId', referencedColumnName: 'id' }])
  actividadTipo: ActividadTipo;

  @ManyToOne(
    () => ProyectoEstadoTipo,
    (proyectoEstadoTipo) => proyectoEstadoTipo.proyectos,
  )
  @JoinColumn([{ name: 'EstadoId', referencedColumnName: 'id' }])
  estado: ProyectoEstadoTipo;

  @ManyToOne(() => Empresa, (empresa) => empresa.proyectos)
  @JoinColumn([{ name: 'EmpresaProyectoId', referencedColumnName: 'id' }])
  empresaProyecto: Empresa;

  @ManyToOne(() => PrioridadTipo, (prioridadTipo) => prioridadTipo.proyectos)
  @JoinColumn([{ name: 'PrioridadTipoId', referencedColumnName: 'id' }])
  prioridadTipo: PrioridadTipo;

  @OneToMany(() => ProyectoAgente, (proyectoAgente) => proyectoAgente.proyecto)
  proyectoAgentes: ProyectoAgente[];

  @OneToMany(
    () => ProyectoUsuario,
    (proyectoUsuario) => proyectoUsuario.proyecto,
  )
  proyectoUsuarios: ProyectoUsuario[];

  @OneToMany(
    () => ProyectoUsuarioReporte,
    (proyectoUsuarioReporte) => proyectoUsuarioReporte.proyecto,
  )
  proyectoUsuarioReportes: ProyectoUsuarioReporte[];

  @OneToMany(() => Tarea, (tarea) => tarea.proyecto)
  tareas: Tarea[];
}
