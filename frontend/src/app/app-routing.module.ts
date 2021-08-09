import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarCreateComponent } from './page/car-create/car-create.component';
import { CarEditComponent } from './page/car-edit/car-edit.component';
import { CarComponent } from './page/car/car.component';
import { CustomerEditComponent } from './page/customer-edit/customer-edit.component';
import { CustomerComponent } from './page/customer/customer.component';
import { DashboardComponent } from './page/dashboard/dashboard.component';
import { RaceEditComponent } from './page/race-edit/race-edit.component';
import { RaceComponent } from './page/race/race.component';
import { ServiceEditComponent } from './page/service-edit/service-edit.component';
import { ServiceComponent } from './page/service/service.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'cars',
    component: CarComponent,
  },
  {
    path: 'cars/create',
    component: CarCreateComponent,
  },
  {
    path: 'cars/edit/:id',
    component: CarEditComponent,
  },
  {
    path: 'races',
    component: RaceComponent,
  },
  {
    path: 'races/edit/:id',
    component: RaceEditComponent,
  },
  {
    path: 'customers',
    component: CustomerComponent,
  },
  {
    path: 'customers/edit/:id',
    component: CustomerEditComponent,
  },
  {
    path: 'services',
    component: ServiceComponent,
  },
  {
    path: 'services/edit/:id',
    component: ServiceEditComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
