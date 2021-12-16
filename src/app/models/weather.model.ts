export interface IWeather {
  name: string;
  sys: ISys;
  weather: WeatherCondition[];
  main: IMain;
  dt: number;
}

export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface ISys {
  type: number ;
  id: number ;
  country: string ;
  sunrise: number ;
  sunset: number ;
}

export interface IMain {
  temp: number;
  feels_like:number;
  temp_min:number;
  temp_max:number;
  pressure:number;
  humidity:number;
}

export class Weather {
  protected constructor(
    public name = '',
    public sys = {country: ''},
    public weather = [{description: '', icon: ''}],
    public main = {temp: 0},
    public dt = 0

) { }

public static Build(weather: IWeather): Weather {
    return new this(
        weather.name,
        weather.sys,
        weather.weather,
        weather.main,
        weather.dt
    );
}
}
