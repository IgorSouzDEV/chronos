import "./styles/theme.css";
import "./styles/global.css";
import { Route, Routes } from "react-router-dom";
import { Logo } from "./components/Logo/Logo";
import { Home } from "./pages/Home/Home";
import { Menu } from "./components/Menu/Menu";
import { Pomodoro } from "./pages/Pomodoro/Pomodoro";

export function App() {
  return (
    <main>
      <Logo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Pomodoro" element={<Pomodoro />} />
      </Routes>
      <Menu />
    </main>
  );
}
