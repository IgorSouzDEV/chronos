import styles from "./DefaultInput.module.css";

type DefaultInputProps = {
  id: string;
  labelText?: string;
} & React.ComponentProps<"input">;

export function DefaultInput({
  id,
  type,
  labelText,
  ...test
}: DefaultInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      {/* condicional if para renderizar o label apenas se o labelText for fornecido */}
      <input
        type={type}
        id={id}
        {...test}
        className={styles.input}
        placeholder="Digite algo"
      />
    </>
  );
}
