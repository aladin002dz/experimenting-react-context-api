import { useTheme } from "../../utils/hooks";

function Header() {
  const { theme } = useTheme();
  return <div>The theme is: "{theme}"</div>;
}

export default Header;
