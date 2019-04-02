import { Component, OnInit } from '@angular/core';
import { SearchWeatherService } from '../services/search-weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  providers:[
    SearchWeatherService
  ]
})
export class HomePage implements OnInit {
  txtCidade:string;
  hora:string;
  date:number;
  mes:string;
  dia:string;

  previsoes:any = "";

  constructor(private searchWeatherProv: SearchWeatherService) { }

  ngOnInit() {
    let hours = new Date();
    let months = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
    let days = ["Domingo","Segunda-Feira","Terça-Feira","Quarta-Feira","Quinta-Feira","Sexta-Feira","Sábado"];
    this.date = hours.getDate();
    this.mes = months[hours.getMonth()];
    this.hora = `${hours.getHours()}:${hours.getMinutes()}`;
    this.dia = `${days[hours.getDay()]}`;
    console.log(hours.getDay());
  }

  search(){
    this.searchWeatherProv.searchWeather(this.txtCidade).subscribe(
      data => {
        this.previsoes = data;
        console.log(this.previsoes);
      },
      error =>{
        console.log(error);
      }
    )
  }
}
