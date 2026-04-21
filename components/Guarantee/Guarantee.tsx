import Image from "next/image";
import styles from "./Guarantee.module.css";

const Guarantee = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src="/images/19.webp"
              alt="Garantía de 7 días"
              width={120}
              height={120}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h2 className={styles.title}>Garantía incondicional de 7 días - Riesgo cero para ti</h2>
            <p className={styles.text}>
              Estamos tan seguros de la calidad de nuestra guía que te ofrecemos 7 días de garantía total. 
              Si por alguna razón no estás satisfecho, te devolvemos el 100% de tu dinero sin preguntas. 
              ¡Tu satisfacción es nuestra prioridad!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
