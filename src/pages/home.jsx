import { useContext } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

const Home = () => {
    const { theme } = useContext(ThemeContext)

    return (
        <div className={theme}>
            <h2>Página inicial dos guri</h2>
            <p>é, é a página inicial dos guri</p>
        </div>
    )
}

export default Home