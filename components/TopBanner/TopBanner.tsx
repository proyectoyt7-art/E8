"use client";

import { useState, useEffect } from "react";
import styles from "./TopBanner.module.css";

const TopBanner = () => {
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
    <div className={styles.banner}>
      <p className={styles.text}>
        <span className={styles.urgent}>¡OFERTA TERMINA EN:</span>
        <span className={styles.timer}>{formatTime(timeLeft)}</span>
        <span className={styles.urgent}>! APROVECHA EL 80% DE DESCUENTO HOY 🔥</span>
      </p>
    </div>
  );
};

export default TopBanner;
