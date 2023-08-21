import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaRiegosPageRoutingModule } from './lista-riegos-routing.module';

import { ListaRiegosPage } from './lista-riegos.page';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaRiegosPageRoutingModule,
    PipeModule
  ],
  declarations: [ListaRiegosPage]
})
export class ListaRiegosPageModule {}
