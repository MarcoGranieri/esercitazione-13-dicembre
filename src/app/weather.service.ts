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

  constructor(
    private http: HttpClient
  ) { }

  getWeather(city : string) : Observable<Weather> {
    const params = new HttpParams()
      .set('appId', '28e7bf225be35501d2817f95012ef7c5')
      .set('q', city)
      .set('lang', 'it')
      .set('units', 'metric')
    return this.http.get<IWeather>('http://api.openweathermap.org/data/2.5/weather', {params})
    .pipe(
      map(response => Weather.Build(response))
    )
  }
}
