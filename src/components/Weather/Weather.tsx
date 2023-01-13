import styles from "./Weather.module.css";
import Forecast from "../Forecast/Forecast";
import { useAppSelector } from "../../lib/hooks";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import CurrentWeather from "../CurrentWeather/CurrentWeather";

export default function Weather() {
  const { weather, error, status } = useAppSelector((state) => state.weather);

  return (
    <div className={styles.root}>
      {status === "loading" && <LoadingIndicator />}
      {status === "idle" && weather && <CurrentWeather weather={weather} />}
      {status === "error" && error && <ErrorIndicator message={error} />}
      <Forecast />
    </div>
  );
}
