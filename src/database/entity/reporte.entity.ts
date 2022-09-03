import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProyectoUsuarioReporte } from './proyecto-usuario-reporte.entity';
import { ReporteTipo } from './reporte-tipo.entity';

@Entity('Reporte', { schema: 'dbo' })
export class Reporte {
  @PrimaryGeneratedColumn({ type: 'int', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('datetime', { name: 'FechaCreacion' })
  fechaCreacion: Date;

  @Column('datetime', { name: 'FechaCierre', nullable: true })
  fechaCierre: Date | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @OneToMany(
    () => ProyectoUsuarioReporte,
    (proyectoUsuarioReporte) => proyectoUsuarioReporte.reporte,
  )
  proyectoUsuarioReportes: ProyectoUsuarioReporte[];

  @ManyToOne(() => ReporteTipo, (reporteTipo) => reporteTipo.reportes)
  @JoinColumn([{ name: 'TipoId', referencedColumnName: 'id' }])
  tipo: ReporteTipo;
}
