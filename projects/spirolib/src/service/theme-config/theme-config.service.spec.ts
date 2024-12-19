import { TestBed } from '@angular/core/testing';

import { ThemeConfigService } from './theme-config.service';
import {_CustomColorService} from "../custom-color/custom-color.service";
import {_CssValidationService} from "../css-validation/css-validation.service";

describe('ThemeConfigServiceService', () => {
  let service: ThemeConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: _CssValidationService, useClass: _CssValidationService },
        { provide: _CustomColorService, useClass: _CustomColorService},
        ]
    });
    service = TestBed.inject(ThemeConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should update primary color', () => {
    service.updatePrimaryColor('#ff0000');
    expect(service).toBeTruthy();
  });

  it('should update absolute white color', () => {
    service.updateAbsoluteWhiteColor('#ff0000');
    expect(service).toBeTruthy();
  });

  it('should update white color', () => {
    service.updateWhiteColor('#ff0000');
    expect(service).toBeTruthy();
  });

  it('should throw error on invalid color format', () => {
    expect(() => service.updatePrimaryColor('ff0000')).toThrowError('Invalid color format: ff0000');
  });

  it('should throw error on invalid color format', () => {
    expect(() => service.updateAbsoluteWhiteColor('ff0000')).toThrowError('Invalid color format: ff0000');
  });

  it('should throw error on invalid color format', () => {
    expect(() => service.updateWhiteColor('ff0000')).toThrowError('Invalid color format: ff0000');
  });

  it('Should check if color is custom color', () => {
    expect(service.isCustomColor('maroon')).toBeTrue();
    expect(service.isCustomColor('red')).toBeTrue();
  });

  it('Should add custom color', () => {
    service.addCustomColor('customColor', '#ff00ff');
    expect(service).toBeTruthy();
    expect(service.isCustomColor('customColor')).toBeTrue();
  });

  it('Should translate custom color', () => {
    expect(service.translateColor('maroon')).toBe('#800000');
  });

  it('Should translate custom color', () => {
    expect(service.translateColor('customColor')).toBe('customColor');
  });

});
