import { House, UnplugIcon, Volume2Icon } from "lucide-react";

export function Menu() {
  return (
    <nav>
      {/* // Página de sons ambientes para estudo/trabalho */}
      <a href="/AmbientSounds" title="Ambient Sounds">
        <Volume2Icon size={40} />
      </a>
      {/* // Página para encerrar o programa */}
      <a href="/EndWork" title="End Work">
        <UnplugIcon size={40} />
      </a>
      <a href="/" title="Home">
        <House size={40} />
      </a>
    </nav>
  );
}
