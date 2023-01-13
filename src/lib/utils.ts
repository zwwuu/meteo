import { Unit } from "./types/unit";

export function formatTemperature(kelvin: number, toUnit: Unit): number {
  switch (toUnit) {
    case Unit.CELSIUS:
      return toCelsius(kelvin);
    case Unit.FAHRENHEIT:
      return toFahrenheit(kelvin);
    case Unit.KELVIN:
    default:
      return kelvin;
  }
}

export function toCelsius(kelvin: number): number {
  return Math.round(kelvin - 273.15);
}

export function toFahrenheit(kelvin: number): number {
  return Math.round((kelvin - 273.15) * 1.8 + 32);
}
