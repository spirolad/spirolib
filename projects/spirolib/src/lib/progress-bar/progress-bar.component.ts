import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";

type ProgressBarMode = 'determinate' | 'indeterminate';

@Component({
    selector: 'sp-progress-bar',
  imports: [
    NgClass
  ],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progress = 0;
  @Input() displayValue = false;
  @Input() mode: ProgressBarMode = 'determinate';
}
