import { useTheme } from "../../utils/hooks";
import colors from "../../utils/style/colors";

function ThemedButton() {
  const { toggleTheme, theme } = useTheme();
  const backgroundColor =
    theme === "light"
      ? colors.themes.light.background
      : colors.themes.dark.background;

  const color =
    theme === "light"
      ? colors.themes.light.foreground
      : colors.themes.dark.foreground;

  return (
    <button
      style={{ background: backgroundColor, color: color }}
      onClick={() => toggleTheme()}
    >
      Change mode : {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemedButton;
