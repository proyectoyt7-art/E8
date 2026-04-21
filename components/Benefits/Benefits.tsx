import styles from "./Benefits.module.css";

const benefitsData = [
  {
    title: "Platos bajo en carbohidratos y menos grasa",
    text: "Nada mejor que comer las comidas de siempre de forma saludable y sin remordimientos."
  },
  {
    title: "Cocinera en pocos minutos por día",
    text: "Gracias a la freidora de aire cocinarás con mucha más rapidez y facilidad."
  },
  {
    title: "Favorece su digestión y energía",
    text: "Una alimentación más ligera puede transformar su bienestar en el día."
  },
  {
    title: "Ingredientes simples y económicos",
    text: "Nada de productos costosos, todo fue pensado para que ahorre tiempo y dinero."
  },
  {
    title: "Un estilo de vida flexible y duradero",
    text: "Haz de tus cenas familiares una nueva forma de comer de manera inteligente, sabrosa y rápida."
  }
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          ¿Con ganas de comer de forma más SALUDABLE sin renunciar al SABOR ni al TIEMPO?
        </h2>
        <p className={styles.subtitle}>
          La freidora de aire fue hecha para traer mucha practicidad y bienestar, esta guía te ayudará a cocinar de forma más ligera, saludable y siempre sabrosa.
        </p>
        
        <div className={styles.list}>
          {benefitsData.map((benefit, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.iconWrapper}>
                <span className={styles.checkIcon}>✓</span>
              </div>
              <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>{benefit.title}</h3>
                <p className={styles.itemText}>{benefit.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
