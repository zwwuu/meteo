import styles from "./Header.module.css";
import { IconCurrentLocation } from "@tabler/icons";
import { useState } from "react";
import { useAppDispatch } from "../../lib/hooks";
import { getWeather } from "../../features/weather/slice";
import { OpenWeatherMapService } from "../../services/open_weather_map";
import { getForecasts } from "../../features/forecasts/slice";

export default function Header() {
  const dispatch = useAppDispatch();
  const [location, setLocation] = useState("");
  const handleSearch = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // return early if location is empty
    if (!location.trim().length) return;

    const [cityOrLat, countryOrLon] = location.trim().split(",");
    const lat = Number(cityOrLat);
    const lon = Number(countryOrLon);

    if (isNaN(lat) && isNaN(lon)) {
      const res = await OpenWeatherMapService.getCoordinatesByName(location);
      dispatch(getWeather(res));
      dispatch(getForecasts(res));
    } else {
      dispatch(getWeather({ latitude: lat, longitude: lon }));
      dispatch(getForecasts({ latitude: lat, longitude: lon }));
    }
  };

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>Meteo</h1>
      <form onSubmit={handleSearch}>
        <div className={styles.searchBar}>
          <button
            className={styles.locateButton}
            title={"Locate me"}
            type={"button"}
            onClick={() => {
              navigator.geolocation.getCurrentPosition((position) => {
                setLocation(`${position.coords.latitude}, ${position.coords.longitude}`);
              });
            }}
          >
            <IconCurrentLocation />
          </button>
          <input
            aria-label="Search city or coordinates"
            className={styles.input}
            placeholder={"New York, US or 40.7128, -74.0060"}
            type="search"
            value={location}
            autoFocus
            onChange={(e) => setLocation(e.target.value)}
          />
          <button className={styles.searchButton} type={"submit"}>
            Search
          </button>
        </div>
      </form>
    </header>
  );
}
