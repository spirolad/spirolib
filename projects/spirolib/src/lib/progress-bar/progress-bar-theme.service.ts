import { Injectable } from '@angular/core';
import {_CssValidationService} from "../../service/css-validation.service";

@Injectable({
  providedIn: 'root'
})
export class ProgressBarThemeService {

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

  constructor(private cssValidationService: _CssValidationService) { }

  set width(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._width = value;
    }
  }

  set animationDuration(value: number) {
    if (value > 0) {
      this._animationDuration = value;
    }
  }

  set borderRadius(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._borderRadius = value;
    }
  }

  set height(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._height = value;
    }
  }

  set backgroundColor(value: string) {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._backgroundColor = value;
    }
  }

  set barColor(value: string) {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._barColor = value;
    }
  }

  set textColor(value: string) {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._textColor = value;
    }
  }

  set fontWeight(value: string) {
    if (this.cssValidationService.isValidCSSFontWeight(value)) {
      this._fontWeigh = value;
    }
  }

  set indeterminateBarWidth(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._indeterminateBarWidth = value;
    }
  }

  set fontSize(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._fontSize = value;
    }
  }

}
