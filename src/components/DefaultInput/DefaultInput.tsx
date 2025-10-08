import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({ id, labelText, ...props }: DefaultInputProps) {
  return (
    <div className={styles.inputWrapper}>
      {labelText && (
        <label htmlFor={id} className={styles.inputLabel}>
          {labelText}
        </label>
      )}
      <input id={id} {...props} className={styles.inputField} />
    </div>
  );
}
