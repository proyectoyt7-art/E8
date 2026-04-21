"use client";
import { useState } from "react";
import styles from "./FAQ.module.css";

const faqData = [
  { q: "¿Este recetario es para principiantes?", a: "Sí, completamente. Las recetas están explicadas paso a paso, con instrucciones simples y claras, ideales tanto para quienes recién comienzan como para quienes ya tienen experiencia con su freidora." },
  { q: "¿Necesito ingredientes difíciles de conseguir?", a: "Para nada. Todas las recetas usan ingredientes comunes que puedes encontrar en cualquier supermercado local." },
  { q: "¿Las recetas son saludables?", a: "¡Sí! El enfoque principal es una alimentación equilibrada, baja en grasas saturadas pero sin sacrificar el sabor." },
  { q: "¿Cuánto tiempo tardan las recetas en prepararse?", a: "La mayoría de las recetas están diseñadas para estar listas en menos de 20-30 minutos, algunas incluso en menos de 10." },
  { q: "¿Sirve para cualquier modelo de freidora de aire?", a: "Sí, las recetas y tiempos están adaptados para que funcionen perfectamente en cualquier modelo o marca de freidora de aire." },
  { q: "¿Cómo recibiré el acceso después de mi compra?", a: "Tu compra es procesada de forma segura por Hotmart. Inmediatamente después de confirmar tu pago, recibirás un correo electrónico de Hotmart con tus credenciales de acceso. Podrás ingresar directamente a la plataforma para disfrutar de todo el contenido digital de manera práctica y permanente." },
  { q: "¿Puedo ver las recetas desde mi celular o computadora?", a: "¡Claro! El recetario está en formato digital compatible con cualquier dispositivo: celular, tablet o computadora." },
  { q: "¿Me ayudará realmente a ahorrar tiempo en la cocina?", a: "Ese es nuestro objetivo principal. Con estas recetas optimizadas, pasarás menos tiempo cocinando y más tiempo disfrutando." }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Preguntas Frecuentes (FAQ)</h2>
        <div className={styles.accordion}>
          {faqData.map((item, index) => (
            <div key={index} className={styles.item}>
              <button 
                className={styles.question}
                onClick={() => toggle(index)}
              >
                <span>{item.q}</span>
                <span className={`${styles.arrow} ${openIndex === index ? styles.rotate : ""}`}>▼</span>
              </button>
              <div className={`${styles.answer} ${openIndex === index ? styles.show : ""}`}>
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
