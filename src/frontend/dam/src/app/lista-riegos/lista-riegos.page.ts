import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListaRiegosService } from '../services2/lista-riegos.service';
import { logRiegos } from '../interfaces/logRiegos';

@Component({
  selector: 'app-lista-riegos',
  templateUrl: './lista-riegos.page.html',
  styleUrls: ['./lista-riegos.page.scss'],
})
export class ListaRiegosPage implements OnInit {
  id: any;
  listaRiego: logRiegos[]=[];
  constructor(private _listaRiegosService: ListaRiegosService, private activateRoutes: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activateRoutes.snapshot.paramMap.get("id");
    console.log("entro lista riegos" + this.id)
    this._listaRiegosService.getValorListaRiego(this.id)
    .then((listaSensor)=>{
      this.listaRiego=listaSensor;
      console.log(listaSensor);
    })
    .catch((error)=>{
      console.log(error)
    })
  }


}
