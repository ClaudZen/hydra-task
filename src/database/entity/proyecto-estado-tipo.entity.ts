import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Proyecto } from './proyecto.entity';

@Entity('ProyectoEstadoTipo', { schema: 'dbo' })
export class ProyectoEstadoTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'TipoEstado', nullable: true, length: 50 })
  tipoEstado: string | null;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'activo', nullable: true })
  activo: boolean | null;

  @OneToMany(() => Proyecto, (proyecto) => proyecto.estado)
  proyectos: Proyecto[];
}
