import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Agente } from './agente.entity';

@Index('PK_AgenteRolTipo', ['id'], { unique: true })
@Entity('AgenteRolTipo', { schema: 'dbo' })
export class AgenteRolTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'TipoRol', nullable: true, length: 50 })
  tipoRol: string | null;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @OneToMany(() => Agente, (agente) => agente.rol)
  agentes: Agente[];
}
