import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Proyecto } from './proyecto.entity';
import { Reporte } from './reporte.entity';
import { ProyectoUsuario } from './proyecto-usuario.entity';

@Entity('ProyectoUsuarioReporte', { schema: 'dbo' })
export class ProyectoUsuarioReporte {
  @Column('int', { primary: true, name: 'ProyectoId' })
  proyectoId: number;

  @Column('int', { primary: true, name: 'ProyectoUsuarioId' })
  proyectoUsuarioId: number;

  @Column('int', { primary: true, name: 'ReporteId' })
  reporteId: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoUsuarioReportes)
  @JoinColumn([{ name: 'ProyectoId', referencedColumnName: 'id' }])
  proyecto: Proyecto;

  @ManyToOne(() => Reporte, (reporte) => reporte.proyectoUsuarioReportes)
  @JoinColumn([{ name: 'ReporteId', referencedColumnName: 'id' }])
  reporte: Reporte;

  @ManyToOne(
    () => ProyectoUsuario,
    (proyectoUsuario) => proyectoUsuario.proyectoUsuarioReportes,
  )
  @JoinColumn([{ name: 'ProyectoUsuarioId', referencedColumnName: 'id' }])
  proyectoUsuario: ProyectoUsuario;
}
