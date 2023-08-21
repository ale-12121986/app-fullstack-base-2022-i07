import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'dispositivos',
  //   loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  // },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
  {
    path: 'sensor/:id',
    loadChildren: () => import('./sensor/sensor.module').then( m => m.SensorPageModule)
  },
  {
    path: 'lista-sensor/:id',
    loadChildren: () => import('./lista-sensor/lista-sensor.module').then( m => m.ListaSensorPageModule)
  },
  {
    path: 'lista-riegos/:id',
    loadChildren: () => import('./lista-riegos/lista-riegos.module').then( m => m.ListaRiegosPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
