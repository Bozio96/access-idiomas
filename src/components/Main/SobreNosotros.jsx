import GenericCard from "./GenericCard";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SobreNosotros(){

    const dataSobreNosotros = [
        {
            desc:`Más de 20 años de experiencia en la enseñanza de Idiomas. El mejor nivel académico, con profesores preparados para potenciar tus destrezas, comprometidos con tu futuro, con permanente innovación y con cursos a tu medida.\n
            
            Cursos online, presenciales, individuales y grupales con grupos reducidos. Dictamos clases a reconocidas empresas y te preparamos para rendir Exámenes Internacionales y Nacionales, potenciando tus capacidades.\n

            Access Idiomas es parte de tu futuro.\n
            Accede a una nueva opción.
            `,
            btn: 'CONSULTAR',
            ico: <ArrowForwardIcon/>
        }
    ] 
    return (
        <section className="sobreNosotros" id="sobreNosotros">
            <h3>Sobre Nosotros</h3>
            <div className="cardsContainer">
                {dataSobreNosotros.map((obj)=>{
                    return(
                        <GenericCard data={obj}/>
                    )
                })}

            </div>
        </section>
    )
}