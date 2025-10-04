// src/pages/PomodoroInfo/PomodoroInfo.tsx
import { Clock, Brain, CheckCircle, Zap } from "lucide-react";
import styles from "./PomodoroInfo.module.css";

export function PomodoroInfo() {
  return (
    <div className="glass-panel">
      <h1 className={styles.title}>
        <Clock size={36} className={styles.icon} />
        Técnica Pomodoro
      </h1>

      <p className={styles.intro}>
        Um método simples e poderoso para melhorar foco, produtividade e evitar
        a fadiga mental.
      </p>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>
          <Zap size={24} className={styles.inlineIcon} />
          Como Funciona?
        </h2>
        <ol className={styles.steps}>
          <li>
            <strong>Escolha uma tarefa</strong> para trabalhar.
          </li>
          <li>
            <strong>Defina um timer para 25 minutos</strong> (1 "Pomodoro").
          </li>
          <li>
            <strong>Trabalhe sem interrupções</strong> até o timer tocar.
          </li>
          <li>
            <strong>Marque 1 Pomodoro</strong> e faça uma pausa curta (5
            minutos).
          </li>
          <li>
            A cada <strong>4 Pomodoros</strong>, faça uma pausa longa (15–30
            minutos).
          </li>
        </ol>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>
          <Brain size={24} className={styles.inlineIcon} />
          Por Que Funciona?
        </h2>
        <ul className={styles.benefits}>
          <li>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <strong>Reduz a procrastinação:</strong> compromisso de só 25
            minutos.
          </li>
          <li>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <strong>Melhora o foco:</strong> treina seu cérebro a se concentrar
            em blocos.
          </li>
          <li>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <strong>Evita o esgotamento:</strong> pausas regulares mantêm sua
            energia.
          </li>
          <li>
            <CheckCircle size={20} className={styles.benefitIcon} />
            <strong>Torna o tempo visível:</strong> você "vê" seu progresso.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.subtitle}>💡 Dicas para Começar</h2>
        <ul className={styles.tips}>
          <li>Desligue notificações durante os Pomodoros.</li>
          <li>Se for interrompido, reinicie o timer.</li>
          <li>Use um timer físico ou o Chronos! ⏳</li>
          <li>
            Ajuste os tempos se necessário (ex: 50/10 para tarefas profundas).
          </li>
        </ul>
      </section>

      <div className={styles.cta}>
        <a href="/Pomodoro" className={styles.startButton}>
          Iniciar seu primeiro Pomodoro
        </a>
      </div>
    </div>
  );
}
