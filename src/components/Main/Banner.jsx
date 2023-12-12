import { Box, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function Banner(){
    return (
        <div className="banner" id='inicio'>
            <Box className="cardPrincipal">
                <h1>En Access, aprendemos idiomas</h1>
                <p>Dejanos tu correo electrónico y te contactaremos en breve</p>
                <form className="formularioCorreo" action="#">
                    <input type="email" placeholder="Correo electrónico"/>
                    <Button className="botonComenzar"
                        color='primary'
                        variant="contained"
                        endIcon={<ArrowForwardIcon/>}
                    >
                        Comenzar
                    </Button>
                </form>
            </Box>
            <Box sx={{display: {xs:'none', sm: 'block'}}} className="imagenConversacion">
                <img src="https://res.cloudinary.com/dnfil5isx/image/upload/v1701801127/imagen_conversacion_rbsd2d.png" alt="imagenConversacion" />
            </Box>
        </div>
    )
}