import styles from "./Temperature.module.css";
import Image from "next/image";
import { Unit } from "../../lib/types/unit";

type TemperatureProps = {
  description: string;
  temperature: number;
  feelsLike: number;
  unit: Unit;
  icon: string;
};

export default function Temperature({ description, temperature, feelsLike, unit, icon }: TemperatureProps) {
  return (
    <div className={styles.root}>
      <div className={styles.weather}>
        <p className={styles.description}>{description}</p>
        <Image alt={description} height={64} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} width={64} />
      </div>
      <div className={styles.temperatures}>
        <div className={styles.temperature}>{`${temperature} ${unit}`}</div>
        <div className={styles.feelsLike}>{`Feels like ${feelsLike} ${unit}`}</div>
      </div>
    </div>
  );
}
