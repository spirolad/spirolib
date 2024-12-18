import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import { _CssValidationService } from '../../service/css-validation.service';
import {ThemeConfigServiceService} from "../../service/theme-config-service.service";
import {ProgressBarThemeService} from "./progress-bar-theme.service";

type ProgressBarMode = 'determinate' | 'indeterminate';

@Component({
    selector: 'sp-progress-bar',
  imports: [
    NgClass
  ],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {

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
  protected _fontSize: string | undefined;

  // Inputs
  @Input() progress = 0;
  @Input() displayValue = false;
  @Input() mode: ProgressBarMode = 'determinate';

  @Input()
  set width(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._width = value;
    }
  }
  @Input()
  set animationDuration(value: number) {
    if (value > 0) {
      this._animationDuration = value;
    }
  }

  @Input()
  set borderRadius(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._borderRadius = value;
    }
  }

  @Input()
  set height(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._height = value;
    }
  }

  @Input()
  set backgroundColor(value: string)
  {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._backgroundColor = value;
    }
  }

  @Input()
  set barColor(value: string)
  {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._barColor = value;
    }
  }

  @Input()
  set textColor(value: string)
  {
    if (this.cssValidationService.isValidCSSColor(value)) {
      this._textColor = value;
    }
  }

  @Input()
  set fontWeight(value: string)
  {
    if (this.cssValidationService.isValidCSSFontWeight(value)) {
      this._fontWeight = value;
    }
  }

  @Input()
  set fontSize(value: string)
  {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._fontSize = value;
    }
  }

  @Input()
  set indeterminateBarWidth(value: string)
  {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._indeterminateBarWidth = value;
    }
  }

  constructor(private cssValidationService: _CssValidationService, private themeConfigServiceService: ThemeConfigServiceService, private progessBarTheme: ProgressBarThemeService) {
    this._backgroundColor = progessBarTheme.backgroundColor ?? themeConfigServiceService.whiteColor;
    this._barColor = progessBarTheme.barColor ?? themeConfigServiceService.primaryColor;
    this._textColor = progessBarTheme.textColor ?? themeConfigServiceService.absoluteWhiteColor;
    this._width = progessBarTheme.width ?? this._width;
    this._animationDuration = progessBarTheme.animationDuration ?? this._animationDuration;
    this._borderRadius = progessBarTheme.borderRadius ?? this._borderRadius;
    this._height = progessBarTheme.height ?? this._height;
    this._fontWeight = progessBarTheme.fontWeight ?? this._fontWeight;
    this._indeterminateBarWidth = progessBarTheme.indeterminateBarWidth ?? this._indeterminateBarWidth;
    this._fontSize = progessBarTheme.fontSize ?? this._fontSize;
  }

}
