import GenericCard from "./GenericCard";

export default function Cursos() {
  const dataCursos = [
    {
      title: "Presenciales",
      list: [
        "Intensivos: 3hs semanales con preparación en: oralidad, escucha y lectura.",
        "Los mismos potencian tus habilidades al máximo preparándote para afrontar cualquier situación de la vida cotidiana.",
        "Speakout/ COnversacional: 1,30 hrs semanales con orientación a la práctica de Conversación.",
        "Para estudiantes que buscan reforzar conocimientos sin las horas habituales de los cursos regulares.",
      ],
      image: "https://res.cloudinary.com/dnfil5isx/image/upload/v1701966528/Frame_16_uw4ld6.svg",
    },
    {
      title: "Virtuales",
      list: [
        "Intensivos: 3hs semanales con preparación en: oralidad, escucha, escritura y lectura.",
        "Los mismos potencian tus habilidades al máximo preparándote para afrontar cualquier situación de la vida cotidiana.",
        "Speakout/ COnversacional: 1,30 hrs semanales con orientación a la práctica de Conversación.",
        "Para estudiantes que buscan reforzar conocimientos sin las horas habituales de los cursos regulares.",
      ],
      image: "https://res.cloudinary.com/dnfil5isx/image/upload/v1701966527/Frame_16_1_mnmhqg.svg",
    },
    {
      title: "Viajeros",
      list: [
        "Cursos para Viajeros: Clases orientadas a la práctica de Vocabulario general para viajes y situaciones típicas de los mismos",
      ],
      image: "https://res.cloudinary.com/dnfil5isx/image/upload/v1701966527/Frame_16_2_ydgxhd.svg",
    },
  ];

  return (
    <section className="cursos" id="cursosDeIngles">
      <h3>Cursos de inglés</h3>
      <div className="cardsContainer">
        {dataCursos.map((obj) => {
          return <GenericCard data={obj} />;
        })}
      </div>
    </section>
  );
}
