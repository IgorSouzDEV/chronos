import { Hourglass } from "lucide-react";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <div className={styles.logo}>
      <Hourglass size={45} /> Αίων
      <h1>Chronos</h1>
    </div>
  );
}
