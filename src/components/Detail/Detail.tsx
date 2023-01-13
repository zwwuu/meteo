import styles from "./Detail.module.css";
import { ReactNode } from "react";

type DetailProps = {
  label: ReactNode;
  value: ReactNode;
};

export default function Detail({ label, value }: DetailProps) {
  return (
    <div className={styles.root}>
      <span className={styles.label}>{label}</span>
      <span className={styles.value}>{value}</span>
    </div>
  );
}
