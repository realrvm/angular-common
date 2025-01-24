import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  imports: [CommonModule],
  template: `
    <div class="max-w-[800px] w-full mx-auto p-10">
      <div class="w-[400px] h-[400px] bg-gray-100 rounded-lg p-5">
        <h2 class="text-xl text-center font-semibold">Child component</h2>
        <div class="grid h-full place-items-center">
          <span class="text-6xl font-bold">{{ title }}</span>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class ChildComponent implements OnChanges {
  public readonly id = input.required<string>();
  public title = '1';

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['id']) {
      this.title = this.id();
    }
  }
}
