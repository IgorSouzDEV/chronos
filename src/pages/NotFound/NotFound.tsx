import { Container } from "../../components/Container/Container";
import styles from "./NotFound.module.css";

type ContainerProps = React.ReactNode | React.ReactNode[];

export function NotFound({ children }: { children: ContainerProps }) {
  return (
    <Container>
      {children}
      <div className={styles.container}>
        <h1>Erro 404</h1>
        <h3>Está página sumiu do nosso tempo</h3>
        <p>
          Parece que você viajou para um tempo que ainda não foi criado... Ou
          talvez esta página tenha se perdido no fluxo do tempo.
        </p>
        <p> ⏳ Não se preocupe — o Chronos está aqui para te guiar de volta.</p>
        <i>
          "O tempo perdido não volta, mas você sempre pode reiniciar o timer e
          tentar de novo."
        </i>
      </div>
    </Container>
  );
}
