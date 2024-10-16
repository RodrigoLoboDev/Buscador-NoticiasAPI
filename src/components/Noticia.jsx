import { Card, CardActions, CardContent, CardMedia, Link, Typography, Grid } from "@mui/material";

const Noticia = ({noticia}) => {
    // console.log(noticia);
    const { urlToImage, url, title, description, source } = noticia
  return (
    <Grid 
      item 
      xs={12} 
      md={6} 
      lg={4}
    >
      <Card>
        {urlToImage && (
          <CardMedia 
            component={'img'}
            alt={`Imagen de la noticia ${title}`}
            image={urlToImage}
            height={'250'}
          />
        )}

        <CardContent>
          <Typography variant="body1" color={'error'}>{source.name}</Typography>
          <Typography variant="h5" component={'div'}>{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </CardContent>

        <CardActions>
          <Link 
            href={url}
            target='_blank'
            variant="button"
            textAlign={'center'}
            width='100%'
            sx={{
              textDecoration: 'none'
            }}
          >Leer Noticia</Link>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Noticia