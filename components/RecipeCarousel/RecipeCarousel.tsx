"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./RecipeCarousel.module.css";

const recipes = [
  { name: "Bollos rellenos", image: "/images/carousel/bollos-rellenos.webp" },
  { name: "Carne BBQ", image: "/images/carousel/carne-BBQ.webp" },
  { name: "Empanadas de queso", image: "/images/carousel/empanadas-de-queso.webp" },
  { name: "Lomo de cerdo", image: "/images/carousel/lomo-de-cerdo.webp" },
  { name: "Mini quiches de tocino y queso", image: "/images/carousel/mini-quiches-de-tocino-y-queso.webp" },
  { name: "Muffin de manzana y canela", image: "/images/carousel/muffin-de-manzana-y-canela.webp" },
  { name: "Tiras de pollo", image: "/images/carousel/tiras-de-pollo.webp" },
];

const RecipeCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === recipes.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? recipes.length - 1 : prev - 1));
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Mira algunas recetas que aprenderás con nuestra Guía</h2>
        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navButton} ${styles.prev}`} 
            onClick={prevSlide}
            aria-label="Anterior"
          >
            {"<"}
          </button>
          
          <div className={styles.carouselViewport}>
            <div 
              className={styles.carouselTrack} 
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {recipes.map((recipe, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.imageContainer}>
                    <Image
                      src={recipe.image}
                      alt={recipe.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className={styles.image}
                      priority={index === 0}
                    />
                  </div>
                  <p className={styles.recipeName}>{recipe.name}</p>
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navButton} ${styles.next}`} 
            onClick={nextSlide}
            aria-label="Siguiente"
          >
            {">"}
          </button>
        </div>

        <div className={styles.dots}>
          {recipes.map((_, index) => (
            <button
              key={index}
              className={`${styles.dot} ${current === index ? styles.activeDot : ""}`}
              onClick={() => setCurrent(index)}
              aria-label={`Ir a receta ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipeCarousel;
