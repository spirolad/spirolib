import { TestBed } from '@angular/core/testing';

import { _CssValidationService } from './css-validation.service';
import {_CustomColorService} from "./custom-color.service";

export class _CustomColorServiceMock {

  private customColor: Record<string, string> = {
    'maroon': '#800000',
    'red': '#ff0000',
    'orange': '#ffa500',
    'yellow': '#ffff00',
    'olive': '#808000',
    'purple': '#800080',
    'fuchsia': '#ff00ff',
    'customColor': '#ff00ff',
  };

  isCustomColor(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.customColor, name);
  }

}

describe('CssValidationService', () => {
  let service: _CssValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: _CustomColorService, useClass: _CustomColorServiceMock }
      ]
    });
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
    expect(service.isValidCSSMeasurement('#zd102')).toBeFalse();
    expect(service.isValidCSSMeasurement('pineaple')).toBeFalse();
    expect(service.isValidCSSMeasurement('100px, 100px')).toBeFalse();
  });

  it('should validate CSS color', () => {
    expect(service.isValidCSSColor('#000')).toBeTrue();
    expect(service.isValidCSSColor('#000000')).toBeTrue();
    expect(service.isValidCSSColor('red')).toBeTrue();
    expect(service.isValidCSSColor('rgb(0,0,0)')).toBeTrue();
    expect(service.isValidCSSColor('rgba(0,0,0,0)')).toBeTrue();
  });

  it('should not validate CSS color', () => {
    expect(service.isValidCSSColor('100')).toBeFalse();
    expect(service.isValidCSSColor('100px 100px')).toBeFalse();
    expect(service.isValidCSSColor('100px, 100px')).toBeFalse();
  });

  it('should validate custom CSS color', () => {
    expect(service.isValidCSSColor('customColor')).toBeTrue();
  });

});
