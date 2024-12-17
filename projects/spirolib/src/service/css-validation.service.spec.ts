import { TestBed } from '@angular/core/testing';

import { _CssValidationService } from './css-validation.service';

describe('CssValidationService', () => {
  let service: _CssValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(_CssValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should validate CSS measurement', () => {
    expect(service.isValidCSSMeasurement('100px')).toBeTrue();
    expect(service.isValidCSSMeasurement('100%')).toBeTrue();
    expect(service.isValidCSSMeasurement('100vh')).toBeTrue();
    expect(service.isValidCSSMeasurement('100vw')).toBeTrue();
    expect(service.isValidCSSMeasurement('100rem')).toBeTrue();
  });

  it('should not validate CSS measurement', () => {
    expect(service.isValidCSSMeasurement('100')).toBeFalse();
    expect(service.isValidCSSMeasurement('100px 100px')).toBeFalse();
    expect(service.isValidCSSMeasurement('100px, 100px')).toBeFalse();
  });

});
