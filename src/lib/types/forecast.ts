export interface Forecast {
  temperature: {
    current: number;
    min: number;
    max: number;
    feelsLike: number;
  };
  description: string;
  icon: string;
  pressure: number;
  humidity: number;
  precipitation: number;
  wind: {
    speed: number;
    degree: number;
  };
  time: number;
}

export function toForecast(data: any): Forecast {
  return {
    temperature: {
      current: data.temp.day,
      min: data.temp.min,
      max: data.temp.max,
      feelsLike: data.feels_like.day,
    },
    description: data.weather[0].main,
    icon: data.weather[0].icon,
    pressure: data.pressure,
    humidity: data.humidity,
    precipitation: Math.round(data.pop * 100),
    wind: {
      speed: data.speed,
      degree: data.deg,
    },
    time: 1000 * data.dt,
  };
}
