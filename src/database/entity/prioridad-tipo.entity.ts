import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { SubTarea } from './sub-tarea.entity';
import { Tarea } from './tarea.entity';

@Entity('PrioridadTipo', { schema: 'dbo' })
export class PrioridadTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'TipoPrioridad', nullable: true, length: 50 })
  tipoPrioridad: string | null;

  @OneToMany(() => Proyecto, (proyecto) => proyecto.prioridadTipo)
  proyectos: Proyecto[];

  @OneToMany(() => SubTarea, (subTarea) => subTarea.prioridadTipo)
  subTareas: SubTarea[];

  @OneToMany(() => Tarea, (tarea) => tarea.prioridadTipo)
  tareas: Tarea[];
}
