import Image from "next/image";
import styles from "./ShowcaseSection.module.css";

const ShowcaseSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/12.webp"
            alt="Showcase de recetas"
            width={1200}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseSection;
