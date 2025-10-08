import { PlayCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton/DefaultButton";
import { DefaultInput } from "../DefaultInput/DefaultInput";
import styles from "./Formulario.module.css";

type FormularioProps = {
  config: { workTime: number; shortBreak: number; longBreak: number };
  onDefinirTempo: (minutos: number) => void;
  onIniciarSessao: () => void;
  onTarefaChange: (texto: string) => void;
  tarefaAtual: string;
  onAtualizarConfig: (config: {
    workTime: number;
    shortBreak: number;
    longBreak: number;
  }) => void;
};

export function Formulario({
  config,
  onDefinirTempo,
  onIniciarSessao,
  onTarefaChange,
  tarefaAtual,
}: FormularioProps) {
  return (
    <form className={styles.form}>
      <div className={styles.formRow}>
        <DefaultInput
          id="task-input"
          labelText="Tarefa"
          type="text"
          value={tarefaAtual}
          onChange={(e) => onTarefaChange(e.target.value)}
          placeholder="Digite a tarefa"
        />
      </div>
      <div className={styles.cycles}>
        <button
          type="button"
          className={styles.cycleButton}
          onClick={() => onDefinirTempo(config.workTime)}
        >
          Foco ({config.workTime}m)
        </button>
        <button
          type="button"
          className={styles.cycleButton}
          onClick={() => onDefinirTempo(config.shortBreak)}
        >
          Pausa Curta ({config.shortBreak}m)
        </button>
        <button
          type="button"
          className={styles.cycleButton}
          onClick={() => onDefinirTempo(config.longBreak)}
        >
          Pausa Longa ({config.longBreak}m)
        </button>
        <DefaultButton
          icon={<PlayCircleIcon size={24} />}
          onClick={onIniciarSessao}
          aria-label="Iniciar sessão de foco"
        />
      </div>
    </form>
  );
}
