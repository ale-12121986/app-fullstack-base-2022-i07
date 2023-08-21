import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SensorService {
 
  constructor(private _http: HttpClient) { }

  getValorSenor(dato: any):Promise<any> {
    //console.log(dato);
    return firstValueFrom(this._http.get('http://localhost:8000/sensor/'+ dato));
  }

  setValorLog_Riegos(dato: any): Promise<any>{ 
 
    return firstValueFrom(this._http.post('http://localhost:8000/sensor/dato', dato, ));
  }

  setCargarMedicion(dato: any): Promise<any>{
    return firstValueFrom(this._http.post('http://localhost:8000/sensor/mediciones', dato));
  }
}
