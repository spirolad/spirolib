import {Component, Input} from '@angular/core';
import {NgIf} from "@angular/common";

type ProgressBarMode = 'determinate' | 'indeterminate';

@Component({
    selector: 'sp-progress-bar',
  imports: [
    NgIf
  ],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progress = 0;
  @Input() displayValue = false;
  @Input() mode: ProgressBarMode = 'determinate';
}
