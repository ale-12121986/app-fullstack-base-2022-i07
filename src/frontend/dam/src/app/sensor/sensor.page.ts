import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SensorService } from '../services2/sensor.service';
import { firstValueFrom, interval, Observable, Subscription, map } from 'rxjs';
import * as Highcharts from 'highcharts';
import { Mediciones } from '../interfaces/mediciones';
declare var require: any;
require('highcharts/highcharts-more')(Highcharts);
require('highcharts/modules/solid-gauge')(Highcharts);

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.page.html',
  styleUrls: ['./sensor.page.scss'],
  template: '<p>Fecha actual: {{ currentDate | date }}</p>',
})

export  class SensorPage implements OnInit, OnDestroy {
  observable$: Observable <number>;
  subscription: Subscription;
  id:any;
  dis: any
  dato= {};
  valorSensor:number;
  private valorObtenido:number ;
  public myChart:any;
  private chartOptions:any; 
  medicion: Mediciones[]=[];
  valorCambiar: boolean;
  textoBoton: string;
  currentDate: Date;
  valor:number;
  consulta:number;
  constructor(private _sensorService:SensorService, private activateRoutes: ActivatedRoute) { 
    this.consulta = 0;
    this.valor = 0;
    this.currentDate= new Date()
    this.valorCambiar = false;
    this.textoBoton = "ABRIR ELECTROVALVULA"
    this.valorSensor = 0
    this.valorObtenido= 0;
    this.observable$ = interval(1000)
    const move_values = this.observable$.pipe(map((val:any) => val))
    this.subscription =move_values.subscribe((dato:number)=>{
      this.medicion[0].valor = dato;
      this.valorSensor = this.medicion[0].valor;
      this.valorSensor = dato;
    });
    setTimeout(()=>{
      //console.log("Cambio el valor del sensor");
      this.valorObtenido=this.valorSensor ;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
      this.subscribe();
    },3000);

  }

  ngOnInit() {
    this.subscription.unsubscribe()
    this.id =this.activateRoutes.snapshot.paramMap.get("id")
    console.log(this.id)
    this._sensorService.getValorSenor(this.id)
    .then((valorSensor)=>{
      this.valorSensor = valorSensor;
      console.log(valorSensor)
      this.valorObtenido = valorSensor;
    })
    .catch((error)=>{
      console.log(error)
    })
    
    //this.subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

  subscribe (){
    this.subscription = this.observable$.subscribe((integer:number)=>{
      //console.log(integer);
      if(this.valorCambiar == false){
        if(this.valorSensor <= 0){
          this.valorSensor = 0;
        }else{
          this.valorSensor--;
        }
      }
      if(this.valorCambiar == true){
        if(this.valorSensor >= 100){
          this.valorSensor = 100;
        }else{
          this.valorSensor++;
        }
      }
      this.valorObtenido=this.valorSensor ;
      //llamo al update del chart para refrescar y mostrar el nuevo valor
      this.myChart.update({series: [{
          name: 'kPA',
          data: [this.valorObtenido],
          tooltip: {
              valueSuffix: ' kPA'
          }
      }]});
    })
  }
  unsubscribe (){
    this.subscription.unsubscribe()
  }
  toggleValor() {
    this.valorCambiar = !this.valorCambiar;
    this.textoBoton = this.valorCambiar ? 'CERRAR ELECTROVALVULA' : 'ABRIR ELECTROVALVULA';
    if (this.valorCambiar == false){this.valor = 0;}
    else{this.valor = 1;}
    this.dato = {
      sensorId: this.id,
      valor: this.valorObtenido,
      fecha: this.currentDate,
      apertura: this.valor,
      consulta: 1
    };
    this._sensorService.setValorLog_Riegos(this.dato)
      .then((valorSensor)=>{
      //console.log(valorSensor)
    })
    .catch((error)=>{
      console.log(error)
    })

    if(this.valorCambiar == true){
      this.dato = {
        sensorId: this.id,
        valor: this.valorObtenido,
        fecha: this.currentDate,
        apertura: this.valor,
        consulta: 2
      };
      console.log("entro en medicion de cargar riego con estos valores "+ this.dato);
      this._sensorService.setCargarMedicion(this.dato)
        .then((valorSensor)=>{
        //console.log(valorSensor)
      })
      .catch((error)=>{
        console.log(error)
      })
    }

  }
  
  ionViewDidEnter() {
    this.generarChart(this.id);
  }
  generarChart(valor: number) {
    this.chartOptions={
      chart: {
          type: 'gauge',
          plotBackgroundColor: null,
          plotBackgroundImage: null,
          plotBorderWidth: 0,
          plotShadow: false
        }
        ,title: {
          text: 'Sensor N° '+ valor
        }

        ,credits:{enabled:false}
        
           
        ,pane: {
            startAngle: -150,
            endAngle: 150
        } 
        // the value axis
      ,yAxis: {
        min: 0,
        max: 100,
  
        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',
  
        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'kPA'
        },
        plotBands: [{
            from: 0,
            to: 10,
            color: '#55BF3B' // green
        }, {
            from: 10,
            to: 30,
            color: '#DDDF0D' // yellow
        }, {
            from: 30,
            to: 100,
            color: '#DF5353' // red
        }]
    }
    ,
  
    series: [{
        name: 'kPA',
        data: [this.valorObtenido],
        tooltip: {
            valueSuffix: ' kPA'
        }
    }]

    };
    this.myChart = Highcharts.chart('highcharts', this.chartOptions );
  }
}
  
