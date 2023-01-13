import { Coordinates } from "../lib/types/coordinates";
import { toWeather, Weather } from "../lib/types/weather";
import { Forecast, toForecast } from "../lib/types/forecast";

const API_KEY = process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY;

const API_URL = "https://api.openweathermap.org";

export class OpenWeatherMapService {
  static async getCoordinatesByName(name: string): Promise<Coordinates> {
    const res = await fetch(`${API_URL}/geo/1.0/direct?q=${name}&limit=1&appid=${API_KEY}`);
    if (res.ok) {
      const data = await res.json();

      return { latitude: data[0].lat, longitude: data[0].lon };
    }

    return Promise.reject(res.statusText);
  }

  static async getCurrentWeather(coordinates: Coordinates): Promise<Weather> {
    const res = await fetch(
      `${API_URL}/data/2.5/weather?lat=${coordinates.latitude}&lon=${coordinates.longitude}&appid=${API_KEY}`
    );
    if (res.ok) {
      const data = await res.json();

      return toWeather(data);
    }

    return Promise.reject(res.statusText);
  }

  static async getForecasts(coordinates: Coordinates, days = 7): Promise<Forecast[]> {
    const res = await fetch(
      `${API_URL}/data/2.5/forecast/daily?lat=${coordinates.latitude}&lon=${coordinates.longitude}&cnt=${days}&appid=${API_KEY}`
    );
    if (res.ok) {
      const data = await res.json();

      return data["list"].map((item: any) => toForecast(item));
    }

    return Promise.reject(res.statusText);
  }
}
