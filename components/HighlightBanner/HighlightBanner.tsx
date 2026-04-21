import styles from "./HighlightBanner.module.css";

const HighlightBanner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <h2 className={styles.text}>
          ¡HAY MÁS DE 400 RECETAS PARA TODAS LAS COMIDAS DE TU DÍA QUE TE DARÁN UNA VIDA MUCHO MÁS SABROSA Y SALUDABLE!
        </h2>
      </div>
    </section>
  );
};

export default HighlightBanner;
