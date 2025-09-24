import { HistoryIcon, HouseIcon, SettingsIcon } from "lucide-react";
import styles from "./MenuPomodoro.module.css";

export function MenuPomodoro() {
  return (
    <nav className={styles.menuPomodoro}>
      <a title="Home" href="#" className={styles.menuPomodoroItem}>
        <HouseIcon size={24} />
      </a>
      <a title="Histórico" href="#" className={styles.menuPomodoroItem}>
        <HistoryIcon size={24} />
      </a>
      <a title="Configurações" href="#" className={styles.menuPomodoroItem}>
        <SettingsIcon size={24} />
      </a>
    </nav>
  );
}
