import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import useSWR from "swr"
import { fetcher } from "../fetcher"

const UsuarioDetalhe = () => {


    const { id } = useParams()

    const [usuario, setUsuario] = useState(null)
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function buscarUsuario() {
            try {
                setCarregando(true)

                const data = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

                const jsonData = await data.json()

                setUsuario(jsonData)
            } catch (erro) {
                console.error("Erro ao buscar usuario:", erro)
            } finally {
                setCarregando(false)
            }

        }
        buscarUsuario()
    }, [id])


    return (
        <div>
            <h2>Detalhes dos guri</h2>
            {carregando ? (
                <p>carregando...</p> ) : (
                    <ul>
                        <li>Nome: {usuario.name}</li>
                        <li>Email: {usuario.email}</li>
                    </ul>
                )}
        </div>
    )

}

export default UsuarioDetalhe