import { Grid, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"


const ListadoDeNoticias = () => {

    const {noticias, paginas, handleChangePaginador, pagina} = useNoticias()

  return (
    <>
        <Typography
            textAlign={'center'}
            marginY={5}
            variant='h3'
            component={'h2'}
        >
            Últimas Noticias
        </Typography>

        <Grid
            container
            spacing={3}
        >
            {noticias.map(noticia => (
                <Noticia 
                    key={noticia.url}
                    noticia={noticia}
                />
            ))}
        </Grid>

        <Stack 
            spacing={2}
            marginY={5}
            alignItems={'center'}
        >
            <Pagination 
                count={paginas} 
                color="secondary"
                onChange={handleChangePaginador} 
                page={pagina}
            />
        </Stack>
    </>
  )
}

export default ListadoDeNoticias