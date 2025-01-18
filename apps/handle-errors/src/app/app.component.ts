import { Component, inject } from '@angular/core';
import { AppService } from './app.service';
import { AsyncPipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [AsyncPipe, UpperCasePipe],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly service = inject(AppService);
  public readonly title = 'list of todos';

  public readonly todos$ = this.service.todos$;
}
