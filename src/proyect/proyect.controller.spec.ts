import { HttpException, HttpStatus } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ProyectBetweenStatusResponse } from './response';
import { ProyectController } from './proyect.controller';
import { ProyectService } from './proyect.service';

describe('ProyectController', () => {
  let controller: ProyectController;
  let service: ProyectService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: ProyectService,
          useValue: { getListProyectsBetweenStatus: jest.fn() },
        },
      ],
      controllers: [ProyectController],
    }).compile();

    controller = module.get<ProyectController>(ProyectController);
    service = module.get<ProyectService>(ProyectService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
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

    it('OK', async () => {
      jest
        .spyOn(service, 'getListProyectsBetweenStatus')
        .mockReturnValue(Promise.resolve(result));
      expect(controller.getListProyectsBetweenStatus(1, 2)).toStrictEqual(
        Promise.resolve(result),
      );
    });
    it('HttpStatus.NO_CONTENT', async () => {
      jest
        .spyOn(service, 'getListProyectsBetweenStatus')
        .mockReturnValue(Promise.resolve([]));
      await expect(
        controller.getListProyectsBetweenStatus(1, 2),
      ).rejects.toEqual(
        new HttpException('proyects empty', HttpStatus.NO_CONTENT),
      );
    });
  });
});
