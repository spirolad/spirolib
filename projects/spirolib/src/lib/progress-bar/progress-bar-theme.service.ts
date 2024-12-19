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
  private _fontWeight: string | undefined;
  private _indeterminateBarWidth: string | undefined;
  private _fontSize: string | undefined;

  constructor(private cssValidationService: _CssValidationService) {
    super();
  }

  set width(value: string) {
    this.validateAndSetProperty('_width', value, this.cssValidationService.isValidCSSMeasurement);
  }
  get width(): string | undefined {
    return this._width;
  }

  set animationDuration(value: number) {
    if (value > 0) this._animationDuration = value;
  }
  get animationDuration(): number | undefined {
    return this._animationDuration;
  }

  set borderRadius(value: string) {
    this.validateAndSetProperty('_borderRadius', value, this.cssValidationService.isValidCSSMeasurement);
  }
  get borderRadius(): string | undefined {
    return this._borderRadius;
  }

  set height(value: string) {
    this.validateAndSetProperty('_height', value, this.cssValidationService.isValidCSSMeasurement);
  }
  get height(): string | undefined {
    return this._height;
  }

  set backgroundColor(value: string) {
    this.validateAndSetProperty('_backgroundColor', value, this.cssValidationService.isValidCSSColor);
  }
  get backgroundColor(): string | undefined {
    return this._backgroundColor;
  }

  set barColor(value: string) {
    this.validateAndSetProperty('_barColor', value, this.cssValidationService.isValidCSSColor);
  }
  get barColor(): string | undefined {
    return this._barColor;
  }

  set textColor(value: string) {
    this.validateAndSetProperty("_textColor", value, this.cssValidationService.isValidCSSColor);
  }
  get textColor(): string | undefined {
    return this._textColor;
  }

  set fontWeight(value: string) {
    this.validateAndSetProperty('_fontWeight', value, this.cssValidationService.isValidCSSFontWeight);
  }
  get fontWeight(): string | undefined {
    return this._fontWeight;
  }

  set fontSize(value: string) {
    this.validateAndSetProperty('_fontSize', value, this.cssValidationService.isValidCSSMeasurement);
  }
  get fontSize(): string | undefined {
    return this._fontSize;
  }

  set indeterminateBarWidth(value: string) {
    this.validateAndSetProperty('_indeterminateBarWidth', value, this.cssValidationService.isValidCSSMeasurement);
  }
  get indeterminateBarWidth(): string | undefined {
    return this._indeterminateBarWidth;
  }

}
