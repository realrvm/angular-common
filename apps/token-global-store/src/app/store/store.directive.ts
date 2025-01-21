import { Directive, effect, input } from '@angular/core';
import { injectState } from './store.provider';

@Directive({
  selector: '[appStore]',
})
export class StoreDirective {
  public readonly appStore = input.required<number>();
  private readonly storeService = injectState();

  effect = effect(() => {
    this.storeService.set(this.appStore());
  });
}
