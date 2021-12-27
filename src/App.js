import { ThemeProvider } from "./utils/context";
import Header from "./components/Header";
import ThemeButton from "./components/ThemeButton";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <ThemeButton />
    </ThemeProvider>
  );
}
