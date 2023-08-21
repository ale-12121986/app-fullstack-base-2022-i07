import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaSensorService {

  constructor(private _http: HttpClient) {}

  getValorListaSenor(dato: any):Promise<any> {
    console.log(dato);
    return firstValueFrom(this._http.get('http://localhost:8000/lista-sensor/'+ dato))
  }
  getListaRiego(dato: any){
    console.log(dato);
  }
}
