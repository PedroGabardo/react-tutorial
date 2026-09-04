import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const ThemeToggleButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme} className={theme}>
            mudar para o tema { theme === 'light' ? 'escuro' : 'claro'}
        </button>
    )
}

export default ThemeToggleButton