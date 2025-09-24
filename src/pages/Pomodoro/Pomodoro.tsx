import styles from "./Pomodoro.module.css";

import { Container } from "../../components/Container/Container";

import { MenuPomodoro } from "../../components/MenuPomodoro/MenuPomodoro";
import { Contador } from "../../components/Contador/Contador";

export function Pomodoro() {
  return (
    <Container>
      <section className={styles.section}>
        <h1>Pomodoro</h1>
      </section>
      <MenuPomodoro />
      <Contador />
    </Container>
  );
}
