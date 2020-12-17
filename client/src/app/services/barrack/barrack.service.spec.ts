import { TestBed } from '@angular/core/testing';

import { BarrackService } from './barrack.service';

describe('BarrackService', () => {
  let service: BarrackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarrackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
