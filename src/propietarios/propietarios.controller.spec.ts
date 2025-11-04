import { Test, TestingModule } from '@nestjs/testing';
import { PropietariosController } from './propietarios.controller';

describe('PropietariosController', () => {
  let controller: PropietariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PropietariosController],
    }).compile();

    controller = module.get<PropietariosController>(PropietariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
