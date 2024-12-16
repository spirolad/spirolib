import { TestBed } from '@angular/core/testing';

import { ThemeConfigServiceService } from './theme-config-service.service';

describe('ThemeConfigServiceService', () => {
  let service: ThemeConfigServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeConfigServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should reject non conform color', () => {
    const color = '#Hello World!';
    expect(service.checkColor(color)).toThrowError();
  });

  it('Should not reject conform color', () => {
    const color = '#000000';
    expect(service.checkColor(color)).not.toThrowError();
  });

  it('should set all variables', () => {
    service.setAllVariables();
    expect(document.documentElement.style.getPropertyValue('--sp-primary-color')).toBe('#3f51b5');
    expect(document.documentElement.style.getPropertyValue('--sp-white-color')).toBe('#e9ecef');
  });

  it('should set as css variable', () => {
    service.setAsCssVariable('#000000', 'black-color');
    expect(document.documentElement.style.getPropertyValue('--sp-black-color')).toBe('#000000');
  });

});
