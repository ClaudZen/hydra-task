import { Test, TestingModule } from '@nestjs/testing';
import { ProyectController } from './proyect.controller';

describe('ProyectController', () => {
  let controller: ProyectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProyectController],
    }).compile();

    controller = module.get<ProyectController>(ProyectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
