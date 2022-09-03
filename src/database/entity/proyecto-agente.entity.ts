import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Agente } from './agente.entity';
import { Proyecto } from './proyecto.entity';
import { ProyectoAgenteTipo } from './proyecto-agente-tipo.entity';

@Entity('ProyectoAgente', { schema: 'dbo' })
export class ProyectoAgente {
  @Column('int', { primary: true, name: 'AgenteId' })
  agenteId: number;

  @Column('int', { primary: true, name: 'ProyectoId' })
  proyectoId: number;

  @ManyToOne(() => Proyecto, (proyecto) => proyecto.proyectoAgentes)
  @JoinColumn([{ name: 'ProyectoId', referencedColumnName: 'id' }])
  proyecto: Proyecto;

  @ManyToOne(
    () => ProyectoAgenteTipo,
    (proyectoAgenteTipo) => proyectoAgenteTipo.proyectoAgentes,
  )
  @JoinColumn([{ name: 'TipoId', referencedColumnName: 'id' }])
  tipo: ProyectoAgenteTipo;

  @ManyToOne(() => Agente, (agente) => agente.proyectoAgentes)
  @JoinColumn([{ name: 'AgenteId', referencedColumnName: 'id' }])
  agente: Agente;
}
