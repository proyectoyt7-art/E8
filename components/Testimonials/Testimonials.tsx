import Image from "next/image";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Maria G.",
    role: "CLIENTE VERIFICADA",
    text: "Tenia mucha curiosidad por crear recetas en mi freidora de aire. ¡Qué bueno que encontré esta guía, me ha ayudado mucho!",
    image: "/images/16.webp"
  },
  {
    name: "Carlos R.",
    role: "CLIENTE VERIFICADO",
    text: "Ya no sé que cocinarle diario a mis hijos y mi freidora de aire me ha dado muchas ideas. ¡Muy recomendada!",
    image: "/images/17.webp"
  },
  {
    name: "Elena M.",
    role: "CLIENTE VERIFICADA",
    text: "Hace poco descubrí este libro y ahora soy fan de mi freidora de aire. ¡Sabor delicioso!",
    image: "/images/18.webp"
  }
];

const Testimonials = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Testimonios de clientes satisfechos</h2>
        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.card}>
              <div className={styles.stars}>
                {"★★★★★".split("").map((s, idx) => (
                  <span key={idx} className={styles.star}>{s}</span>
                ))}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              <div className={styles.user}>
                <div className={styles.avatarWrapper}>
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={50}
                    height={50}
                    className={styles.avatar}
                  />
                </div>
                <div className={styles.userInfo}>
                  <p className={styles.userName}>{t.name}</p>
                  <p className={styles.userRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
