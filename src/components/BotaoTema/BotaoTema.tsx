import { Moon, Sun } from "lucide-react";

import styles from "./BotaoTema.module.css";
import { useEffect, useState } from "react";

export function BotaoTema() {
  const [tema, setTema] = useState(false);

  useEffect(() => {
    const temaSalvo = localStorage.getItem("tema");
    const temaSistema = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (temaSalvo === "dark" || (!temaSalvo && temaSistema)) {
      document.documentElement.classList.add("dark");
      setTema(true);
    } else {
      document.documentElement.classList.remove("dark");
      setTema(false);
    }
  }, []);

  const mudarTema = () => {
    const novoTema = !tema;
    setTema(novoTema);
    localStorage.setItem("tema", novoTema ? "dark" : "light");

    if (novoTema) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <button
      type="button"
      className={styles.botaoTema}
      onClick={mudarTema}
      title={tema ? "Mudar para tema claro" : "Mudar para tema escuro"}
      aria-label={tema ? "Mudar para tema claro" : "Mudar para tema escuro"}
    >
      {tema ? (
        <Sun className={styles.icone} />
      ) : (
        <Moon className={styles.icone} />
      )}
    </button>
  );
}
