import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProyectoUsuario } from './proyecto-usuario.entity';

@Index('PK_ProyectoUsuarioTipo', ['id'], { unique: true })
@Entity('ProyectoUsuarioTipo', { schema: 'dbo' })
export class ProyectoUsuarioTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @OneToMany(() => ProyectoUsuario, (proyectoUsuario) => proyectoUsuario.tipo)
  proyectoUsuarios: ProyectoUsuario[];
}
