import "./styles/theme.css";
import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { Home } from "./pages/Home/Home";
import { Pomodoro } from "./pages/Pomodoro/Pomodoro";
import { PomodoroInfo } from "./pages/PomodoroInfo/PomodoroInfo";
import { BotaoTema } from "./components/BotaoTema/BotaoTema";
import { NotFound } from "./pages/NotFound/NotFound";

export function App() {
  return (
    <main>
      <Logo />
      <BotaoTema />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
        <Route path="/PomodoroInfo" element={<PomodoroInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
