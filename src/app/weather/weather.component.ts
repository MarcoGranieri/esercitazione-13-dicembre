import { Weather } from './../models/weather.model';
import { WeatherService } from './../weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  weather!: Weather;
  city!: string;
  date = new Date;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    // this.weatherService.getWeather().subscribe(
    //   res => console.log(res)
    // );
  }

  getWeather(city: string) {
    return this.weatherService.getWeather(city).subscribe(
      res => this.weather = res
    );
  }

}
