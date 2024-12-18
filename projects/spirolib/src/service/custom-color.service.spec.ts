import { TestBed } from '@angular/core/testing';

import { _CustomColorService } from './custom-color.service';

describe('CustomColorServiceService', () => {
  let service: _CustomColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(_CustomColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
