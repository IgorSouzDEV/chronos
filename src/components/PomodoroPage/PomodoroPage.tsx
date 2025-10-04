import { BookOpenText } from "lucide-react";
import styles from "./PomodoroPage.module.css";
import { Link } from "react-router-dom";

export function PomodoroPage() {
  return (
    <div className={styles.pomodoroPage}>
      <p>
        Entenda como funciona a técnica{" "}
        <Link to={"/PomodoroInfo"} className={styles.link}>
          Pomodoro
          <BookOpenText />
        </Link>
      </p>
    </div>
  );
}
