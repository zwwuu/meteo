import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header/Header";
import Weather from "../components/Weather/Weather";
import { useAppDispatch } from "../lib/hooks";
import { useEffect } from "react";
import { getWeather } from "../features/weather/slice";
import { getForecasts } from "../features/forecasts/slice";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const coords = {
      latitude: 40.7128,
      longitude: -74.006,
    };
    dispatch(getWeather(coords));
    dispatch(getForecasts(coords));
  }, [dispatch]);

  return (
    <>
      <Head>
        <title>Meteo</title>
        <meta content="Winter is a weather app" name="description" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <main className={styles.root}>
        <Header />
        <div className={styles.container}>
          <Weather />
        </div>
      </main>
    </>
  );
}
