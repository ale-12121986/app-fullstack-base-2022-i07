import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaRiegosPage } from './lista-riegos.page';

const routes: Routes = [
  {
    path: '',
    component: ListaRiegosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaRiegosPageRoutingModule {}
