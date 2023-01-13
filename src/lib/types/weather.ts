export interface Weather {
  city: string;
  country: string;
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
  wind: {
    speed: number;
    degree: number;
  };
  time: number;
}

export function toWeather(data: any): Weather {
  return {
    city: data.name,
    country: data.sys.country,
    temperature: {
      current: data.main.temp,
      min: data.main.temp_min,
      max: data.main.temp_max,
      feelsLike: data.main.feels_like,
    },
    description: data.weather[0].main,
    icon: data.weather[0].icon,
    pressure: data.main.pressure,
    humidity: data.main.humidity,
    wind: {
      speed: data.wind.speed,
      degree: data.wind.deg,
    },
    time: 1000 * data.dt,
  };
}
