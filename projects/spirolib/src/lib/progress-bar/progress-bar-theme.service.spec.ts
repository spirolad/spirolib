import { TestBed } from '@angular/core/testing';

import { ProgressBarThemeService } from './progress-bar-theme.service';

describe('ProgressBarThemeService', () => {
  let service: ProgressBarThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgressBarThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
