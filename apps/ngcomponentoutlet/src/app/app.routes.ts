import { Route } from '@angular/router';
import { LayoutComponent } from './pages/layout.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: LayoutComponent },
  {
    path: 'child/:id',
    loadComponent: () =>
      import('./pages/child.component').then((c) => c.ChildComponent),
  },
];
