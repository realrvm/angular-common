import { Component } from '@angular/core';
import { CounterComponent } from './counter.component';
import { StoreDirective } from './store/store.directive';
import { injectState } from './store/store.provider';

@Component({
  imports: [CounterComponent, StoreDirective],
  selector: 'app-root',
  template: `<div class="max-w-[1200px] w-full p-10 mx-auto rounded-md">
    <app-counter [appStore]="count()" />
    <button class="py-2 px-4 bg-slate-300" (click)="onIncrement()">
      Increment
    </button>
  </div>`,
  styles: ``,
})
export class AppComponent {
  public count = injectState();

  public onIncrement() {
    this.count.update((prev) => prev + 1);
  }
}
