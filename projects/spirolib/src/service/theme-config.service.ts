import { Injectable } from '@angular/core';
import {_CssValidationService} from "./css-validation.service";
import {_CustomColorService} from "./custom-color.service";

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigService {

  private _primaryColor = '#007bff';
  private _whiteColor = '#e9ecef';
  private _absoluteWhiteColor = '#ffffff';

  constructor(private _cssValidationService: _CssValidationService, private customColorService: _CustomColorService){}

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
    return this.customColorService.isCustomColor(name);
  }

  /*
    * Add custom color to the list of custom colors
    * @param name - color name
    * @param color - hex color code
   */
  addCustomColor(name: string, color: string): void {
    this.checkColor(color);
    this.customColorService.addCustomColor(name, color);
  }

  /*
    * Translate color name to hex color code
    * @param name - color name
    * @returns hex color code or color name if not found
   */
  translateColor(name: string): string {
    return this.customColorService.getCustomColor(name) || name;
  }

}

