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
import { AgenteRolTipo } from './agente-rol-tipo.entity';
import { SubTarea } from './sub-tarea.entity';
import { Tarea } from './tarea.entity';
import { ProyectoAgente } from './proyecto-agente.entity';

@Index('PK_Agente', ['id'], { unique: true })
@Entity('Agente', { schema: 'dbo' })
export class Agente {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NombreTrabajador', nullable: true, length: 100 })
  nombreTrabajador: string | null;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 100 })
  descripcion: string | null;

  @Column('varchar', { name: 'Correo', length: 50 })
  correo: string;

  @Column('date', { name: 'FechaNacimiento', nullable: true })
  fechaNacimiento: Date | null;

  @Column('date', { name: 'FechaIngreso', nullable: true })
  fechaIngreso: Date | null;

  @Column('bit', { name: 'Activo', nullable: true })
  activo: boolean | null;

  @ManyToOne(() => AgenteRolTipo, (agenteRolTipo) => agenteRolTipo.agentes)
  @JoinColumn([{ name: 'RolId', referencedColumnName: 'id' }])
  rol: AgenteRolTipo;

  @ManyToMany(() => SubTarea, (subTarea) => subTarea.agentes)
  @JoinTable({
    name: 'AgenteSubTarea',
    joinColumns: [{ name: 'AgenteId', referencedColumnName: 'id' }],
    inverseJoinColumns: [{ name: 'SubTareaId', referencedColumnName: 'id' }],
    schema: 'dbo',
  })
  subTareas: SubTarea[];

  @ManyToMany(() => Tarea, (tarea) => tarea.agentes)
  tareas: Tarea[];

  @OneToMany(() => ProyectoAgente, (proyectoAgente) => proyectoAgente.agente)
  proyectoAgentes: ProyectoAgente[];
}
