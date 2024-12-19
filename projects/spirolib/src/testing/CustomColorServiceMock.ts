export class _CustomColorServiceMock {

  private customColor: Record<string, string> = {
    'maroon': '#800000',
    'red': '#ff0000',
    'orange': '#ffa500',
    'yellow': '#ffff00',
    'olive': '#808000',
    'purple': '#800080',
    'fuchsia': '#ff00ff',
    'customColor': '#ff00ff',
  };

  isCustomColor(name: string): boolean {
    return Object.prototype.hasOwnProperty.call(this.customColor, name);
  }

  getCustomColor(name: string): string {
    return this.customColor[name];
  }

  setCustomColor(name: string, value: string): void {
    this.customColor[name] = value;
  }

}
