import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProyectoUsuarioTipo } from './proyecto-usuario-tipo.entity';
import { Proyecto } from './proyecto.entity';
import { ProyectoUsuarioReporte } from './proyecto-usuario-reporte.entity';

@Index('PK_ProyectoUsuario', ['id'], { unique: true })
@Entity('ProyectoUsuario', { schema: 'dbo' })
export class ProyectoUsuario {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Nombre', length: 50 })
  nombre: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('varchar', { name: 'Correo', length: 50 })
  correo: string;

  @Column('varchar', { name: 'Telefono', nullable: true, length: 50 })
  telefono: string | null;

  @ManyToOne(
    () => ProyectoUsuarioTipo,
    (proyectoUsuarioTipo) => proyectoUsuarioTipo.proyectoUsuarios,
  )
  @JoinColumn([{ name: 'TipoId', referencedColumnName: 'id' }])
  tipo: ProyectoUsuarioTipo;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoUsuarios)
  @JoinColumn([{ name: 'ProyectoId', referencedColumnName: 'id' }])
  proyecto: Proyecto;

  @OneToMany(
    () => ProyectoUsuarioReporte,
    (proyectoUsuarioReporte) => proyectoUsuarioReporte.proyectoUsuario,
  )
  proyectoUsuarioReportes: ProyectoUsuarioReporte[];
}
