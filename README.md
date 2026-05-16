
# 🌍 La Marina — Agencia de Viajes

La Marina es una aplicación web desarrollada con React y Tailwind CSS enfocada en ofrecer una experiencia moderna y elegante para una agencia de viajes. El sitio permite explorar destinos, conocer experiencias, visualizar opiniones de clientes y contactar fácilmente a la agencia.

---

# ✨ Características

- Hero section con carrusel dinámico.
- Navegación responsiva para desktop y mobile.
- Dropdown menu interactivo.
- Modal de contacto.
- Sección de destinos destacados.
- Opiniones de clientes.
- Preguntas frecuentes.
- Footer con contacto y redes sociales.
- Diseño responsivo.
- Deploy en GitHub Pages.

---

# 🛠️ Tecnologías utilizadas

- React
- Vite
- Tailwind CSS
- JavaScript (ES6+)

---

# 📦 Librerías utilizadas y motivo de uso

| Librería | Uso |
|---|---|
| React | Construcción de componentes reutilizables e interfaz dinámica. |
| Vite | Bundler rápido para desarrollo y build de producción. |
| Tailwind CSS | Estilizado rápido y responsivo mediante utility classes. |
| gh-pages | Despliegue automático del proyecto a GitHub Pages. |

---

# 🚀 Instalación y ejecución del proyecto

## 1. Clonar el repositorio

```bash
git clone https://github.com/A01705840/AgenciaViajesFrontEnd.git
````

---

## 2. Entrar a la carpeta del proyecto

```bash
cd AgenciaViajesFrontEnd/app/agenciaApp
```

---

## 3. Instalar dependencias

```bash
npm install
```

---

## 4. Ejecutar en desarrollo

```bash
npm run dev
```

El proyecto correrá normalmente en:

```txt
http://localhost:5173
```

---

# 🌐 Deploy del proyecto

Para generar el deploy en GitHub Pages:

```bash
npm run deploy
```

---

# 🎨 Justificación de las decisiones de diseño

El diseño del proyecto busca transmitir una sensación premium y moderna, utilizando:

* A primera vista las imagenes de fondo, mantienen una esencia de maravilla y curiosidad en el usuario
* Transparencias y efectos blur para diferenciar información de diseño.
* Tipografía serif sencilla para lectura.
* Layouts amplios, todo se encuentra en la misma página, evitando el error de crear demasiadas páginas.
* Animaciones suaves y hover effects para mejorar la experiencia de usuario. El logo, fue creado desde cero con SVG Editor.
* Diseño completamente responsivo para adaptarse a dispositivos móviles y desktop.

---

# ⚙️ Justificación de las decisiones técnicas

* Se utilizó React para separar la interfaz en componentes reutilizables y mantener una estructura escalable.
* Vite permite la actualización rápida de la página.
* Tailwind CSS permitió desarrollar estilos responsivos y modernos sin escribir grandes archivos CSS personalizados.
* Los componentes fueron divididos según funcionalidad (Navbar, Carousel, Footer, Modal, etc.) para facilitar mantenimiento y reutilización.
* GitHub Pages fue utilizado para hosting debido a su facilidad de integración con proyectos frontend estáticos.

---

# 📱 Responsividad

El proyecto fue diseñado siguiendo un enfoque responsive-first utilizando breakpoints de Tailwind CSS para asegurar compatibilidad con:

* Mobile
* Tablets
* Desktop

---

# 📂 Estructura del proyecto

```txt
src/
│
├── assets/
│   ├── img/
│   └── icons/
│
├── components/
│   ├── Carousel.jsx
│   ├── ContactModal.jsx
│   ├── DestinationCards.jsx
│   ├── Dropdown.jsx
│   ├── FAQ.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   └── Testimonials.jsx
│   └── Navbar.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

---

# ¿Qué mejoraríamos con más tiempo?

* Backend para reservaciones reales.
* Sistema de autenticación de usuarios.
* Integración con APIs de viajes.
* Loader hecho desde zero: 
    - Ejemplos de  trabajo:
    - https://codepen.io/A01705840/pen/KwzRowe
    - https://codepen.io/A01705840/pen/xbGrzbR
    - https://codepen.io/A01705840/pen/xbGLOqz
* Modo oscuro.

---

# 🚧 Siguiente fase del proyecto

En una siguiente fase se podría transformar la aplicación en una plataforma completa de reservaciones incluyendo:

* Integración de Google Accounts
* Historial de viajes.
* Reservaciones en tiempo real.
* Dashboard de consulta mientras el usuario esta viajando.
* Integración con mapas.

---

# 👥 Autores

Proyecto desarrollado por:

* María José Soto Castro

---

