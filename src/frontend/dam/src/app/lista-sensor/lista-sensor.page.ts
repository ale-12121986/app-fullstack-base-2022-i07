import { Component, OnInit } from '@angular/core';
//import { SensorService } from '../services2/sensor.service';
import { ActivatedRoute } from '@angular/router';
import { ListaSensorService } from '../services2/lista-sensor.service';
import { Mediciones } from '../interfaces/mediciones';
@Component({
  selector: 'app-lista-sensor',
  templateUrl: './lista-sensor.page.html',
  styleUrls: ['./lista-sensor.page.scss'],
})
export class ListaSensorPage implements OnInit {
  id: any;
  //listaSensor: any;
  medicion: Mediciones[]=[];
  constructor(private _listaSensorService:ListaSensorService, private activateRoutes: ActivatedRoute) { 
    this.id=0;
 
  }
    
  ngOnInit() {
    this.id = this.activateRoutes.snapshot.paramMap.get("id");
    this._listaSensorService.getValorListaSenor(this.id)
    .then((listaSensor)=>{
      this.medicion=listaSensor;
      console.log(listaSensor);
    })
    .catch((error)=>{
      console.log(error)
    })
    
  }

}
