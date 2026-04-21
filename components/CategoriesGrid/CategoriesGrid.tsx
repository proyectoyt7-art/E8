import Image from "next/image";
import styles from "./CategoriesGrid.module.css";

const categories = [
  { id: 8, title: "Desayuno en 10 min", image: "/images/8.webp" },
  { id: 9, title: "Almuerzos rápidos", image: "/images/9.webp" },
  { id: 10, title: "Cenas sin complicaciones", image: "/images/10.webp" },
  { id: 11, title: "Postres fáciles", image: "/images/11.webp" },
];

const CategoriesGrid = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                {cat.image ? (
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    width={300}
                    height={300}
                    className={styles.image}
                  />
                ) : (
                  <div className={styles.placeholder}>
                    <span className={styles.idLabel}>{cat.id}</span>
                  </div>
                )}
              </div>
              <h3 className={styles.cardTitle}>{cat.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesGrid;
