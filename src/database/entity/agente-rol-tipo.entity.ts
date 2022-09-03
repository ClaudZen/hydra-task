import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Agente } from './agente.entity';

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
