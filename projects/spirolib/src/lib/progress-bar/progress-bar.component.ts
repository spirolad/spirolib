import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import { _CssValidationService } from '../../service/css-validation/css-validation.service';
import {ThemeConfigService} from "../../service/theme-config/theme-config.service";
import {ProgressBarThemeService} from "./progress-bar-theme.service";
import {ValidatableComponent} from "../ValidatableComponent";

type ProgressBarMode = 'determinate' | 'indeterminate';

@Component({
    selector: 'sp-progress-bar',
  imports: [
    NgClass
  ],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent extends ValidatableComponent {

  // Properties
  protected _width = '100%';
  protected _animationDuration = 1.5;
  protected _borderRadius = '0.25rem';
  protected _height = '0.5rem';
  protected _backgroundColor: string;
  protected _barColor: string;
  protected _textColor: string;
  protected _fontWeight = 'bold';
  protected _indeterminateBarWidth = '20%';
  protected _fontSize?: string;

  // Inputs
  @Input() progress = 0;
  @Input() displayValue = false;
  @Input() mode: ProgressBarMode = 'determinate';

  // Dynamic setters
  @Input()
  set width(value: string) {
    this.validateAndSetProperty('_width', value, this.cssValidationService.isValidCSSMeasurement);
  }

  @Input()
  set animationDuration(value: number) {
    if (value > 0) this._animationDuration = value;
  }

  @Input()
  set borderRadius(value: string) {
    this.validateAndSetProperty('_borderRadius', value, this.cssValidationService.isValidCSSMeasurement);
  }

  @Input()
  set height(value: string) {
    this.validateAndSetProperty('_height', value, this.cssValidationService.isValidCSSMeasurement);
  }

  @Input()
  set backgroundColor(value: string) {
    this.validateAndSetProperty('_backgroundColor', value, this.cssValidationService.isValidCSSColor);
  }

  @Input()
  set barColor(value: string) {
    this.validateAndSetProperty('_barColor', value, this.cssValidationService.isValidCSSColor);
  }

  @Input()
  set textColor(value: string) {
    this.validateAndSetProperty("_textColor", value, this.cssValidationService.isValidCSSColor);
  }

  @Input()
  set fontWeight(value: string) {
    this.validateAndSetProperty('_fontWeight', value, this.cssValidationService.isValidCSSFontWeight);
  }

  @Input()
  set fontSize(value: string) {
    this.validateAndSetProperty('_fontSize', value, this.cssValidationService.isValidCSSMeasurement);
  }

  @Input()
  set indeterminateBarWidth(value: string) {
    this.validateAndSetProperty('_indeterminateBarWidth', value, this.cssValidationService.isValidCSSMeasurement);
  }

  constructor(
    private cssValidationService: _CssValidationService,
    private themeConfigService: ThemeConfigService,
    private progressBarTheme: ProgressBarThemeService
  ) {
    super();
    this._backgroundColor = themeConfigService.translateColor(progressBarTheme.backgroundColor ?? themeConfigService.whiteColor);
    this._barColor = themeConfigService.translateColor(progressBarTheme.barColor ?? themeConfigService.primaryColor);
    this._textColor = themeConfigService.translateColor(progressBarTheme.textColor ?? themeConfigService.absoluteWhiteColor);
    this._width = progressBarTheme.width ?? this._width;
    this._animationDuration = progressBarTheme.animationDuration ?? this._animationDuration;
    this._borderRadius = progressBarTheme.borderRadius ?? this._borderRadius;
    this._height = progressBarTheme.height ?? this._height;
    this._fontWeight = progressBarTheme.fontWeight ?? this._fontWeight;
    this._indeterminateBarWidth = progressBarTheme.indeterminateBarWidth ?? this._indeterminateBarWidth;
    this._fontSize = progressBarTheme.fontSize ?? this._fontSize;
  }
}
