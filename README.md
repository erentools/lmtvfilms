# LMTV Films - Sistema de Inicio de Sesión Web

Este es un sistema web adaptable a móviles, diseñado para **LMTV Films**, que incluye inicio de sesión, registro de usuario y navegación básica entre secciones. Perfecto para un sitio de streaming o contenido multimedia.

---

## 📁 Estructura del proyecto

```
LMTV_Films_Login/
│
├── index.html               # Página de inicio con video de fondo
├── registro.html            # Registro de nuevo usuario
├── enviando.html            # Espera de 8 segundos tras registrar
├── exito.html               # Confirmación de registro
├── panel.html               # Panel principal del usuario
├── style.css                # Estilos generales del sitio
├── script.js                # Validación e interacción
└── media/
    ├── fondo.mp4            # Video de fondo para index.html
    └── fondo.jpg            # Fondo de imagen para el resto de páginas
```

---

## ✅ Funcionalidades

- **Inicio de sesión** con validación.
- **Registro** de usuario con validación de campos y contraseña doble.
- **Transición animada** tras enviar formulario de registro.
- **Panel de usuario** con nombre visible y botones de navegación.
- **Diseño 100% adaptable a móviles.**

---

## 🔧 Cómo usar

1. **Sube todos los archivos** a un servidor o repositorio como GitHub Pages o Netlify.
2. Asegúrate de que en la carpeta `/media/` estén:
   - `fondo.mp4` → tu video personalizado.
   - `fondo.jpg` → imagen que se verá en todas las páginas excepto el inicio.
3. Abre `index.html` en tu navegador o publica tu sitio.

---

## 📦 Requisitos

- Navegador moderno (Chrome, Firefox, Edge).
- Video `fondo.mp4` en formato `.mp4` con compresión web (opcional pero recomendado que no supere 5MB).
- Hosting compatible con archivos HTML estáticos.

---

## 👨‍💻 Autor

Desarrollado para el proyecto **LMTV Films**.
