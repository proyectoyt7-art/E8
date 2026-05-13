import Image from "next/image";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.badge}>
            RECETARIO DIGITAL
          </div>
          <h1 className={styles.title}>
            Recetas rápidas e irresistibles: ¡descubre todo lo que tu <span className={styles.highlight}>freidora de aire</span> puede preparar!
          </h1>
          <p className={styles.description}>
            Más de 400 recetas probadas para crear platos deliciosos y saludables en pocos minutos.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/images/1.webp"
            alt="Deliciosas recetas en freidora de aire"
            width={600}
            height={500}
            className={styles.image}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
