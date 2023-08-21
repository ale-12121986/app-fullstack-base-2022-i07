import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, firstValueFrom , map} from 'rxjs';
import { DispositivoService } from '../services2/dispositivo.service';
//import { DispositivosPageModule } from './dispositivos.module';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit, OnDestroy {
  // observable$: Observable<any>
  // subscription: Subscription
  dis:any
  
  constructor(private _dispositivoService: DispositivoService) {
    this. dis
    // this.observable$ = interval(1000)
    // const move_values = this.observable$.pipe(map((val:any) => val+10))

    // this.subscription =move_values.subscribe((dato: any)=>{
    //   console.log(dato)
    // })
   }
  
  ngOnInit() {
    // this.subscription.unsubscribe()

    this._dispositivoService.getListadoDispositivos()
    .then((dispositivos)=>{
      this.dis = dispositivos
      for(let dispositivo of dispositivos){
         console.log(dispositivo.nombre)
      }
      console.log(dispositivos)
    })
    .catch((error)=>{
      console.log(error)
    })
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe()
  }
  // subscribe (){
  //   this.subscription = this.observable$.subscribe((integer:any)=>{
  //     console.log(integer)
  //   })
  // }
  // unsubscribe (){
  //   this.subscription.unsubscribe()
  // }
}
