import { TestBed } from '@angular/core/testing';

import { BarracksService } from './barracks.service';

describe('BarracksService', () => {
  let service: BarracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
