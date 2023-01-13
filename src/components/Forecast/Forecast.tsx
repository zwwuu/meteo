import styles from "./Forecast.module.css";
import { useAppSelector } from "../../lib/hooks";
import LoadingIndicator from "../LoadingIndicator/LoadingIndicator";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import DailyWeather from "../DailyWeather/DailyWeather";

export default function Forecast() {
  const { status, error, forecasts } = useAppSelector((state) => state.forecasts);

  return (
    <div className={styles.root}>
      {status === "loading" && <LoadingIndicator />}
      {status === "idle" && forecasts && (
        <>
          <h2 className={styles.title}>7 day forecast</h2>
          <div className={styles.forecast}>
            {forecasts.map((weather, index) => {
              return <DailyWeather key={index} weather={weather} />;
            })}
          </div>
        </>
      )}
      {status === "error" && error && <ErrorIndicator message={error} />}
    </div>
  );
}
