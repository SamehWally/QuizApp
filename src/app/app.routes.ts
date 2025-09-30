import { authGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './Shared/components/not-found/not-found.component';
export const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'dashboard',
    // canActivate: [authGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  { path: '**', component: NotFoundComponent, title: 'Not Founded ' },
];
