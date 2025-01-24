import { AfterViewInit, Component, inject, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [CommonModule, FormsModule],
  template: `
    <div class="max-w-[800px] w-full mx-auto p-10">
      <div class="flex flex-col gap-5">
        <h1 class="font-semibold text-2xl">NgComponentOutlet Layout</h1>
        <div class="flex gap-5">
          <button
            class="px-4 py-2 font-bold  rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-400 transition duration-300"
          >
            Show Child With Import
          </button>
        </div>
        <form
          class="flex gap-5"
          #f="ngForm"
          novalidate
          (ngSubmit)="onSubmit(f.value)"
        >
          <input
            type="text"
            name="name"
            [(ngModel)]="name"
            placeholder="Name"
            class="border border-gray-300 outline-none px-4 py-2 rounded"
          />
          <button
            type="submit"
            class="px-4 py-2 font-bold  rounded-md bg-blue-600 text-white cursor-pointer hover:bg-blue-400 transition duration-300"
          >
            Show Child Card
          </button>
        </form>
        <div class="flex gap-5">
          <ng-container *ngComponentOutlet="childComponent"></ng-container>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class LayoutComponent implements AfterViewInit {
  public childComponent: Type<unknown> | null = null;
  private readonly router = inject(Router);
  public name = 1;

  async ngAfterViewInit(): Promise<void> {
    this.childComponent = await import('./child-with-import.component').then(
      (c) => c.ChildWithImportComponent
    );
  }

  public onSubmit(f: NgForm) {
    this.router.navigate(['child', f.name]);
  }
}
