import { IWeather, Weather } from './models/weather.model';
import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  cityName!: string;
  apiKey = 'b32c09e25b373fea02b91733c2cea846';

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city: string) : Observable<Weather[]> {
    const params = new HttpParams().set('units', 'metric').set('lang', 'it').set('q', `${this.cityName}`).set('appid', `${this.apiKey}`)
    return this.http.get<IWeather[]>(environment.apiUrl, {params})
  }
}
