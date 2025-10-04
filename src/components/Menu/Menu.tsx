import styles from "./Menu.module.css";

import { House, Volume2Icon } from "lucide-react";

export function Menu() {
  return (
    <nav className={styles.menu}>
      {/* // Página de sons ambientes para estudo/trabalho */}
      <a href="/AmbientSounds" title="Ambient Sounds">
        <Volume2Icon />
      </a>
      <a href="/" title="Home">
        <House />
      </a>
    </nav>
  );
}
