import GenericCard from "./GenericCard"

export default function Coworking(){
    const dataCoworking = [
        {
            desc: `Nuestra Institución cuenta con espacios amplios preparados para el dictado de clases. Con pupitres, mesas y sillas; además de televisor, parlante y computadores para el dictado de clases regulares y virtuales.\n
            
            También contamos con un amplio salón para reuniones, talleres y cursos de distintas especialidades.\n

            Ofrecemos el servicio de Administración para cursos externos, además de asesoramiento para el dictado de talleres y cursos.
            `,
        },
    ]

    const dataServicios = [
        {
            desc:'Salón con pupitres mesas y sillas'
        },
        {
            desc:'Televisor, parlante y computadoras para clases regulares y virtuales'
        },
        {
            desc:'Amplio salón para reuniones, talleres y cursos'
        },
        {
            desc:'Servicio de Administración para cursos externos'
        },

    ]
    
    return(
        <section className="coworking" id="coworking">
            <h3>Coworking</h3>
            <div className="cardsContainer">
                {dataCoworking.map((obj)=>{
                    return (
                        <GenericCard data={obj}/>
                    )
                })}
            </div>
            <h3>Servicios incluídos</h3>
            <div className="cardsContainer">
                {dataServicios.map((obj)=>{
                    return(
                        <GenericCard data={obj}/>
                    )
                })}
            </div>
        </section>
    )
}