# Plan de Implementación - Página Web Radio Mundial

Crear una página web moderna y elegante para la estación de radio, optimizada para Cloudflare Pages, siguiendo el sistema de diseño "The Global Pulse".

## Cambios Propuestos

### Configuración del Proyecto
- [NUEVO] Inicializar un proyecto Vite con Tailwind CSS en `/home/ibonilla/Documentos/Devs/radiomundial`.
- Configurar `tailwind.config.js` con los colores, tipografía (Manrope, Inter) y radio de borde especificados en `DESIGN.md`.

### Componentes Principales (en `index.html`)
- **Cabecera (Header)**: Navegación fija con la marca "MUNDO ACTUAL".
- **Sección Hero y Reproductor**: 
    - Programa destacado con efectos de glassmorphism.
    - Reproductor de audio integrado con controles de play/pause y visualización de forma de onda (waveform).
- **Sección de Programación**: 
    - Lista limpia de programas con resaltado para lo que está "En Vivo".
    - Uso de capas tonales en lugar de bordes para separar secciones.
- **Sección de Publicidad / Promos**: 
    - Tarjetas visuales de alto impacto para anuncios y comunicados.
- **Barra de Navegación Inferior**: 
    - Menu móvil persistente con efectos de desenfocado (backdrop-blur).

### Estilos y Recursos
- [NUEVO] `src/style.css`: Implementar los tokens del sistema de diseño (profundidades tonales, regla de "sin líneas", gradientes atmosféricos).
- Uso de fuentes de Google (Manrope, Inter) y Material Symbols.

## Flujo de Trabajo
1. Inicializar el proyecto Vite + Tailwind.
2. Adaptar la lógica de diseño de `code.html` a una estructura más limpia y modular.
3. Aplicar los refinamientos específicos de tipografía y color de `DESIGN.md`.
4. Optimizar para el despliegue en Cloudflare Pages.

## Plan de Verificación
- Vista previa usando `npm run dev`.
- Verificar el comportamiento responsivo (diseño móvil-primero).
- Asegurar que el contraste de color y la tipografía cumplan con el sistema de diseño.
