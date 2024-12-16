import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CssValidationService {

  isValidCSSMeasurement(value: string): boolean {
    const regex = /^\d+(\.\d+)?(px|em|rem|vw|vh|%|cm|mm|in|pt|pc)?$/;
    return regex.test(value);
  }

}
