import { Test, TestingModule } from '@nestjs/testing';
import { CricketersService } from './cricketers.service';

describe('CricketersService', () => {
  let service: CricketersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CricketersService],
    }).compile();

    service = module.get<CricketersService>(CricketersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
