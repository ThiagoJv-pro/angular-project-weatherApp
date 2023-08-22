import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import { environment } from '../../environments/environment';
import {WeatherData} from '../models/weather.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityname: string) : Observable <WeatherData>{
    return this.http.get<WeatherData>('http://api.weatherapi.com/v1/current.json',{
      params: new HttpParams()
      .set('key', '9f7418f5c3494a6482a13152232208')
      .set('q', cityname)
    })
  }
}
