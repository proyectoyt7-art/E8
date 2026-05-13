"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./PricingSection.module.css";

const pricingItems = [
  { name: "Guía de Freidora de Aire + 400 Recetas prácticas y deliciosas", price: "$27.99" },
  { name: "Bonus 1: Método Pro para mantener tu freidora de aire como nueva", price: "$9.99" },
  { name: "Bonus 2: Recetas express para días sin tiempo", price: "$7.99" },
  { name: "Bonus 3: Sistema semanal listo: 7 días de comidas sin pensar", price: "$9.99" },
  { name: "Bonus 4: Masterclass Express: Los beneficios de la freidora de aire", price: "$9.99" },
];

const PricingSection = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutos = 900 segundos

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.mockupWrapper}>
          <Image
            src="/images/20.webp"
            alt="Manual Recetario Freidora de Aire"
            width={600}
            height={600}
            className={styles.mockup}
          />
        </div>
        
        <div className={styles.summaryCard}>
          <h2 className={styles.summaryTitle}>RESUMAMOS TODO LO QUE RECIBIRÁS</h2>
          <ul className={styles.itemList}>
            {pricingItems.map((item, index) => (
              <li key={index} className={styles.item}>
                <span className={styles.itemName}>• {item.name}</span>
                <span className={styles.itemPrice}>{item.price}</span>
              </li>
            ))}
          </ul>
          
          <div className={styles.totalNormal}>
            PRECIO TOTAL NORMAL: <span className={styles.strikethrough}>$65.95</span>
          </div>
          
          <div className={styles.discountEmphasis}>
            Solo por hoy: más del 80% de descuento en el pack completo
          </div>
          
          <div className={styles.offerBox}>
            <div className={styles.offerTag}>OFERTA ESPECIAL <br/><span>POR TIEMPO LIMITADO</span></div>
            <div className={styles.priceWrapper}>
              <div className={styles.finalPrice}>$9.99</div>
              <div className={styles.inlineTimer}>
                La oferta termina en: <span className={styles.timeHighlight}>{formatTime(timeLeft)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
