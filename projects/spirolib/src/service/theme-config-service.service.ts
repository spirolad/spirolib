import { Injectable } from '@angular/core';
import {_CssValidationService} from "./css-validation.service";
@Injectable({
  providedIn: 'root'
})
export class ThemeConfigServiceService {

  private _primaryColor = '#007bff';
  private _whiteColor = '#e9ecef';
  private _absoluteWhiteColor = '#ffffff';

  constructor(private _cssValidationService: _CssValidationService){}

  get primaryColor(): string {
    return this._primaryColor;
  }

  get whiteColor(): string {
    return this._whiteColor;
  }

  get absoluteWhiteColor(): string {
    return this._absoluteWhiteColor;
  }

  private checkColor(color?: string): void {
    if (color && !this._cssValidationService.isValidCSSColor(color)) {
      throw new Error('Invalid color format: ' + color);
    }
  }

  public updatePrimaryColor(color: string): void {
    this.checkColor(color);
    this._primaryColor = color;
  }

  public updateWhiteColor(color: string): void {
    this.checkColor(color);
    this._whiteColor = color;
  }

  public updateAbsoluteWhiteColor(color: string): void {
    this.checkColor(color);
    this._absoluteWhiteColor = color;
  }

}

