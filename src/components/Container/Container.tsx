import styles from "./Container.module.css";

type ContainerProps = React.ReactNode | React.ReactNode[];

export function Container({ children }: { children: ContainerProps }) {
  return (
    <div className="glass-panel">
      <div className={styles.container}>{children}</div>
    </div>
  );
}
