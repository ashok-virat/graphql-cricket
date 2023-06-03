import { Test, TestingModule } from '@nestjs/testing';
import { CricketersResolver } from './cricketers.resolver';

describe('CricketersResolver', () => {
  let resolver: CricketersResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CricketersResolver],
    }).compile();

    resolver = module.get<CricketersResolver>(CricketersResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
