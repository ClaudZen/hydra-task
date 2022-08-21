import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProyectoAgente } from './proyecto-agente.entity';

@Index('PK_ProyectoAgenteTipo', ['id'], { unique: true })
@Entity('ProyectoAgenteTipo', { schema: 'dbo' })
export class ProyectoAgenteTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @OneToMany(() => ProyectoAgente, (proyectoAgente) => proyectoAgente.tipo)
  proyectoAgentes: ProyectoAgente[];
}
