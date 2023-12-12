import { Button, Card, CardActions, CardContent } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contacto() {
  return (
    <section className="contacto" id="contactanos">
      <div className="cardsContainer">
        <Card
          className="card"
          sx={{ backgroundColor: "#312783", color: "#ffffff" }}
        >
          <CardContent>
            <h4>Contactanos</h4>
            <form className="formulario" action="#">
              <input type="text" placeholder="Nombre y apellido*" />
              <label>Obligatorio</label>
              <input type="email" placeholder="Correo electrónico*"/>
              <label>Obligatorio</label>
              <input type="tel" placeholder="Numero de teléfono*"/>
              <label>Obligatorio</label>
              <input type="text" placeholder="Consulta*"/>
              <label>Seleccione un tema de consulta</label>
              <textarea name="" id="" cols="30" rows="10" placeholder="Por favor, detalla tu consulta*"></textarea>
              <label>Obligatorio</label>
              <CardActions>
                <Button variant="contained" color='secondary' endIcon={<ArrowForwardIcon/>}>ENVIAR FORMULARIO</Button>
              </CardActions>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
