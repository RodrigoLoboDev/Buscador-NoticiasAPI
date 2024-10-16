import axios from 'axios'
import { createContext, useState, useEffect } from 'react'

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general')
    const [noticias, setNoticias] = useState([])
    const [totalResultados, setTotalResultados] = useState(0)
    const [pagina, setPagina] = useState(1)

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    const handleChangePaginador = async (e, valor) => {
        // console.log(e.target.textContent);
        // setPagina(valor);
        
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${valor}&apiKey=${import.meta.env.VITE_API_KEY}`

        const {data} = await axios(url)

        // console.log(data)
        setNoticias(data.articles)
        setTotalResultados(data.totalResults)        
    }

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`
            // la consulta por defecto nos trae 20 noticias para cambiar su valor utilizamos &pageSize=100
            // si lo dejas por default y te trae 20 noticias y son 34 para ver las demas utilizamos &page=2
    
            const {data} = await axios(url)
            setNoticias(data.articles)
            setTotalResultados(data.totalResults)
            setPagina(1)        
        }
        consultarAPI()
    }, [categoria])
    
    
    
    // console.log(noticias);

    // Calcular la cantidad de paginas
    // console.log(totalResultados);
    const paginas = Math.ceil( totalResultados / 20 )
    // console.log(paginas);

    // useEffect(() => {
    //     const consultarAPI = async () => {
    //         const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&page=${pagina}&apiKey=${import.meta.env.VITE_API_KEY}`
    
    //         const {data} = await axios(url)
    
    //         // console.log(data)
    //         setNoticias(data.articles)
    //         setTotalResultados(data.totalResults)
    //       }
    
    //       consultarAPI()
    // }, [pagina])
    

    return (
        <NoticiasContext.Provider
            value={{
                handleChangeCategoria,
                categoria,
                noticias,
                paginas,
                handleChangePaginador,
                pagina
            }}
        >
            {children}
        </NoticiasContext.Provider>
    )
}

export {
    NoticiasProvider
}
export default NoticiasContext