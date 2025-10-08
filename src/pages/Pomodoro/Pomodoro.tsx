import styles from "./Pomodoro.module.css";
import { Container } from "../../components/Container/Container";
import { MenuPomodoro } from "../../components/MenuPomodoro/MenuPomodoro";
import { Contador } from "../../components/Contador/Contador";
import { Formulario } from "../../components/Formulario/Formulario";
import { PomodoroPage } from "../../components/PomodoroPage/PomodoroPage";
import { useCallback, useEffect, useState } from "react";

// Tempo padrão de foco (25 minutos em segundos)
const TEMPO_FOCO_PADRAO = 25 * 60;

export function Pomodoro() {
  //Estado para a tarefa atual
  const [tarefaAtual, setTarefaAtual] = useState("");

  //Estado 1: tempo restante em segundos
  const [tempoRestante, setTempoRestante] = useState(TEMPO_FOCO_PADRAO);

  //Estado 2: timer ativo?
  const [ativo, setAtivo] = useState(false);

  //Estado 3: configurações do usuário
  const [config, setConfig] = useState({
    workTime: 25,
    shortBreak: 5,
    longBreak: 15,
  });

  //Função para formatar o tempo -> "MM:SS"
  const formatarTempo = useCallback((segundos: number): string => {
    const mins = Math.floor(segundos / 60);
    const secs = segundos % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, []);

  //função para atualizar a tarefa
  const handleTarefaChange = useCallback((texto: string) => {
    setTarefaAtual(texto);
  }, []);

  //Efeito: roda o timer
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (ativo && tempoRestante > 0) {
      interval = setInterval(() => {
        setTempoRestante((prev) => prev - 1);
      }, 1000);
    } else if (tempoRestante === 0) {
      setAtivo(false);
      // Aqui você pode adicionar: tocar som, notificação, etc.
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [ativo, tempoRestante]);

  //Função dos controles
  const iniciar = () => setAtivo(true);
  const pausar = () => setAtivo(false);
  const resetar = () => {
    setAtivo(false);
    setTempoRestante(config.workTime * 60);
  };
  const definirTempo = (minutos: number) => {
    setAtivo(false);
    setTempoRestante(minutos * 60);
  };
  const atualizarConfig = (novaConfig: typeof config) => setConfig(novaConfig);

  return (
    <Container>
      <section className={styles.section}>
        <h1>Pomodoro</h1>
      </section>
      <Contador tempoFormatado={formatarTempo(tempoRestante)} />
      <MenuPomodoro
        ativo={ativo}
        onIniciar={iniciar}
        onPausar={pausar}
        onResetar={resetar}
      />
      <Formulario
        config={config}
        onDefinirTempo={definirTempo}
        onAtualizarConfig={atualizarConfig}
        onIniciarSessao={iniciar}
        onTarefaChange={handleTarefaChange}
        tarefaAtual={tarefaAtual}
      />
      <PomodoroPage />
    </Container>
  );
}
