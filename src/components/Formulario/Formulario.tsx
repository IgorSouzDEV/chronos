import { Cycles } from "../Cycles/Cycles";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import styles from "./Formulario.module.css";

export function Formulario() {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput id="meuInput" labelText="task" type="text" />
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <Cycles />
      <button type="submit">Cadastrar</button>
    </form>
  );
}
