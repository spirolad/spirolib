import {Injectable} from '@angular/core';
import {_CssValidationService} from "../../service/css-validation/css-validation.service";
import {ValidatableComponent} from "../ValidatableComponent";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarThemeService extends ValidatableComponent {

  private _width: string | undefined;
  private _animationDuration: number | undefined;
  private _borderRadius: string | undefined;
  private _height: string | undefined;
  private _backgroundColor: string | undefined;
  private _barColor: string | undefined;
  private _textColor: string | undefined;
  private _fontWeigh: string | undefined;
  private _indeterminateBarWidth: string | undefined;
  private _fontSize: string | undefined;

  constructor(private cssValidationService: _CssValidationService) {
    super();
  }

  // Dynamic setters
  set width(value: string) {
    this.validateAndSetProperty('_width', value, this.cssValidationService.isValidCSSMeasurement);
  }

  set animationDuration(value: number) {
    if (value > 0) this._animationDuration = value;
  }

  set borderRadius(value: string) {
    this.validateAndSetProperty('_borderRadius', value, this.cssValidationService.isValidCSSMeasurement);
  }

  set height(value: string) {
    this.validateAndSetProperty('_height', value, this.cssValidationService.isValidCSSMeasurement);
  }

  set backgroundColor(value: string) {
    this.validateAndSetProperty('_backgroundColor', value, this.cssValidationService.isValidCSSColor);
  }

  set barColor(value: string) {
    this.validateAndSetProperty('_barColor', value, this.cssValidationService.isValidCSSColor);
  }

  set textColor(value: string) {
    this.validateAndSetProperty("_textColor", value, this.cssValidationService.isValidCSSColor);
  }

  set fontWeight(value: string) {
    this.validateAndSetProperty('_fontWeight', value, this.cssValidationService.isValidCSSFontWeight);
  }

  set fontSize(value: string) {
    this.validateAndSetProperty('_fontSize', value, this.cssValidationService.isValidCSSMeasurement);
  }

  set indeterminateBarWidth(value: string) {
    this.validateAndSetProperty('_indeterminateBarWidth', value, this.cssValidationService.isValidCSSMeasurement);
  }

}
