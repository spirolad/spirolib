import { TestBed } from '@angular/core/testing';

import { ProgressBarThemeService } from './progress-bar-theme.service';
import {_CustomColorService} from "../../service/custom-color/custom-color.service";
import {_CssValidationService} from "../../service/css-validation/css-validation.service";

describe('ProgressBarThemeService', () => {
  let service: ProgressBarThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: _CssValidationService, useClass: _CssValidationService },
        { provide: _CustomColorService, useClass: _CustomColorService },
      ]
    });
    service = TestBed.inject(ProgressBarThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should be undefined', () => {
    expect(service.width).toBeUndefined();
    expect(service.animationDuration).toBeUndefined();
    expect(service.borderRadius).toBeUndefined();
    expect(service.height).toBeUndefined();
    expect(service.backgroundColor).toBeUndefined();
    expect(service.barColor).toBeUndefined();
    expect(service.textColor).toBeUndefined();
    expect(service.fontWeight).toBeUndefined();
    expect(service.indeterminateBarWidth).toBeUndefined();
  });

  it('Shoud set width', () => {
    service.width = '50%';
    expect(service.width).toBe('50%');
  });

  it('Shoud not set width', () => {
    service.width = '50';
    expect(service.width).toBeUndefined();
  });

    it('Shoud set animationDuration', () => {
        service.animationDuration = 500;
        expect(service.animationDuration).toBe(500);
    });

    it('Shoud not set animationDuration', () => {
        service.animationDuration = -500;
        expect(service.animationDuration).toBeUndefined();
    });

    it('Shoud set borderRadius', () => {
        service.borderRadius = '50%';
        expect(service.borderRadius).toBe('50%');
    });

    it('Shoud not set borderRadius', () => {
        service.borderRadius = '50';
        expect(service.borderRadius).toBeUndefined();
    });

    it('Shoud set height', () => {
        service.height = '50%';
        expect(service.height).toBe('50%');
    });

    it('Shoud not set height', () => {
        service.height = '50';
        expect(service.height).toBeUndefined();
    });

    it('Shoud set backgroundColor', () => {
        service.backgroundColor = '#ff00ff';
        expect(service.backgroundColor).toBe('#ff00ff');
    });

    it('Shoud set barColor', () => {
        service.barColor = '#ff00ff';
        expect(service.barColor).toBe('#ff00ff');
    });

    it('Shoud set textColor', () => {
        service.textColor = '#ff00ff';
        expect(service.textColor).toBe('#ff00ff');
    });

    it('Shoud set fontWeight', () => {
        service.fontWeight = 'normal';
        expect(service.fontWeight).toBe('normal');
    });

    it('Shoud not set fontWeight', () => {
        service.fontWeight = 'norma';
        expect(service.fontWeight).toBeUndefined();
    });

    it('Shoud set fontSize', () => {
        service.fontSize = '16px';
        expect(service.fontSize).toBe('16px');
    });

    it('Shoud not set fontSize', () => {
        service.fontSize = '16';
        expect(service.fontSize).toBeUndefined();
    });

    it('Shoud set indeterminateBarWidth', () => {
        service.indeterminateBarWidth = '50%';
        expect(service.indeterminateBarWidth).toBe('50%');
    });

    it('Shoud not set indeterminateBarWidth', () => {
        service.indeterminateBarWidth = '50';
        expect(service.indeterminateBarWidth).toBeUndefined();
    });

});
