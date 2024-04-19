import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterDataComponent } from './master-data/master-data.component';
import { DepartmentsComponent } from './components/departments/departments.component';

const routes: Routes = [
  {
    path: '',
    component: MasterDataComponent,
  },
  {
    path: 'departments',
    component: DepartmentsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MasterDataRoutingModule {}
