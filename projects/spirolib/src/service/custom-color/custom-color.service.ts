import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class _CustomColorService {

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

  isCustomColor(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.customColor, name);
  }

  addCustomColor(name: string, color: string): void {
    this.customColor[name] = color;
  }

  getCustomColor(name: string): string {
    return this.customColor[name];
  }

}
