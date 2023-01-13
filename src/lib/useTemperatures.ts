import { useMemo } from "react";
import { Unit } from "./types/unit";
import { toCelsius, toFahrenheit } from "./utils";
import { useAppSelector } from "./hooks";

export default function useTemperatures(kelvins: { [key: string]: number }) {
  const { unit } = useAppSelector((state) => state.unit);
  const temperatures = useMemo(() => {
    switch (unit) {
      case Unit.CELSIUS:
        let newCelsiusTemperatures: any = {};
        Object.keys(kelvins).forEach((key) => {
          newCelsiusTemperatures[key] = toCelsius(kelvins[key]);
        });
        return newCelsiusTemperatures;
      case Unit.FAHRENHEIT:
        let newFahrenheitTemperatures: any = {};
        Object.keys(kelvins).forEach((key) => {
          newFahrenheitTemperatures[key] = toFahrenheit(kelvins[key]);
        });
        return newFahrenheitTemperatures;
      case Unit.KELVIN:
      default:
        return kelvins;
    }
  }, [kelvins, unit]);

  return { temperatures, unit };
}
