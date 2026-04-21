import Image from "next/image";
import styles from "./BonusSection.module.css";

const bonuses = [
  { id: 13, title: "Bonus 1: Método Pro para mantener tu freidora de aire como nueva", text: "Límpiala y protégela sin morir en el intento.", image: "/images/13.webp" },
  { id: 14, title: "Bonus 2: Recetas express para días sin tiempo", text: "Disfruta de una cena deliciosa sin complicaciones.", image: "/images/14.webp" },
  { id: 15, title: "Bonus 3: Sistema semanal listo: 7 días de comidas sin pensar", text: "Planificación completa para que no pierdas tiempo.", image: "/images/15.webp" },
  { id: 24, title: "Bonus 4: Masterclass Express: Los beneficios de la freidora de aire", text: "Aprende los secretos para sacar el máximo provecho.", image: "/images/24.webp" },
];

const BonusSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mucho más que una Guía de Recetas</h2>
        <p className={styles.subtitle}>
          Además como oferta especial recibes un paquete completo con 4 bonus para dominar la cocina con la <span className={styles.bold}>freidora de aire</span>
        </p>
        
        <div className={styles.grid}>
          {bonuses.map((bonus) => (
            <div key={bonus.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <div className={styles.freeBadge}>GRATIS</div>
                <Image
                  src={bonus.image}
                  alt={bonus.title}
                  width={300}
                  height={300}
                  className={styles.image}
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.bonusTitle}>{bonus.title}</h3>
                <p className={styles.bonusText}>{bonus.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BonusSection;
