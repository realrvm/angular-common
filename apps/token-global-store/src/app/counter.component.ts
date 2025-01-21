import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { injectState } from './store/store.provider';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  template: `<p>{{state()}}</p>`,
  styles: ``,
})
export class CounterComponent {
  public readonly state = injectState()
}
