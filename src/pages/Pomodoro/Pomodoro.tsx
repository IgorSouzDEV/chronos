import styles from "./Pomodoro.module.css";

import { Container } from "../../components/Container/Container";

import { MenuPomodoro } from "../../components/MenuPomodoro/MenuPomodoro";
import { Contador } from "../../components/Contador/Contador";
import { Formulario } from "../../components/Formulario/Formulario";
import { PomodoroPage } from "../../components/PomodoroPage/PomodoroPage";

export function Pomodoro() {
  return (
    <Container>
      <section className={styles.section}>
        <h1>Pomodoro</h1>
      </section>
      <MenuPomodoro />
      <Contador />
      <Formulario />
      <PomodoroPage />
    </Container>
  );
}
