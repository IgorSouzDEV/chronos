import styles from "./DefaultButton.module.css";

type DefaultButtonProps = {
  icon: React.ReactNode;
  color?: "green" | "red" | "yellow";
} & React.ComponentProps<"button">;

export function DefaultButton({
  icon,
  color = "green",
  ...props
}: DefaultButtonProps) {
  return (
    <>
      <button {...props} className={`${styles.button} ${styles[color]}`}>
        {icon}
      </button>
    </>
  );
}
