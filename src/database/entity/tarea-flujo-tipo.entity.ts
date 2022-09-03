import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { SubTarea } from './sub-tarea.entity';
import { Tarea } from './tarea.entity';

@Entity('TareaFlujoTipo', { schema: 'dbo' })
export class TareaFlujoTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('smallint', { name: 'OrdenFlujo', nullable: true })
  ordenFlujo: number | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @OneToMany(() => SubTarea, (subTarea) => subTarea.tareaFlujoTipo)
  subTareas: SubTarea[];

  @OneToMany(() => Tarea, (tarea) => tarea.tareaFlujoTipo)
  tareas: Tarea[];
}
