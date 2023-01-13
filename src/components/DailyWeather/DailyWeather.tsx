import styles from "./DailyWeather.module.css";
import useTemperatures from "../../lib/useTemperatures";
import { Forecast } from "../../lib/types/forecast";
import Temperature from "../Temperature/Temperature";
import Detail from "../Detail/Detail";
import DirectionIcon from "../DirectionIcon/DirectionIcon";

type DailyWeatherProps = {
  weather: Forecast;
};
export default function DailyWeather({ weather }: DailyWeatherProps) {
  const { temperatures, unit } = useTemperatures({
    current: weather.temperature.current,
    feelsLike: weather.temperature.feelsLike,
    min: weather.temperature.min,
    max: weather.temperature.max,
  });

  return (
    <div className={styles.root}>
      <div className={styles.weekday}>{new Intl.DateTimeFormat("en", { weekday: "narrow" }).format(weather.time)}</div>
      <p className={styles.date}>{new Date(weather.time).getDate()}</p>
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
        <Detail label={"Precipitation"} value={`${weather.precipitation}%`} />
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
