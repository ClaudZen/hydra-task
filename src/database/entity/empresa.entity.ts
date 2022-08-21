import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Proyecto } from './proyecto.entity';

@Index('PK_Empresa', ['id'], { unique: true })
@Entity('Empresa', { schema: 'dbo' })
export class Empresa {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Rut', nullable: true, length: 10 })
  rut: string | null;

  @Column('varchar', { name: 'NombreEmpresa', nullable: true, length: 100 })
  nombreEmpresa: string | null;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'Activo', nullable: true })
  activo: boolean | null;

  @OneToMany(() => Proyecto, (proyecto) => proyecto.empresaProyecto)
  proyectos: Proyecto[];
}
