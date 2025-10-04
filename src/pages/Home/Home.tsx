import { ListTodo, ShieldIcon, TimerIcon } from "lucide-react";
import "../../styles/glass.css";
import styles from "./Home.module.css";
import { Container } from "../../components/Container/Container";

export function Home() {
  return (
    <Container>
      <div className={styles.containerHome}>
        <h1 className={styles.title}>
          Seja bem-vindo ao <span>Chronos</span>
        </h1>

        <div className={styles.linksContainer}>
          <a href="./Pomodoro" title="Pomodoro" aria-label="Ir para Pomodoro">
            Pomodoro
            <TimerIcon size={20} />
          </a>

          <a
            href="/ToDoList"
            title="Lista de Tarefas"
            aria-label="Ir para Lista de Tarefas"
          >
            To Do List
            <ListTodo size={20} />
          </a>

          <a href="/DeepWork" title="Deep Work" aria-label="Ativar Deep Work">
            Deep Work
            <ShieldIcon size={20} />
          </a>
        </div>
      </div>
    </Container>
  );
}
