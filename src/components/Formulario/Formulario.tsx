import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles/Cycles";
import { DefaultButton } from "../DefaultButton/DefaultButton";
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
      <DefaultButton icon={<PlayCircleIcon size={34} />} />
    </form>
  );
}
