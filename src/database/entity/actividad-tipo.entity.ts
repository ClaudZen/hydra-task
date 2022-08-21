import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Proyecto } from './proyecto.entity';

@Index('PK_ActividadTipo', ['id'], { unique: true })
@Entity('ActividadTipo', { schema: 'dbo' })
export class ActividadTipo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'NombreTipo', nullable: true, length: 50 })
  nombreTipo: string | null;

  @Column('varchar', { name: 'DescripcionTipo', nullable: true, length: 500 })
  descripcionTipo: string | null;

  @OneToMany(() => Proyecto, (proyecto) => proyecto.actividadTipo)
  proyectos: Proyecto[];
}
