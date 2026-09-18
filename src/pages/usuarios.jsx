import useSWR from "swr"
import { fetcher } from "../fetcher.js"
import { Link } from "react-router-dom"


const Usuarios = () => {

    const { data, error, isLoading } =  useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

return (
    <div>
        <h2>Usuários/os guri</h2>
        <p>é, são os guri</p>
        <div>{isLoading ? "carregando...": ""}</div>
        <ul>{data && data.map(user => ( 
            <li key={user.id}>
                <Link to={`/usuarios/${user.id}`}>{user.name}</Link>
            </li>))}</ul>
    </div>
)
}

export default Usuarios;