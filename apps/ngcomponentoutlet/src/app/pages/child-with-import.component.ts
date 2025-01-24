import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child-with-import',
  imports: [CommonModule],
  template: `
    <div class="w-[400px] h-[400px] bg-gray-100 rounded-lg p-5">
      <h2 class="text-xl text-center font-semibold">Child component</h2>
      <div class="grid h-full place-items-center">
        <span class="text-6xl font-bold">Import</span>
      </div>
    </div>
  `,
  styles: ``,
})
export class ChildWithImportComponent {}
