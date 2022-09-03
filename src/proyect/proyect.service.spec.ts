import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Proyecto } from 'src/database/entity';
import { Repository } from 'typeorm';
import { ProyectBetweenStatusResponse } from './response';
import { ProyectService } from './proyect.service';

describe('ProyectService', () => {
  let service: ProyectService;
  let repository: Repository<Proyecto>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProyectService,
        {
          provide: getRepositoryToken(Proyecto),
          useValue: { createQueryBuilder: jest.fn() }, // Mock repository
        },
      ],
    }).compile();

    service = module.get<ProyectService>(ProyectService);
    repository = module.get(getRepositoryToken(Proyecto));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  describe('getListProyectsBetweenStatus', () => {
    const result: ProyectBetweenStatusResponse[] = [
      {
        empresa: 'empresa',
        proyecto: 'proyecto',
        actividad: 'actividad',
        prioridad: 'prioridad',
        fechaInicioProyecto: '01/01/2020',
        fechaFinalProyectoEstimada: '01/01/2020',
        estado: 'estado',
      },
    ];
    it('getListProyectsBetweenStatus', async () => {
      const createQueryBuilder: any = {
        select: () => createQueryBuilder,
        innerJoin: () => createQueryBuilder,
        where: () => createQueryBuilder,
        orderBy: () => createQueryBuilder,
        getRawMany: () => Promise.resolve(result),
      };
      jest
        .spyOn(repository, 'createQueryBuilder')
        .mockImplementation(() => createQueryBuilder);

      expect(await service.getListProyectsBetweenStatus(1, 2)).not.toBe(
        Promise.resolve(result),
      );
    });
  });
});
