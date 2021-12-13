export interface IWeather {
  city: string;
  nation: string;
  temperature: string;
  weather: string;
}

export class Weather {
  protected constructor(
    public city = '',
    public nation = '',
    public temperature = '',
    public weather = ''

) { }

public static Build(weather: IWeather): Weather {
    return new this(
        weather.city,
        weather.nation,
        weather.temperature,
        weather.weather
    );
}
}
