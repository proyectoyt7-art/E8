import Image from "next/image";
import styles from "./AboutCreator.module.css";

const AboutCreator = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageSide}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/21.webp"
                alt="Nutricionista Isabella Mendoza"
                width={400}
                height={400}
                className={styles.profileImage}
                priority
              />
            </div>
          </div>
          <div className={styles.textSide}>
            <p className={styles.overline}>SOBRE LA CREADORA</p>
            <h2 className={styles.title}>
              NUTRICIONISTA ISABELLA <span className={styles.highlight}>MENDOZA</span>
            </h2>
            <div className={styles.description}>
              <p>
                Soy Isabella Mendoza, nutricionista especializada en alimentación práctica y saludable.
              </p>
              <p>
                He creado este recetario para ayudarte a descubrir todo lo que puedes preparar con tu freidora de aire, usando recetas simples, rápidas y deliciosas para tu día a día.
              </p>
              <p>
                Mi misión es ayudarte a comer mejor sin complicarte, aprovechar al máximo tu freidora de aire y disfrutar comidas ricas sin sentir que estás siguiendo una dieta estricta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCreator;
