"use client";

import { useState, useEffect, useCallback } from "react";
import styles from "./ExitPopup.module.css";

const ExitPopup = () => {
  const [isVisible, setIsVisible] = useState(false);

  const closePopup = useCallback(() => {
    setIsVisible(false);
    sessionStorage.setItem("exitPopupDismissed", "true");
  }, []);

  const handleOfferClick = () => {
    // Tracking Facebook Pixel
    if (typeof window !== "undefined" && (window as any).fbq) {
      (window as any).fbq("track", "InitiateCheckout", {
        content_name: "Oferta especial freidora de aire",
        value: 6.99,
        currency: "USD",
      });
    }
    // Session storage to not show again
    sessionStorage.setItem("exitPopupDismissed", "true");
  };

  useEffect(() => {
    const isDismissed = sessionStorage.getItem("exitPopupDismissed");
    if (isDismissed) return;

    // Desktop Exit Intent (Mouse out top)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem("exitPopupDismissed")) {
        setIsVisible(true);
      }
    };

    // Mobile Exit Intent (Back Button)
    const handlePopState = (e: PopStateEvent) => {
      if (!sessionStorage.getItem("exitPopupDismissed")) {
        setIsVisible(true);
        // Push state back so they don't actually leave yet
        window.history.pushState(null, "", window.location.href);
      }
    };

    // Push initial state for mobile back button detection
    window.history.pushState(null, "", window.location.href);

    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("popstate", handlePopState);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeButton} onClick={closePopup}>
          ×
        </button>
        <div className={styles.content}>
          <h2 className={styles.title}>¡ESPERA! QUEREMOS AYUDARTE</h2>
          <p className={styles.subtitle}>
            Antes de que te vayas, tenemos una oferta especial para ti.
          </p>
          <p className={styles.text}>
            Sabemos que tomar la decisión puede costar, pero queremos ayudarte a comenzar. Por eso, puedes llevarte el recetario completo de freidora de aire por un precio exclusivo.
          </p>
          
          <div className={styles.priceContainer}>
            <span className={styles.price}>$6.99</span>
          </div>

          <ul className={styles.benefits}>
            <li>✓ Acceso al recetario completo</li>
            <li>✓ Incluye todos los bonos</li>
            <li>✓ Garantía de 7 días sin riesgo</li>
          </ul>

          <p className={styles.urgency}>
            ESTA OFERTA SOLO APARECE UNA VEZ Y ESTÁ DISPONIBLE POR TIEMPO LIMITADO.
          </p>

          <a
            href="https://pay.hotmart.com/U105478368T?off=rsr6oqbn&checkoutMode=10"
            className={styles.ctaButton}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleOfferClick}
          >
            QUIERO MI OFERTA POR $6.99
          </a>

          <button className={styles.secondaryButton} onClick={closePopup}>
            No, prefiero perder esta oportunidad
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExitPopup;
