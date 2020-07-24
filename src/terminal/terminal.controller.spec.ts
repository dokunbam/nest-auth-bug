import { Test, TestingModule } from '@nestjs/testing';
import { TerminalController } from './terminal.controller';

describe('Terminal Controller', () => {
  let controller: TerminalController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TerminalController],
    }).compile();

    controller = module.get<TerminalController>(TerminalController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
