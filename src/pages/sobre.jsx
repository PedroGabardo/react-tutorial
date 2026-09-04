import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Sobre = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <h2>Sobre os guri</h2>
            <p>É uma página sobre os guri</p>
        </div>
    )
}

export default Sobre