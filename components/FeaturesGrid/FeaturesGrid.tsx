import styles from "./FeaturesGrid.module.css";

const features = [
  {
    title: "+ 400 recetas simples, rápidas y nutritivas",
    text: "Platos pensados para el día a día, con ingredientes fáciles de encontrar y resultados increíbles en su mesa familiar."
  },
  {
    title: "Ideas para el Desayuno",
    text: "Comienzas el día con opciones reconfortantes, rápidas y llenas de sabor."
  },
  {
    title: "Comidas listas en pocos minutos",
    text: "Recetas ideales para los días agitados: sin pasar horas en la cocina."
  },
  {
    title: "Recetas para toda la familia",
    text: "Platos que encantarán tanto a los pequeños como a los adultos, nutritivos y saludables."
  },
  {
    title: "Meriendas y aperitivos prácticos",
    text: "Ideas creativas para la mañana, la tarde o esas visitas sorpresa."
  },
  {
    title: "Guiones estructurados para freidora de aire",
    text: "Pasos detallados, con tiempos y temperaturas exactas para resultados perfectos."
  },
  {
    title: "Platos ligeros para todos los días",
    text: "Recetas equilibradas, bajas en grasas y perfectas para un estilo de vida saludable."
  },
  {
    title: "Sandwiches, hamburguesas y wraps crujientes",
    text: "Opciones prácticas y deliciosos para hacer en casa, en minutos."
  }
];

const FeaturesGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Lo que vas a descubrir en la Guía con +400 Recetas para freidora de aire
        </h2>
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.iconWrapper}>
                {/* SVG placeholders for icons based on reference */}
                <div className={styles.icon}></div>
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
