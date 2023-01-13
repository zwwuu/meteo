import styles from "./LoadingIndicator.module.css";

export default function LoadingIndicator() {
  return (
    <div className={styles.root}>
      <div className={styles.loader} />
    </div>
  );
}
