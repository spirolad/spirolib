import { TestBed } from '@angular/core/testing';

import { CustomColorServiceService } from './custom-color.service';

describe('CustomColorServiceService', () => {
  let service: CustomColorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomColorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
