// src/pages/NotFound/NotFound.tsx
import { Container } from "../../components/Container/Container";
import styles from "./NotFound.module.css";

export function NotFound() {
  return (
    <Container>
      <div className={styles.container}>
        <h1>Erro 404</h1>
        <h3>Esta página sumiu do nosso tempo</h3>
        <p>
          Parece que você viajou para um tempo que ainda não foi criado... Ou
          talvez esta página tenha se perdido no fluxo do tempo.
        </p>
        <p>⏳ Não se preocupe — o Chronos está aqui para te guiar de volta.</p>
        <blockquote className={styles.quote}>
          "O tempo perdido não volta, mas você sempre pode reiniciar o timer e
          tentar de novo."
        </blockquote>
      </div>
    </Container>
  );
}
