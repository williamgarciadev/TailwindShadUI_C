# Sistema de Diseño Minimalista Moderno - Aplicación Completa

**Sistema de diseño completo y reutilizable** inspirado en Linear, Vercel y Stripe. Incluye una aplicación web tipo admin panel/dashboard lista para usar en tus proyectos.

**🚀 Demo en vivo:** https://tailwind-shad-ui-c.vercel.app

## ✨ Características

### 🎨 Sistema de Colores Profesional
- **Minimalismo extremo** tipo Linear/Vercel/Stripe
- **Contraste máximo**: Negro sobre blanco (light), blanco sobre negro (dark)
- **Grises neutros** sin tintes de color
- **Botones primary**: Negro (light) / Blanco (dark) - NO azules
- **Púrpura vibrante** solo como acento decorativo
- **Proporciones**: 60% espacios blancos/negros, 30% grises, 10% acentos
- **Tipografía Inter** como protagonista

### 🧩 Componentes Completos
- ✅ **Layout**: Sidebar colapsable, Header, MainLayout
- ✅ **Navegación**: React Router integrado
- ✅ **UI Components**: Button, Card, Input, Label, Table, Badge, Alert
- ✅ **Dark Mode**: Toggle suave entre temas
- ✅ **6 Páginas completas** listas para usar

### 📱 Páginas Incluidas
1. **Dashboard** - Estadísticas, métricas, actividad reciente
2. **Analytics** - Visualizaciones, top pages, KPIs
3. **Tables** - Gestión de datos con tablas
4. **Forms** - Ejemplos de formularios
5. **Users** - Gestión de usuarios/equipo
6. **Settings** - Configuración y preferencias

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en desarrollo
```bash
npm run dev
```

La aplicación se abrirá en **http://localhost:3000**

### 3. Rutas Disponibles
- `/` - Dashboard principal
- `/analytics` - Página de analytics
- `/tables` - Tablas de datos
- `/forms` - Ejemplos de formularios
- `/users` - Gestión de usuarios
- `/settings` - Configuración
- `/showcase` - Demo del sistema de colores

### 4. Construir para producción
```bash
npm run build
npm run preview
```

## 📁 Estructura del Proyecto

```
TailwindShadUI_C/
├── client/
│   └── src/
│       ├── components/
│       │   ├── layout/
│       │   │   ├── sidebar.tsx          # Sidebar colapsable con menú
│       │   │   ├── header.tsx           # Header con búsqueda y acciones
│       │   │   └── main-layout.tsx      # Layout principal
│       │   ├── ui/
│       │   │   ├── button.tsx           # Botón con variantes
│       │   │   ├── card.tsx             # Tarjetas
│       │   │   ├── input.tsx            # Inputs de formulario
│       │   │   ├── label.tsx            # Labels
│       │   │   ├── badge.tsx            # Badges de estado
│       │   │   ├── alert.tsx            # Alertas
│       │   │   └── table.tsx            # Tablas de datos
│       │   ├── theme-provider.tsx       # Provider de temas
│       │   └── theme-toggle.tsx         # Toggle dark/light
│       ├── pages/
│       │   ├── dashboard.tsx            # Página principal
│       │   ├── analytics.tsx            # Analytics
│       │   ├── tables.tsx               # Gestión de tablas
│       │   ├── forms.tsx                # Formularios
│       │   ├── users.tsx                # Usuarios
│       │   └── settings.tsx             # Configuración
│       ├── examples/
│       │   └── color-showcase.tsx       # Demo de colores
│       ├── lib/
│       │   └── utils.ts                 # Utilidades
│       ├── index.css                    # Variables CSS y estilos
│       ├── main.tsx                     # Punto de entrada
│       └── App.tsx                      # Router principal
├── tailwind.config.ts                    # Configuración Tailwind
├── vite.config.ts                        # Configuración Vite
└── package.json                          # Dependencias
```

## 🎨 Sistema de Colores

### Modo Claro
```css
--background: 0 0% 100%      /* Blanco puro */
--foreground: 0 0% 9%        /* Negro casi puro */
--primary: 0 0% 9%           /* Negro - botones principales */
--accent: 262 80% 60%        /* Púrpura vibrante */
--border: 0 0% 89%           /* Gris claro */
```

### Modo Oscuro
```css
--background: 0 0% 4%        /* Negro profundo */
--foreground: 0 0% 93%       /* Blanco suave */
--primary: 0 0% 98%          /* Blanco - botones principales */
--accent: 262 80% 60%        /* Púrpura vibrante */
--border: 0 0% 15%           /* Gris oscuro */
```

