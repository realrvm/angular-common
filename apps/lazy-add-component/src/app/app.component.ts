import { Component } from '@angular/core';
import { ButtonComponent } from '@angular-common/ui/button';
import { NgComponentOutlet } from '@angular/common';
import { ChildComponent } from './child/child.component';

@Component({
  imports: [ButtonComponent, NgComponentOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public readonly caption = 'lazy-add-component';
  public isChildComponentVisible: typeof ChildComponent | null = null;

  public async onShowChildComponent(): Promise<void> {
    this.isChildComponentVisible = await import('./child/child.component').then(
      (c) => c.ChildComponent
    );
  }
}
