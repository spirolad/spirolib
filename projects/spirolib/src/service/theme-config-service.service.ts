import { Injectable } from '@angular/core';

const colorRegEx = /^#[0-9a-f]{6}$/i;
const prefixLib = '--sp-';

@Injectable({
  providedIn: 'root'
})
export class ThemeConfigServiceService {

  private _primaryColor = '#007bff';
  private _whiteColor = '#e9ecef';

  constructor() {
    this.setAllVariables();
  }

  private checkColor(color?: string): void {
    if (color && !colorRegEx.test(color)) {
      throw new Error('Invalid color format: ' + color);
    }
  }

  private setAllVariables(): void {
    this.setAsCssVariable(this._primaryColor, 'primary-color');
    this.setAsCssVariable(this._whiteColor, 'white-color');
  }

  private setAsCssVariable(color: string, variableName: string): void {
    this.checkColor(color);
    document.documentElement.style.setProperty(`${prefixLib}${variableName}`, color);
  }

  public updatePrimaryColor(color: string): void {
    this.checkColor(color);
    this._primaryColor = color;
    this.setAsCssVariable(this._primaryColor, 'primary-color');
  }

  public updateWhiteColor(color: string): void {
    this.checkColor(color);
    this._whiteColor = color;
    this.setAsCssVariable(this._whiteColor, 'white-color');
  }
}

