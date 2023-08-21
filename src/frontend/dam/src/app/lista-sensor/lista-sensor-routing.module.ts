import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaSensorPage } from './lista-sensor.page';

const routes: Routes = [
  {
    path: '',
    component: ListaSensorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaSensorPageRoutingModule {}
