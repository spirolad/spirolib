import {Component, Input, ViewEncapsulation} from '@angular/core';

type DividerType = 'horizontal' | 'vertical';

@Component({
  selector: 'sp-divider',
  imports: [],
  styleUrl: './divider.component.scss',
  template: ``,
  host: {
    'role': 'separator',
    'class': 'sp-divider',
  },
  encapsulation: ViewEncapsulation.None,
})
export class DividerComponent {
  @Input() type: DividerType = 'horizontal';

}
