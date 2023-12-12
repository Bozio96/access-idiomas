import GenericCard from "./GenericCard";

export default function Examenes() {
  const dataExamenes = [
    {
      title: "Examenes UNR",
      list: [
        "Exámenes para todos los niveles con aval nacional.",
        "La UTN avala el conocimiento mediante exámenes opcionales.",
        "Exámenes vía web en el instituto.",
      ],
      btn: "CONSULTAR",
    },
    {
      title: "Examenes Internacionales",
      list: [
        "Centro de preparación de Exámenes de la Universidad de Cambridge.",
        "Preparación continua según el CEFR para nuestros alumnos.",
        "Nivel niños y adultos. KET, PET, FCE, CAE.",
      ],
      btn: "CONSULTAR",
    },
  ];

  const dataIdiomas = [
    {
      title: "INGLÉS",
      image: 'https://res.cloudinary.com/dnfil5isx/image/upload/v1701966771/Frame_11_1_fla60s.svg',
      desc: "Desde 4 años, adolescentes y adultos",
    },
    {
      title: "ITALIANO",
      image: 'https://res.cloudinary.com/dnfil5isx/image/upload/v1701966771/Frame_11_c0digs.svg',
      desc: "Adolescentes y adultos",
    },
    {
      title: "PORTUGUÉS",
      image: 'https://res.cloudinary.com/dnfil5isx/image/upload/v1701966771/brazil_197386_aie01p.svg',
      desc: "Adolescentes y adultos",
    },
  ];

  return (
    <section className="examenes" id="examenesInternacionales">
      <h3>Preparacion Examenes</h3>
      <div className="cardsContainer">
        {dataExamenes.map((obj) => {
          return <GenericCard data={obj} />;
        })}
      </div>
      <h3>Clases de idiomas</h3>
      <div className="cardsContainer">
        {dataIdiomas.map((obj) => {
          return <GenericCard data={obj} />;
        })}
      </div>
    </section>
  );
}

/* 
//EJEMPLO DE CARD CON TODAS LAS PROPIEDADES
{
    title: "",
    image: "",
    list: [
      ".",
      ".",
      ".",
    ],
    btn: "",
    desc: ""
},
 */
