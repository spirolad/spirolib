import {_CustomColorService} from "../service/custom-color.service";

const measurementValidator = /^\d+(\.\d+)?(px|em|rem|vw|vh|%|cm|mm|in|pt|pc)$/;
const colorValidator = /^(#([0-9A-F]{3}|[0-9A-F]{6})|rgb\([0-9]+,[0-9]+,[0-9]+\)|rgba\([0-9]+,[0-9]+,[0-9]+,[0-9]+\))$/i;
const fontValidator = /^(normal|italic|oblique|initial|inherit)$/;

export class CssValidationServiceMock {
  isValidCSSMeasurement(value: string): boolean {
    return measurementValidator.test(value);
  }

  isValidCSSColor(value: string): boolean {
    return colorValidator.test(value) || this.customColorService.isCustomColor(value);
  }

  isValidCSSFontWeight(value: string): boolean {
    return fontValidator.test(value);
  }

  constructor(private customColorService: _CustomColorService) {
  }
}
