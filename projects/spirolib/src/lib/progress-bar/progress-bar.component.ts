import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import { CssValidationService } from '../../service/css-validation.service';

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
  @Input() progress = 0;
  @Input() displayValue = false;
  @Input() mode: ProgressBarMode = 'determinate';

  @Input()
  set width(value: string) {
    if (this.cssValidationService.isValidCSSMeasurement(value)) {
      this._width = value;
    }
  }
  protected _width = '100%';

  constructor(private cssValidationService: CssValidationService) { }

}
