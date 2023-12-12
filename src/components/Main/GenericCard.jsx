import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

export default function GenericCard({ data }) {
  return (
    <Card className="card" sx={{backgroundColor:'#312783', color: '#ffffff'}}>
      <CardActionArea>
        <CardContent>
          {/* TITULO */}
          {data.hasOwnProperty("title") && <h4>{data.title}</h4>}

          {/* IMAGEN */}
          {data.hasOwnProperty("image") && (
            <CardMedia
              component="img"
              image={data.image}
              alt="Foto de card"
              sx={{width:'120px'}}
            />

            //Probar una forma para que las imagenes tengan distinto tamaño, pasarlo por props quizas
          )}
          {/* LISTA */}
          {data.hasOwnProperty("list") && (
            <ul className="itemListCards">
              {data.list.map((item) => {
                return <li key={item}>{item}</li>;
              })}
            </ul>
          )}
          {/* DESCRIPCION */}
          {data.hasOwnProperty("desc") && <p>{data.desc}</p>}

        </CardContent>
      </CardActionArea>
      {/* BOTON */}
      {
        (data.hasOwnProperty('btn') && data.hasOwnProperty('ico')
        ?
        <CardActions>
          <Button variant="contained" color="secondary" endIcon={data.ico}>{data.btn}</Button>
        </CardActions>
        :(data.hasOwnProperty('btn') && (
          <CardActions>
          <Button variant="contained" color="secondary">{data.btn}</Button>
        </CardActions>  
        )))


      }


      {/* {data.hasOwnProperty("btn") && (
        <CardActions>
          <Button variant="contained" color="secondary">{data.btn}</Button>
        </CardActions>
      )} */}
    </Card>
  );
}

// titulo (opcional)
// imagen (opcional)
// lista (opcional)
// descripcion (opcional)
// boton (opcional)
//LA DE CONTACTANOS VA A SER APARTE
