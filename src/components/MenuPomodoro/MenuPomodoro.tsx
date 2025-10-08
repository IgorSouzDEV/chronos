import {
  HistoryIcon,
  HouseIcon,
  PauseCircleIcon,
  PlayCircleIcon,
  RotateCcw,
  SettingsIcon,
} from "lucide-react";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import styles from "./MenuPomodoro.module.css";

type MenuPomodoroProps = {
  ativo: boolean;
  onIniciar: () => void;
  onPausar: () => void;
  onResetar: () => void;
};

export function MenuPomodoro({
  ativo,
  onIniciar,
  onPausar,
  onResetar,
}: MenuPomodoroProps) {
  return (
    <nav className={styles.menuPomodoro}>
      <div className={styles.menuPomodoroButtons}>
        <DefaultButton
          icon={<PlayCircleIcon size={34} />}
          onClick={onIniciar}
          color="green"
          disabled={ativo}
          aria-label="Iniciar pomodoro"
        />
        <DefaultButton
          icon={<PauseCircleIcon size={34} />}
          color="red"
          onClick={onPausar}
          disabled={!ativo}
          aria-label="Pausar pomodoro"
        />
        <DefaultButton
          icon={<RotateCcw size={34} />}
          color="yellow"
          onClick={onResetar}
          aria-label="Resetar pomodoro"
        />
      </div>

      <div className={styles.menuPomodoroItem}>
        <a title="Home" href="/" className={styles.menuPomodoroItem}>
          <HouseIcon size={24} />
        </a>
        <a title="Histórico" href="#" className={styles.menuPomodoroItem}>
          <HistoryIcon size={24} />
        </a>
        <a title="Configurações" href="#" className={styles.menuPomodoroItem}>
          <SettingsIcon size={24} />
        </a>
      </div>
    </nav>
  );
}
