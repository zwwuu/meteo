import { Weather } from "../../lib/types/weather";
import styles from "./CurrentWeather.module.css";
import UnitSwitcher from "../UnitSwitcher/UnitSwitcher";
import Temperature from "../Temperature/Temperature";
import Detail from "../Detail/Detail";
import DirectionIcon from "../DirectionIcon/DirectionIcon";
import useTemperatures from "../../lib/useTemperatures";

type CurrentProps = {
  weather: Weather;
};
export default function CurrentWeather({ weather }: CurrentProps) {
  const { temperatures, unit } = useTemperatures({
    current: weather.temperature.current,
    feelsLike: weather.temperature.feelsLike,
    min: weather.temperature.min,
    max: weather.temperature.max,
  });

  return (
    <div className={styles.root}>
      <UnitSwitcher classNames={styles.unitSwitcher} />
      <div>
        <p className={styles.updatedAt}>
          {"Updated at "}
          <time dateTime={new Date(weather.time).toISOString()}>{new Date(weather.time).toLocaleString()}</time>
        </p>
        <h2 className={styles.city}>{`${weather.city}, ${weather.country}`}</h2>
      </div>
      <Temperature
        description={weather.description}
        feelsLike={temperatures.feelsLike}
        icon={weather.icon}
        temperature={temperatures.current}
        unit={unit}
      />
      <div className={styles.details}>
        <Detail label={"High"} value={`${temperatures.max} ${unit}`} />
        <Detail label={"Low"} value={`${temperatures.min} ${unit}`} />
        <Detail
          label={"Wind"}
          value={
            <>
              <DirectionIcon degree={weather.wind.degree} />
              {`${weather.wind.speed} m/s`}
            </>
          }
        />
        <Detail label={"Humidity"} value={`${weather.humidity}%`} />
        <Detail label={"Pressure"} value={`${weather.pressure} hPa`} />
      </div>
    </div>
  );
}
