import styles from "./ErrorIndicator.module.css";
import { IconBug } from "@tabler/icons";

type ErrorIndicatorProps = {
  message: string;
};
export default function ErrorIndicator({ message }: ErrorIndicatorProps) {
  return (
    <div className={styles.root} role={"alert"}>
      <p className={styles.message}>
        <IconBug className={styles.icon} />
        {message}
      </p>
    </div>
  );
}
