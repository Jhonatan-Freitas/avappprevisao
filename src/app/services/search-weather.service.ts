import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {
  apiKey = "f82a793c";
  baseURL = "https://api.hgbrasil.com/weather?format=json&city_name=";
  
  constructor(private http: HttpClient) { }

  searchWeather(cidade:string){
    return this.http.get(`${this.baseURL}${cidade}&key=${this.apiKey}`);
  }
 
}
