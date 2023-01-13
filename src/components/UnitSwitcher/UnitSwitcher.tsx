import styles from "./UnitSwitcher.module.css";
import clsx from "clsx";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { changeUnit } from "../../features/unit/slice";
import { Unit } from "../../lib/types/unit";

type UnitSwitcherProps = {
  classNames: string;
};

export default function UnitSwitcher({ classNames }: UnitSwitcherProps) {
  const { unit } = useAppSelector((state) => state.unit);
  const dispatch = useAppDispatch();

  return (
    <div className={clsx(styles.root, classNames)}>
      {(Object.keys(Unit) as Array<keyof typeof Unit>).map((key) => {
        return (
          <div className={clsx(styles.switch, { [styles.checked]: Unit[key] === unit })} key={key}>
            <label className={styles.label} htmlFor={key}>
              {Unit[key]}
            </label>
            <input
              checked={Unit[key] === unit}
              className={styles.radio}
              id={key}
              name={"unit"}
              type={"radio"}
              value={key}
              onChange={() => {
                dispatch(changeUnit(Unit[key]));
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
