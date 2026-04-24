"use client";
import styles from "./CTASection.module.css";

const CTASection = () => {
  const handleInitiateCheckout = () => {
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <a 
          href="https://pay.hotmart.com/U105478368T?checkoutMode=10&bid=1776794058121" 
          className={styles.button}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleInitiateCheckout}
        >
          QUIERO MI RECETARIO
        </a>
        
        <div className={styles.security}>
          <div className={styles.icons}>
            {/* Visual placeholders for security icons */}
            <div className={styles.icon}>🔓</div>
            <div className={styles.icon}>💳</div>
            <div className={styles.icon}>🔐</div>
          </div>
          <p className={styles.securityText}>COMPRA 100% SEGURA Y PROTEGIDA</p>
        </div>
        
        <p className={styles.disclaimer}>
          ACEPTAMOS TODOS LOS MEDIOS DE PAGO
        </p>
      </div>
    </section>
  );
};

export default CTASection;
