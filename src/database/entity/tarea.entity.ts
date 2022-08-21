import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agente } from './agente.entity';
import { SubTarea } from './sub-tarea.entity';
import { TareaFlujoTipo } from './tarea-flujo-tipo.entity';
import { PrioridadTipo } from './prioridad-tipo.entity';
import { Proyecto } from './proyecto.entity';

@Index('PK_Tarea', ['id'], { unique: true })
@Entity('Tarea', { schema: 'dbo' })
export class Tarea {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'ID' })
  id: string;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('datetime', { name: 'FechaCreacion', nullable: true })
  fechaCreacion: Date | null;

  @Column('datetime', { name: 'FechaInicio', nullable: true })
  fechaInicio: Date | null;

  @Column('datetime', { name: 'FechaCierreEstimada', nullable: true })
  fechaCierreEstimada: Date | null;

  @Column('datetime', { name: 'FechaCierreReal', nullable: true })
  fechaCierreReal: Date | null;

  @Column('float', {
    name: 'HorasAsignadasEstimadas',
    nullable: true,
    precision: 53,
  })
  horasAsignadasEstimadas: number | null;

  @Column('float', {
    name: 'HorasAsignadasReal',
    nullable: true,
    precision: 53,
  })
  horasAsignadasReal: number | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @ManyToMany(() => Agente, (agente) => agente.tareas)
  @JoinTable({
    name: 'AgenteTarea',
    joinColumns: [{ name: 'TareaId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'AgenteId', referencedColumnName: 'id' }],
    schema: 'dbo',
  })
  agentes: Agente[];

  @OneToMany(() => SubTarea, (subTarea) => subTarea.tarea)
  subTareas: SubTarea[];

  @ManyToOne(() => TareaFlujoTipo, (tareaFlujoTipo) => tareaFlujoTipo.tareas)
  @JoinColumn([{ name: 'TareaFlujoTipoId', referencedColumnName: 'id' }])
  tareaFlujoTipo: TareaFlujoTipo;

  @ManyToOne(() => PrioridadTipo, (prioridadTipo) => prioridadTipo.tareas)
  @JoinColumn([{ name: 'PrioridadTipoId', referencedColumnName: 'id' }])
  prioridadTipo: PrioridadTipo;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.tareas)
  @JoinColumn([{ name: 'ProyectoId', referencedColumnName: 'id' }])
  proyecto: Proyecto;
}
