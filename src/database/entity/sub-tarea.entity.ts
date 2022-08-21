import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agente } from './agente.entity';
import { PrioridadTipo } from './prioridad-tipo.entity';
import { Tarea } from './tarea.entity';
import { TareaFlujoTipo } from './tarea-flujo-tipo.entity';

@Index('PK_SubTarea', ['id'], { unique: true })
@Entity('SubTarea', { schema: 'dbo' })
export class SubTarea {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'ID' })
  id: string;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @ManyToMany(() => Agente, (agente) => agente.subTareas)
  agentes: Agente[];

  @ManyToOne(() => PrioridadTipo, (prioridadTipo) => prioridadTipo.subTareas)
  @JoinColumn([{ name: 'PrioridadTipoId', referencedColumnName: 'id' }])
  prioridadTipo: PrioridadTipo;

  @ManyToOne(() => Tarea, (tarea) => tarea.subTareas)
  @JoinColumn([{ name: 'TareaId', referencedColumnName: 'id' }])
  tarea: Tarea;

  @ManyToOne(() => TareaFlujoTipo, (tareaFlujoTipo) => tareaFlujoTipo.subTareas)
  @JoinColumn([{ name: 'TareaFlujoTipoId', referencedColumnName: 'id' }])
  tareaFlujoTipo: TareaFlujoTipo;
}
