import useSWR from "swr"
import { fetcher } from "../fetcher.js"


const Usuarios = () => {

    const { data, error, isLoading } =  useSWR('https://jsonplaceholder.typicode.com/users', fetcher)

return (
    <div>
        <h2>Usuários/os guri</h2>
        <p>é, são os guri</p>
        <div>{isLoading ? "carregando...": ""}</div>
        <ul>{data && data.map(user => ( <li key={user.id}>{user.name}</li>))}</ul>
    </div>
)
}

export default Usuarios;