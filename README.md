# Proyecto: Landing Page - Recetas Freidora de Aire

Este proyecto es una recreación fiel de una página de aterrizaje diseñada para promocionar una guía de recetas para freidoras de aire. Ha sido construida con **Next.js (App Router)** y **CSS Modules** para asegurar un rendimiento óptimo y una maquetación pixel-perfect.

## 📁 Estructura del Proyecto

El código está organizado de forma modular para facilitar su mantenimiento:

- `/app`: Contiene la estructura principal de la aplicación, el layout global y los estilos base.
- `/components`: Carpeta principal de componentes. Cada bloque visual tiene su propia subcarpeta con el componente `.tsx` y su hoja de estilos `.module.css`.
- `/public/images`: Almacén de todas las imágenes numeradas utilizadas en el diseño.

## 🖼️ Cómo cambiar imágenes

Para actualizar o cambiar una imagen:
1. Sube la nueva imagen a la carpeta `public/images/`.
2. Abre el componente correspondiente (ej. `Hero.tsx`).
3. Busca la etiqueta `<Image />` y actualiza la ruta en el atributo `src`.

Ejemplo en `Hero.tsx`:
```tsx
<Image src="/images/nueva-imagen.webp" ... />
```

## ✍️ Cómo editar textos

Los textos se encuentran directamente dentro de cada componente para mantener la fidelidad visual y el control sobre el layout. 

1. Localiza el componente que deseas editar.
2. Modifica el contenido textual dentro de las etiquetas HTML (`<h1>`, `<p>`, etc.).

*Nota: Recuerda que, según las reglas del proyecto, se ha priorizado el término "freidora de aire" sobre "Airfryer".*

## 📱 Visualización Móvil

El proyecto ha sido desarrollado con un enfoque **mobile-first**. Los estilos CSS están optimizados para que la página sea completamente responsive, apilando elementos de forma elegante en pantallas pequeñas sin perder la jerarquía visual del diseño original.

---
Desarrollado con precisión máxima por Antigravity.
