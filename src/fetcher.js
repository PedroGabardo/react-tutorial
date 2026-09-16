export const fetcher = async (url) => {
    const resposta = await fetch(url)
    if (!resposta.ok) {
        throw new Error('erro ao buscar os dados da API')
    }
    return resposta.json()
}

