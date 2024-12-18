import { TestBed } from '@angular/core/testing';

import { _CustomColorService } from './custom-color.service';

describe('CustomColorService', () => {
  let service: _CustomColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: _CustomColorService, useClass: _CustomColorService }
      ]
    });
    service = TestBed.inject(_CustomColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should check if color is custom', () => {
    expect(service.isCustomColor('maroon')).toBeTrue();
    expect(service.isCustomColor('red')).toBeTrue();
    expect(service.isCustomColor('orange')).toBeTrue();
    expect(service.isCustomColor('yellow')).toBeTrue();
    expect(service.isCustomColor('olive')).toBeTrue();
    expect(service.isCustomColor('purple')).toBeTrue();
    expect(service.isCustomColor('fuchsia')).toBeTrue();
    expect(service.isCustomColor('white')).toBeTrue();
    expect(service.isCustomColor('lime')).toBeTrue();
    expect(service.isCustomColor('green')).toBeTrue();
    expect(service.isCustomColor('navy')).toBeTrue();
    expect(service.isCustomColor('blue')).toBeTrue();
    expect(service.isCustomColor('aqua')).toBeTrue();
    expect(service.isCustomColor('teal')).toBeTrue();
    expect(service.isCustomColor('black')).toBeTrue();
    expect(service.isCustomColor('silver')).toBeTrue();
    expect(service.isCustomColor('gray')).toBeTrue();
  });

  it('should add custom color', () => {
    service.addCustomColor('customColor', '#ff00ff');
    expect(service.isCustomColor('customColor')).toBeTrue();
    expect(service.getCustomColor('customColor')).toBe('#ff00ff');
  });

  it('should get custom color', () => {
    expect(service.getCustomColor('maroon')).toBe('#800000');
  });

  it('should not get custom color', () => {
    expect(service.getCustomColor('customColor')).toBeUndefined();
  });
});
