import { Injectable } from '@angular/core';
import {_CssValidationService} from "./css-validation.service";
@Injectable({
  providedIn: 'root'
})
export class ThemeConfigServiceService {

  private customColor: Record<string, string> = {
    'maroon': '#800000',
    'red': '#ff0000',
    'orange': '#ffa500',
    'yellow': '#ffff00',
    'olive': '#808000',
    'purple': '#800080',
    'fuchsia': '#ff00ff',
    'white': '#ffffff',
    'lime': '#00ff00',
    'green': '#008000',
    'navy': '#000080',
    'blue': '#0000ff',
    'aqua': '#00ffff',
    'teal': '#008080',
    'black': '#000000',
    'silver': '#c0c0c0',
    'gray': '#808080',
  };

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

  /*
    * Update absolute white color
    * @param color - hex color code
   */
  public updateAbsoluteWhiteColor(color: string): void {
    this.checkColor(color);
    this._absoluteWhiteColor = color;
  }

  /*
    * Check if color is custom color
    * @param name - color name
    * @returns true if color is custom color
   */
  isCustomColor(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.customColor, name);
  }

  /*
    * Add custom color to the list of custom colors
    * @param name - color name
    * @param color - hex color code
   */
  addCustomColor(name: string, color: string): void {
    this.checkColor(color);
    this.customColor[name] = color;
  }

  /*
    * Translate color name to hex color code
    * @param name - color name
    * @returns hex color code or color name if not found
   */
  translateColor(name: string): string {
    return this.customColor[name] ?? name;
  }

}