### Paleta de Gráficos
```css
--chart-1: 262 80% 60%       /* Púrpura */
--chart-2: 142 71% 45%       /* Verde */
--chart-3: 217 91% 60%       /* Azul */
--chart-4: 25 95% 53%        /* Naranja */
--chart-5: 340 82% 52%       /* Rosa */
```

## 🔧 Cómo Usar en Tus Proyectos

### Opción 1: Clonar el repositorio completo
```bash
git clone <repo-url>
cd TailwindShadUI_C
npm install
npm run dev
```

### Opción 2: Copiar componentes específicos
1. Copia la carpeta `client/src/components/ui/` a tu proyecto
2. Copia `client/src/lib/utils.ts`
3. Copia las variables CSS de `client/src/index.css`
4. Copia la configuración de `tailwind.config.ts`
5. Instala las dependencias necesarias

### Opción 3: Usar como base (recomendado)
1. Clona el repositorio
2. Personaliza los colores en `index.css`
3. Modifica las páginas según tus necesidades
4. Añade tus propias páginas en `client/src/pages/`
5. Actualiza el routing en `App.tsx`

## 📦 Dependencias

### Producción
- `react` & `react-dom` - Biblioteca UI
- `react-router-dom` - Routing
- `next-themes` - Gestión de temas
- `@radix-ui/react-slot` - Primitivas UI
- `lucide-react` - Iconos
- `class-variance-authority` - Variantes de componentes
- `clsx` & `tailwind-merge` - Utilidades CSS
- `recharts` - Gráficos (opcional)

### Desarrollo
- `vite` - Build tool
- `typescript` - Type safety
- `tailwindcss` - Framework CSS
- `tailwindcss-animate` - Animaciones
- `autoprefixer` - Compatibilidad CSS

## 💡 Ejemplos de Uso

### Crear una nueva página
```tsx
// client/src/pages/mi-pagina.tsx
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card";

export function MiPagina() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Mi Página</h1>
      <Card>
        <CardHeader>
          <CardTitle>Mi Contenido</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Tu contenido aquí */}
        </CardContent>
      </Card>
    </div>
  );
}
```

### Añadir ruta
```tsx
// client/src/App.tsx
<Route path="/mi-pagina" element={<MainLayout><MiPagina /></MainLayout>} />
```

### Añadir al menú
```tsx
// client/src/components/layout/sidebar.tsx
const menuItems = [
  // ...otros items
  { icon: MiIcono, label: "Mi Página", href: "/mi-pagina" },
];
```

## 🎯 Casos de Uso

Este sistema es perfecto para:

- ✅ **Admin Panels** - Gestión de aplicaciones
- ✅ **Dashboards** - Visualización de datos
- ✅ **SaaS Applications** - Aplicaciones web
- ✅ **Intranets** - Herramientas internas
- ✅ **CMS** - Sistemas de gestión
- ✅ **Analytics Tools** - Herramientas de análisis

## 🚀 Características Avanzadas

### Sidebar Colapsable
El sidebar se puede colapsar para ganar espacio en pantalla. El estado se mantiene durante la navegación.

### Dark Mode Automático
Detecta automáticamente las preferencias del sistema y permite cambio manual.

### Responsive Design
Diseñado para funcionar en desktop, tablet y móvil.

### Accesibilidad WCAG AAA
Contraste máximo para mejor accesibilidad.

### Performance Optimizado
Código optimizado para carga rápida y bajo uso de recursos.

## 📚 Tecnologías

- **React 18** - Biblioteca de UI
- **TypeScript** - Type safety
- **Vite** - Build tool ultrarrápido
- **TailwindCSS** - Framework CSS utility-first
- **React Router** - Routing de la aplicación
- **shadcn/ui** - Sistema de componentes
- **Radix UI** - Primitivas accesibles
- **next-themes** - Gestión de temas
- **Lucide React** - Iconos modernos

## 🎨 Personalización

### Cambiar colores
Edita `client/src/index.css` y modifica las variables CSS:

```css
:root {
  --primary: 0 0% 9%;      /* Cambia esto */
  --accent: 262 80% 60%;   /* Y esto */
}
```

### Cambiar tipografía
Edita `tailwind.config.ts`:

```ts
fontFamily: {
  sans: ["TuFuente", "sans-serif"],
}
```

### Añadir nuevos componentes
Crea archivos en `client/src/components/ui/` siguiendo el patrón de los existentes.

## 🌟 Resultado Esperado

Una aplicación web ultra limpia, profesional, con máximo contraste y estética tech moderna 2025. Lista para copiar y pegar en tus proyectos.

---

**Inspirado en**: Linear, Vercel, Stripe
**Creado con**: React + TypeScript + TailwindCSS + Vite
**Licencia**: Uso libre en tus proyectos
