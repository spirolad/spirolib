import {Component, Input} from '@angular/core';

@Component({
    selector: 'sp-progress-bar',
    imports: [],
    templateUrl: './progress-bar.component.html',
    styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  @Input() displayValue: boolean = false;
}
