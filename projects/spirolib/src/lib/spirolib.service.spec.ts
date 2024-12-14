import { TestBed } from '@angular/core/testing';

import { SpirolibService } from './spirolib.service';

describe('SpirolibService', () => {
  let service: SpirolibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpirolibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
