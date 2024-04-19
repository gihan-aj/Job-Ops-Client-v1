import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'master-data',
    loadChildren: () =>
      import('./modules/master-data/master-data.module').then(
        (m) => m.MasterDataModule
      ),
  },
];
