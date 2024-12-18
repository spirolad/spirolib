import { Injectable } from '@angular/core';
import {ThemeConfigServiceService} from "./theme-config-service.service";

const cssValidator = /^\d+(\.\d+)?(px|em|rem|vw|vh|%|cm|mm|in|pt|pc)$/;
const colorValidator = /^#([0-9A-F]{3}|[0-9A-F]{6})$/i;
const fontValidator = /^(normal|italic|oblique|initial|inherit)$/;

@Injectable({
  providedIn: 'root'
})
export class _CssValidationService {

  isValidCSSMeasurement(value: string): boolean {
    return cssValidator.test(value);
  }

  isValidCSSColor(value: string): boolean {
    return colorValidator.test(value) || this.themeConfigServiceService.isCustomColor(value);
  }

  isValidCSSFontWeight(value: string): boolean {
    return fontValidator.test(value);
  }

  constructor(private themeConfigServiceService: ThemeConfigServiceService) {
  }

}
