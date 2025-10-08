import styles from "./Contador.module.css";

type ContadorProps = {
  tempoFormatado: string;
};

export function Contador({ tempoFormatado }: ContadorProps) {
  return <div className={styles.contador}>{tempoFormatado}</div>;
}
