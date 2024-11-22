<<<<<<< HEAD
import { ThemeName } from "../../style/theme";

interface Props {
    themeName : ThemeName;
    setThemeName : (themeName : ThemeName) => void;
}

function ThemeSwitcher ({ themeName, setThemeName } :
    Props) {
        const toggleTheme = () => {
            setThemeName(themeName === "light" ? "dark" :
                "light"
            );
        };

    return <button onClick = {toggleTheme}>{themeName}</button>
};

export default ThemeSwitcher;
=======
import { useContext } from "react";
import { ThemeContext } from "../../context/themeContext";

function ThemeSwitcher() {
  const { themeName, toggleTheme } = useContext(ThemeContext);

  return <button onClick={toggleTheme}>{themeName}</button>;
}

export default ThemeSwitcher;
>>>>>>> 067a098 (Final)
