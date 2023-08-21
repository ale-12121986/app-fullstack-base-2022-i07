import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaSensorPageRoutingModule } from './lista-sensor-routing.module';

import { ListaSensorPage } from './lista-sensor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaSensorPageRoutingModule
  ],
  declarations: [ListaSensorPage]
})
export class ListaSensorPageModule {}
