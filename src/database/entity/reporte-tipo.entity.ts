import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Reporte } from './reporte.entity';

@Entity('ReporteTipo', { schema: 'dbo' })
export class ReporteTipo {
  @PrimaryGeneratedColumn({ type: 'smallint', name: 'ID' })
  id: number;

  @Column('varchar', { name: 'Titulo', length: 50 })
  titulo: string;

  @Column('varchar', { name: 'Descripcion', nullable: true, length: 500 })
  descripcion: string | null;

  @Column('bit', { name: 'Activo' })
  activo: boolean;

  @OneToMany(() => Reporte, (reporte) => reporte.tipo)
  reportes: Reporte[];
}
