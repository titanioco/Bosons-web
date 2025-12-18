# Bosons Web - Documentación Completa

## Tabla de Contenidos

1. [Descripción General del Proyecto](#descripción-general-del-proyecto)
2. [Stack Tecnológico](#stack-tecnológico)
3. [Dependencias y Librerías](#dependencias-y-librerías)
4. [Arquitectura y Estructura](#arquitectura-y-estructura)
5. [Secciones del Sitio Web](#secciones-del-sitio-web)
6. [Flujo de Usuario](#flujo-de-usuario)
7. [Instalación y Configuración](#instalación-y-configuración)
8. [Flujo de Desarrollo](#flujo-de-desarrollo)
9. [Compilación y Despliegue](#compilación-y-despliegue)
10. [Recursos Externos](#recursos-externos)

---

## Descripción General del Proyecto

**Bosons** es un sitio web moderno y bilingüe (Español/Inglés) de comercio electrónico para una empresa de suministros industriales que opera en Colombia. La plataforma muestra equipos industriales, materiales especializados, soluciones de automatización y servicios de soldadura. Construido con tecnologías web de vanguardia, proporciona una experiencia de usuario fluida en todos los dispositivos con soporte para temas oscuros/claros e internacionalización.

### Propósito

El sitio web sirve como escaparate digital y centro de información para Bosons, permitiendo a los clientes:
- Explorar productos y servicios industriales
- Solicitar cotizaciones para equipos especializados
- Conocer sobre servicios de soldadura especializada y automatización
- Contactar a la empresa para consultoría
- Procesar pagos a través de integración con Stripe

### Características Principales

- **Soporte Bilingüe**: Traducciones completas en español e inglés
- **Tema Oscuro/Claro**: Esquemas de color seleccionables por el usuario con detección de preferencias del sistema
- **Diseño Responsivo**: Enfoque mobile-first con diseños adaptativos
- **Catálogo de Productos**: Filtrado y categorización dinámica
- **Integración de Pagos**: Procesamiento de pagos con Stripe
- **Optimizado para SEO**: Meta tags, Open Graph y datos estructurados Schema.org
- **Optimizado para Rendimiento**: Construido con Vite para tiempos de carga rápidos

---

## Stack Tecnológico

### Tecnologías Principales

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| **React** | ^18.3.1 | Librería de UI frontend para construir interfaces basadas en componentes |
| **TypeScript** | ^5.5.3 | JavaScript con tipado seguro para una experiencia de desarrollo mejorada |
| **Vite** | ^5.4.1 | Herramienta de construcción moderna que proporciona HMR rápido y compilaciones optimizadas |
| **Tailwind CSS** | ^3.4.11 | Framework CSS utility-first para desarrollo rápido de UI |

### Sistema de Construcción

- **Vite**: Servidor de desarrollo ultra rápido con Hot Module Replacement (HMR)
- **SWC**: Compilador super rápido de TypeScript/JavaScript vía `@vitejs/plugin-react-swc`
- **PostCSS**: Pipeline de transformación CSS con Autoprefixer
- **ESLint**: Aplicación de calidad y consistencia del código

### Frameworks y Librerías Clave

1. **Librería de Componentes UI**: shadcn/ui (primitivas Radix UI + Tailwind)
2. **Estilos**: Tailwind CSS con tokens de diseño personalizados
3. **Enrutamiento**: React Router DOM para navegación
4. **Gestión de Estado**: Múltiples enfoques:
   - React Context API (Idioma, Tema)
   - Redux Toolkit (Estado complejo)
   - Zustand (Estado global ligero)
5. **Formularios**: React Hook Form con validación Zod
6. **Animaciones**: Framer Motion para transiciones suaves

---

## Dependencias y Librerías

### Componentes UI (Radix UI)

El proyecto utiliza primitivas de [Radix UI](https://www.radix-ui.com/) para componentes accesibles sin estilos:

```json
{
  "@radix-ui/react-accordion": "^1.2.0",
  "@radix-ui/react-alert-dialog": "^1.1.1",
  "@radix-ui/react-avatar": "^1.1.0",
  "@radix-ui/react-checkbox": "^1.1.1",
  "@radix-ui/react-dialog": "^1.1.2",
  "@radix-ui/react-dropdown-menu": "^2.1.1",
  "@radix-ui/react-popover": "^1.1.1",
  "@radix-ui/react-select": "^2.1.1",
  "@radix-ui/react-tabs": "^1.1.0",
  "@radix-ui/react-toast": "^1.2.1",
  "@radix-ui/react-tooltip": "^1.1.4"
}
```

### Procesamiento de Pagos

- **@stripe/stripe-js** (^7.4.0): SDK de JavaScript de Stripe
- **@stripe/react-stripe-js** (^3.7.0): Componentes React para integración con Stripe

### Gestión de Datos

- **@tanstack/react-query** (^5.56.2): Gestión de estado del servidor y caché
- **@reduxjs/toolkit** (^2.9.0): Gestión de estado Redux con APIs modernas
- **zustand** (^5.0.8): Gestión de estado ligera
- **axios** (^1.12.2): Cliente HTTP para peticiones API

### Integración Backend

- **@supabase/supabase-js** (^2.51.0): Cliente Supabase para servicios backend
- **@google/generative-ai** (^0.24.1): Integración de Google Generative AI

### Gestión de Formularios

- **react-hook-form** (^7.53.0): Librería de formularios de alto rendimiento
- **@hookform/resolvers** (^3.9.0): Integración de resolutores de validación
- **zod** (^3.23.8): Validación de esquemas TypeScript-first

### Librerías de Mejora UI

- **lucide-react** (^0.462.0): Librería de iconos con más de 1000 iconos
- **framer-motion** (^12.23.24): Librería de animación
- **next-themes** (^0.3.0): Gestión de temas
- **sonner** (^1.5.0): Notificaciones toast
- **embla-carousel-react** (^8.3.0): Componente de carrusel

### Librerías Especializadas

- **@react-three/fiber** (^8.18.0): Renderizador React para Three.js (gráficos 3D)
- **@react-three/drei** (^9.122.0): Helpers para React Three Fiber
- **@react-three/rapier** (^1.5.0): Integración de motor de física
- **three** (^0.181.2): Librería de gráficos 3D
- **chart.js** (^4.5.0): Librería de gráficos
- **recharts** (^2.12.7): Componentes de gráficos para React

### Librerías de Utilidad

- **date-fns** (^3.6.0): Manipulación de fechas
- **crypto-js** (^4.2.0): Funciones criptográficas
- **uuid** (^13.0.0): Generación de UUID
- **qrcode** (^1.5.4): Generación de códigos QR
- **jspdf** (^3.0.3): Generación de PDF
- **xlsx** (^0.18.5): Manejo de archivos Excel

### Herramientas de Desarrollo

```json
{
  "@eslint/js": "^9.9.0",
  "eslint": "^9.9.0",
  "eslint-plugin-react-hooks": "^5.1.0-rc.0",
  "eslint-plugin-react-refresh": "^0.4.9",
  "@types/react": "^18.3.3",
  "@types/react-dom": "^18.3.0",
  "@types/node": "^22.5.5",
  "typescript-eslint": "^8.0.1"
}
```

---

## Arquitectura y Estructura

### Estructura de Directorios del Proyecto

```
Bosons-web/
├── public/              # Recursos estáticos
├── src/
│   ├── components/      # Componentes React
│   │   ├── features/    # Componentes específicos de características
│   │   ├── layout/      # Componentes de layout (Header, Footer)
│   │   └── ui/          # Componentes UI reutilizables (shadcn/ui)
│   ├── constants/       # Constantes de la aplicación
│   ├── contexts/        # Proveedores de React Context
│   ├── hooks/           # Hooks personalizados de React
│   ├── lib/             # Funciones de utilidad
│   ├── pages/           # Componentes de página
│   ├── translations/    # Traducciones i18n
│   ├── types/           # Definiciones de tipos TypeScript
│   ├── App.tsx          # Componente raíz de la aplicación
│   ├── main.tsx         # Punto de entrada de la aplicación
│   └── index.css        # Estilos globales
├── index.html           # Plantilla HTML
├── package.json         # Dependencias y scripts
├── vite.config.ts       # Configuración de Vite
├── tailwind.config.ts   # Configuración de Tailwind CSS
├── tsconfig.json        # Configuración de TypeScript
└── components.json      # Configuración de shadcn/ui
```

### Arquitectura de Componentes

#### Componentes de Características

Ubicados en `src/components/features/`:

1. **HeroSection.tsx**: Sección de inicio con botones de llamada a la acción
2. **ServicesSection.tsx**: Grid de ofertas de servicios
3. **ProductsSection.tsx**: Catálogo de productos filtrable
4. **PaymentSection.tsx**: Información de pago e integración con Stripe
5. **ContactSection.tsx**: Formulario de contacto e información de la empresa

#### Componentes de Layout

Ubicados en `src/components/layout/`:

1. **Header.tsx**: Barra de navegación con alternador de idioma, cambio de tema y menú
2. **Footer.tsx**: Pie de página con enlaces e información de la empresa

#### Componentes UI

Ubicados en `src/components/ui/`: Más de 40 componentes reutilizables de shadcn/ui incluyendo botones, tarjetas, diálogos, formularios y más.

### Gestión de Estado

La aplicación utiliza múltiples enfoques de gestión de estado:

1. **Context API**: 
   - `LanguageContext`: Gestiona la selección de idioma (Español/Inglés)
   - Estado del tema: Preferencia de modo oscuro/claro

2. **Estado Local**: Estado a nivel de componente con hooks de React
3. **Estado de Formularios**: React Hook Form para gestión de formularios complejos
4. **Estado del Servidor**: TanStack Query para caché de datos de API

### Estructura de Enrutamiento

Aplicación de una sola página simple con navegación de desplazamiento suave:

```typescript
- / (HomePage)
  - #servicios (Sección de Servicios)
  - #productos (Sección de Productos)
  - #materiales (Sección de Materiales)
  - #automatizacion (Sección de Automatización)
  - #soldadura (Sección de Soldadura)
  - #contacto (Sección de Contacto)
```

---

## Secciones del Sitio Web

### 1. Sección Hero

**Propósito**: Primera impresión y llamada a la acción principal

**Características**:
- Titular prominente con la propuesta de valor de la empresa
- Dos botones CTA: "Ver Catálogo" y "Contactar Asesor"
- Indicadores de confianza mostrando envío, cantidad de productos y soporte
- Fondo degradado animado con patrón superpuesto
- Diseño responsivo con imagen en vista de escritorio

**Contenido**:
- Badge: "Proveedor líder en Colombia"
- Título: "Equipos industriales y suministros especializados"
- Descripción: Información completa sobre la oferta de productos

### 2. Sección de Servicios

**Propósito**: Mostrar servicios principales del negocio

**Características**:
- Diseño de grid con 5 tarjetas de servicio
- Animaciones al pasar el cursor y retroalimentación visual
- Jerarquía visual basada en iconos
- Listas de características para cada servicio

**Servicios Ofrecidos**:
1. **Suministros y Herramientas**: Más de 500 productos en stock
2. **Materiales Especializados**: Acero inoxidable, acero al carbono, hierro
3. **Instalación y Consultoría**: Servicios de instalación profesional
4. **Automatización de Procesos**: Sistemas PLC y sensores
5. **Soldadura Especializada**: Soldadura TIG, MIG, láser

### 3. Sección de Productos

**Propósito**: Mostrar catálogo de productos con filtrado

**Características**:
- Filtrado dinámico por categoría
- Tarjetas de productos con imágenes y especificaciones
- Visualización de precios en Pesos Colombianos (COP)
- Indicadores de estado de stock
- Diseño de grid responsivo (1-4 columnas)
- Visualización de productos específica por idioma

**Categorías de Productos**:
- Todos los Productos
- Herramientas
- Materiales
- Soldadura Industrial
- Automatización
- Especializados

**Información del Producto**:
- Imágenes de productos de Unsplash
- Nombre y descripción
- Precio o solicitud de cotización
- Especificaciones técnicas
- Disponibilidad de stock
- Acciones "Solicitar Cotización" o "Agregar al Carrito"

### 4. Sección de Pago

**Propósito**: Proporcionar opciones de pago e información de seguridad

**Características**:
- Integración de pagos Stripe
- Insignias de seguridad y señales de confianza
- Iconos de métodos de pago
- Información sobre planes de pago flexibles
- Proceso de checkout seguro

### 5. Sección de Contacto

**Propósito**: Habilitar comunicación con clientes

**Características**:
- Formulario de contacto con validación
- Información de contacto de la empresa
- Información de ubicación (Colombia)
- Enlaces de redes sociales
- Promesa de respuesta rápida

**Campos del Formulario**:
- Nombre
- Email
- Teléfono
- Mensaje
- Validación de formulario con mensajes de error

### 6. Header (Encabezado)

**Propósito**: Navegación y controles globales

**Características**:
- Posicionamiento pegajoso (sigue el desplazamiento)
- Logo de la empresa
- Menú de navegación con desplazamiento suave
- Alternador de idioma (ES/EN)
- Alternador de tema (Claro/Oscuro)
- Icono de carrito de compras
- Menú hamburguesa responsivo móvil
- Funcionalidad de búsqueda
- Número de teléfono de contacto

**Barra Superior**:
- Anuncio de envío gratuito
- Conteo de productos (500+ productos)
- Número de contacto rápido

### 7. Footer (Pie de página)

**Propósito**: Navegación secundaria e información legal

**Características**:
- Información de la empresa
- Enlaces rápidos a secciones
- Iconos de redes sociales
- Aviso de copyright
- Recursos adicionales
- Registro de newsletter (opcional)

---

## Flujo de Usuario

### Recorridos Principales del Usuario

#### 1. Flujo de Navegación y Compra

```
Inicio (Hero) 
  → Explorar Sección de Servicios
    → Explorar Sección de Productos
      → Filtrar por Categoría
        → Ver Detalles del Producto
          → Agregar al Carrito / Solicitar Cotización
            → Sección de Pago
              → Checkout vía Stripe
```

#### 2. Flujo de Consulta de Servicio

```
Inicio (Hero)
  → CTA "Contactar Asesor"
    → Sección de Contacto
      → Llenar Formulario de Contacto
        → Enviar Consulta
          → Recibir Confirmación
```

#### 3. Flujo de Búsqueda de Producto

```
Búsqueda en Header
  → Ingresar Palabras Clave
    → Filtrar Resultados
      → Ver Producto
        → Solicitar Cotización
```

### Patrones de Interacción

1. **Desplazamiento Suave**: Los enlaces de navegación activan desplazamiento suave a secciones
2. **Carga Diferida**: Las imágenes se cargan mientras el usuario se desplaza
3. **Validación de Formularios**: Validación en tiempo real con mensajes de error
4. **Notificaciones Toast**: Retroalimentación del usuario para acciones
5. **Diálogos Modales**: Detalles de producto y flujos de checkout
6. **Navegación Responsiva**: Menú hamburguesa móvil, menú completo de escritorio

### Cambio de Idioma

Los usuarios pueden alternar entre español e inglés:
- Botón de alternancia en el encabezado (bandera o texto ES/EN)
- Preferencia almacenada en localStorage
- Todos los elementos de UI y descripciones de productos se actualizan instantáneamente
- Idioma por defecto: Español (es)

### Cambio de Tema

Los usuarios pueden alternar entre modos claro y oscuro:
- Icono de Sol/Luna en el encabezado
- Preferencia almacenada en localStorage
- Detección de preferencias del sistema en la primera visita
- Transiciones de color suaves

---

## Instalación y Configuración

### Requisitos Previos

- **Node.js**: Versión 18.x o superior ([Descargar](https://nodejs.org/))
- **npm**: Versión 9.x o superior (viene con Node.js)
- **Git**: Para control de versiones ([Descargar](https://git-scm.com/))

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/titanioco/Bosons-web.git
cd Bosons-web
```

### Paso 2: Instalar Dependencias

```bash
npm install
```

Esto instalará todas las dependencias listadas en `package.json`, incluyendo:
- React, TypeScript y Vite
- Librerías de componentes UI (Radix UI)
- Tailwind CSS y plugins
- Librerías de manejo y validación de formularios
- Utilidades adicionales

### Paso 3: Configuración de Entorno (Opcional)

Crear un archivo `.env` para variables de entorno si es necesario:

```env
# Ejemplo de variables de entorno
VITE_SUPABASE_URL=tu_url_supabase
VITE_SUPABASE_ANON_KEY=tu_clave_supabase
VITE_STRIPE_PUBLIC_KEY=tu_clave_publica_stripe
VITE_GOOGLE_AI_KEY=tu_clave_google_ai
```

**Nota**: Nunca hacer commit del archivo `.env` al control de versiones.

### Paso 4: Verificar Instalación

```bash
npm run dev
```

El servidor de desarrollo debería iniciarse en `http://localhost:8080`

---

## Flujo de Desarrollo

### Scripts Disponibles

```json
{
  "dev": "vite",                    // Iniciar servidor de desarrollo
  "build": "vite build",            // Compilación de producción
  "build:dev": "vite build --mode development", // Compilación de desarrollo
  "lint": "eslint .",               // Ejecutar ESLint
  "preview": "vite preview"         // Vista previa de compilación de producción
}
```

### Servidor de Desarrollo

```bash
npm run dev
```

Características:
- Hot Module Replacement (HMR)
- Recarga rápida para componentes React
- Verificación de tipos TypeScript
- Auto-importaciones y alias de rutas
- Se ejecuta en `http://[::]:8080`

### Calidad de Código

#### Linting

```bash
npm run lint
```

Configuración de ESLint (`eslint.config.js`):
- Reglas de React Hooks
- Reglas de React Refresh
- Reglas de TypeScript ESLint
- Reglas personalizadas del proyecto

#### Verificación de Tipos

TypeScript está configurado con modo estricto:
- `tsconfig.json`: Configuración base
- `tsconfig.app.json`: Código de la aplicación
- `tsconfig.node.json`: Código Node.js (configuración Vite)

### Alias de Rutas

Configurado en `vite.config.ts`:

```typescript
"@": "/src"           // Importar desde directorio src
```

Ejemplo de uso:
```typescript
import Header from '@/components/layout/Header';
import { Button } from '@/components/ui/button';
```

### Flujo de Estilos

1. **Clases Tailwind**: Usar clases de utilidad para la mayoría de estilos
2. **Variantes de Componentes**: Usar `class-variance-authority` para variantes de componentes
3. **Clases Personalizadas**: Definir en `src/index.css` para patrones reutilizables
4. **Variables CSS**: Tokens de tema definidos como propiedades personalizadas CSS

Ejemplo de estilos de componente:
```typescript
<div className="section-container section-padding bg-background">
  <h1 className="text-4xl font-bold text-foreground">Título</h1>
</div>
```

### Agregar Nuevos Componentes

#### Usando CLI de shadcn/ui

```bash
npx shadcn@latest add [nombre-componente]
```

Ejemplo:
```bash
npx shadcn@latest add dialog
npx shadcn@latest add select
```

Esto agrega componentes pre-estilizados y accesibles a `src/components/ui/`.

#### Crear Componentes Personalizados

1. Crear archivo en el directorio apropiado
2. Importar dependencias necesarias
3. Definir tipos TypeScript
4. Implementar lógica del componente
5. Exportar componente

### Agregar Traducciones

Editar `src/translations/translations.ts`:

```typescript
export const translations = {
  nuevaSeccion: {
    titulo: {
      es: 'Título en Español',
      en: 'Title in English'
    }
  }
};
```

Uso en componente:
```typescript
const { language } = useLanguage();
const titulo = translations.nuevaSeccion.titulo[language];
```

---

## Compilación y Despliegue

### Compilación de Producción

```bash
npm run build
```

Salida:
- Directorio `dist/` con archivos optimizados
- Bundles de JavaScript minificados
- CSS optimizado
- Imágenes comprimidas
- Mapas de código fuente (opcional)

Optimizaciones de compilación:
- División de código
- Tree shaking
- Optimización de recursos
- Purga de CSS vía Tailwind

### Configuración de Compilación

Configuración de Vite (`vite.config.ts`):

```typescript
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Vista Previa de Compilación de Producción

```bash
npm run preview
```

Esto sirve la compilación de producción localmente para pruebas.

### Opciones de Despliegue

#### Opción 1: Hosting Estático (Vercel, Netlify, etc.)

1. Conectar repositorio GitHub
2. Configurar comando de compilación: `npm run build`
3. Establecer directorio de publicación: `dist`
4. Desplegar automáticamente en push

#### Opción 2: Servidor Web Tradicional

1. Compilar el proyecto: `npm run build`
2. Subir contenidos de `dist/` al servidor web
3. Configurar servidor para enrutamiento SPA
4. Configurar certificado SSL

#### Opción 3: OnSpace (Mencionado en README)

1. Abrir plataforma OnSpace
2. Hacer clic en Compartir → Publicar
3. Despliegue y hosting automático

### Variables de Entorno

Establecer variables de entorno en la plataforma de despliegue:
- Credenciales de Supabase
- Claves API de Stripe
- Claves API de Google AI
- Cualquier configuración personalizada

### Consideraciones de Rendimiento

- **Puntuación Lighthouse**: Objetivo 90+ en todas las métricas
- **Tamaño del Bundle**: Monitorear con `vite-bundle-visualizer`
- **Carga Diferida**: Implementar para rutas y componentes pesados
- **Optimización de Imágenes**: Usar formatos modernos (WebP, AVIF)
- **Estrategia de Caché**: Configurar service worker (opcional)

---

## Recursos Externos

### Documentación Oficial

- [Documentación de React](https://react.dev/) - Librería React
- [Documentación de TypeScript](https://www.typescriptlang.org/) - Lenguaje TypeScript
- [Documentación de Vite](https://vitejs.dev/) - Herramienta de compilación
- [Documentación de Tailwind CSS](https://tailwindcss.com/) - Framework CSS de utilidades
- [Documentación de Radix UI](https://www.radix-ui.com/) - Componentes accesibles
- [Documentación de shadcn/ui](https://ui.shadcn.com/) - Librería de componentes

### Librerías y Herramientas

- [React Router](https://reactrouter.com/) - Enrutamiento del lado del cliente
- [React Hook Form](https://react-hook-form.com/) - Gestión de formularios
- [TanStack Query](https://tanstack.com/query/latest) - Obtención de datos
- [Framer Motion](https://www.framer.com/motion/) - Librería de animación
- [Lucide Icons](https://lucide.dev/) - Librería de iconos
- [Documentación de Stripe](https://stripe.com/docs) - Procesamiento de pagos
- [Documentación de Supabase](https://supabase.com/docs) - Servicios backend

### Recursos de Aprendizaje

- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)
- [Mejores Prácticas de Tailwind CSS](https://tailwindcss.com/docs/reusing-styles)
- [Guía de Rendimiento de Vite](https://vitejs.dev/guide/performance.html)
- [Directrices de Accesibilidad Web (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)

### Comunidad y Soporte

- [Comunidad React](https://react.dev/community)
- [Discord de Tailwind CSS](https://tailwindcss.com/discord)
- [Issues de GitHub](https://github.com/titanioco/Bosons-web/issues) - Issues del proyecto

### Recursos de Diseño

- [Unsplash](https://unsplash.com/) - Fuente de imágenes de productos
- [Google Fonts](https://fonts.google.com/) - Tipografía (Inter, Montserrat)
- [Color Hunt](https://colorhunt.co/) - Inspiración de paletas de colores
- [Dribbble](https://dribbble.com/) - Inspiración de diseño

### Herramientas de Desarrollo

- [VS Code](https://code.visualstudio.com/) - IDE recomendado
- [GitHub](https://github.com/) - Hosting de control de versiones
- [npm](https://www.npmjs.com/) - Registro de paquetes
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/) - Depuración del navegador

### Herramientas de Pruebas

- [React Testing Library](https://testing-library.com/react) - Pruebas de componentes
- [Vitest](https://vitest.dev/) - Framework de pruebas unitarias
- [Cypress](https://www.cypress.io/) - Pruebas E2E
- [Lighthouse](https://developers.google.com/web/tools/lighthouse) - Auditoría de rendimiento

---

## Especificaciones Técnicas

### Soporte de Navegadores

- Chrome/Edge: Últimas 2 versiones
- Firefox: Últimas 2 versiones
- Safari: Últimas 2 versiones
- Navegadores móviles: iOS Safari 14+, Chrome Android

### Objetivos de Rendimiento

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1
- First Input Delay: < 100ms

### Accesibilidad

- Cumplimiento WCAG 2.1 Nivel AA
- Soporte de navegación por teclado
- Compatibilidad con lectores de pantalla
- Etiquetas y roles ARIA apropiados
- Gestión de foco

### Optimización SEO

- Estructura HTML semántica
- Meta tags (título, descripción, palabras clave)
- Tags Open Graph para compartir en redes sociales
- Datos estructurados Schema.org
- Generación de sitemap (si es necesario)
- Configuración de robots.txt

---

## Mantenimiento y Actualizaciones

### Actualizaciones de Dependencias

Cronograma de mantenimiento regular:
1. Verificar actualizaciones de seguridad: Semanalmente
2. Actualizaciones de versiones menores: Mensualmente
3. Actualizaciones de versiones mayores: Trimestralmente
4. Revisar y probar todas las actualizaciones antes de producción

Comandos:
```bash
npm outdated              # Verificar paquetes desactualizados
npm update               # Actualizar versiones menores
npm install package@latest  # Actualizar paquete específico
```

### Prácticas de Seguridad

- Mantener dependencias actualizadas
- Usar `.env` para datos sensibles
- Implementar Content Security Policy
- Habilitar HTTPS en producción
- Auditorías de seguridad regulares
- Usar `npm audit` para escaneo de vulnerabilidades

### Monitoreo

Monitoreo recomendado:
- Seguimiento de errores (Sentry)
- Monitoreo de rendimiento (Web Vitals)
- Analíticas de usuario (Google Analytics, Plausible)
- Monitoreo de tiempo de actividad
- Monitoreo de estado de compilación

---

## Directrices de Contribución

### Flujo de Git

1. Crear rama de característica desde `main`
2. Hacer cambios con commits descriptivos
3. Ejecutar linting y pruebas
4. Enviar pull request
5. Proceso de revisión de código
6. Fusionar a main después de aprobación

### Convención de Mensajes de Commit

```
tipo(ámbito): asunto

cuerpo (opcional)

pie de página (opcional)
```

Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

### Estilo de Código

- Usar TypeScript para todo código nuevo
- Seguir configuración de ESLint
- Usar componentes funcionales con hooks
- Implementar manejo apropiado de errores
- Agregar comentarios JSDoc para funciones complejas
- Mantener componentes pequeños y enfocados

---

## Resolución de Problemas

### Problemas Comunes

**Problema**: Puerto 8080 ya en uso
```bash
# Solución: Usar puerto diferente
npm run dev -- --port 3000
```

**Problema**: Errores de tipo en IDE
```bash
# Solución: Reiniciar servidor TypeScript o reinstalar dependencias
npm install
```

**Problema**: Los estilos no se actualizan
```bash
# Solución: Limpiar caché de Vite y reiniciar
rm -rf node_modules/.vite
npm run dev
```

**Problema**: Falla la compilación
```bash
# Solución: Instalación limpia
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## Licencia

Por favor consultar el repositorio para información de licencia.

---

## Contacto y Soporte

Para preguntas, problemas o contribuciones:
- Issues de GitHub: [Bosons-web Issues](https://github.com/titanioco/Bosons-web/issues)
- Sitio Web de la Empresa: https://www.bosons.co
- Email: Contactar a través del formulario del sitio web

---

**Última Actualización**: Diciembre 2025
**Versión**: 1.0.0
**Mantenido por**: Equipo de Desarrollo Titanioco/Bosons
