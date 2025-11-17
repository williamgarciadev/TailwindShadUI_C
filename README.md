# Sistema de Colores Minimalista Moderno

Sistema de colores profesional inspirado en Linear, Vercel y Stripe para aplicaciones web con shadcn/ui y TailwindCSS.

## 🎨 Filosofía de Diseño

- **Minimalismo extremo**: Diseño limpio tipo Linear/Vercel
- **Contraste máximo**: Negro sobre blanco (light mode), blanco sobre negro (dark mode)
- **Grises neutros**: Sin tintes de color
- **Botones primary**: Negro en modo claro, blanco en modo oscuro (NO azules)
- **Púrpura como acento**: Solo para elementos decorativos
- **Proporciones**: 60% espacio en blanco/negro, 30% grises, 10% acentos
- **Tipografía**: Inter como protagonista
- **Sin gradientes innecesarios**

## 🚀 Inicio Rápido

### 1. Instalar dependencias
```bash
npm install
```

### 2. Ejecutar en modo desarrollo
```bash
npm run dev
```

La aplicación se abrirá automáticamente en `http://localhost:3000`

### 3. Construir para producción
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
│       │   ├── ui/
│       │   │   ├── button.tsx
│       │   │   └── card.tsx
│       │   ├── theme-provider.tsx
│       │   └── theme-toggle.tsx
│       ├── lib/
│       │   └── utils.ts
│       └── index.css
├── tailwind.config.ts
├── postcss.config.js
└── package.json
```

## 🎨 Paleta de Colores

### Modo Claro
- **Background**: `hsl(0 0% 100%)` - Blanco puro
- **Foreground**: `hsl(0 0% 9%)` - Negro casi puro
- **Primary**: `hsl(0 0% 9%)` - Negro (botones principales)
- **Accent**: `hsl(262 80% 60%)` - Púrpura vibrante
- **Border**: `hsl(0 0% 89%)` - Gris claro

### Modo Oscuro
- **Background**: `hsl(0 0% 4%)` - Negro profundo
- **Foreground**: `hsl(0 0% 93%)` - Blanco suave
- **Primary**: `hsl(0 0% 98%)` - Blanco (botones principales)
- **Accent**: `hsl(262 80% 60%)` - Púrpura vibrante
- **Border**: `hsl(0 0% 15%)` - Gris oscuro

### Paleta de Gráficos
- **Chart 1**: `hsl(262 80% 60%)` - Púrpura
- **Chart 2**: `hsl(142 71% 45%)` - Verde
- **Chart 3**: `hsl(217 91% 60%)` - Azul
- **Chart 4**: `hsl(25 95% 53%)` - Naranja
- **Chart 5**: `hsl(340 82% 52%)` - Rosa

## 💡 Uso

### ThemeProvider

Envuelve tu aplicación con el `ThemeProvider`:

```tsx
import { ThemeProvider } from "./components/theme-provider";

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### ThemeToggle

Añade el botón de cambio de tema:

```tsx
import { ThemeToggle } from "./components/theme-toggle";

function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

### Componentes UI

Utiliza los componentes con el sistema de colores:

```tsx
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";

function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Título Minimalista</CardTitle>
      </CardHeader>
      <CardContent>
        <Button variant="default">Botón Primary</Button>
        <Button variant="outline">Botón Outline</Button>
        <Button variant="ghost">Botón Ghost</Button>
      </CardContent>
    </Card>
  );
}
```

## 🎯 Principios de Diseño

1. **Simplicidad**: Menos es más
2. **Consistencia**: Usar el sistema de colores en toda la aplicación
3. **Accesibilidad**: Contraste WCAG AAA
4. **Performance**: Diseño ligero y rápido
5. **Escalabilidad**: Sistema modular y extensible

## 📚 Tecnologías

- **React 18**: Biblioteca de UI
- **Vite**: Build tool ultrarrápido
- **TailwindCSS**: Framework CSS utility-first
- **shadcn/ui**: Componentes UI reutilizables
- **next-themes**: Gestión de temas dark/light
- **Radix UI**: Primitivas accesibles
- **TypeScript**: Type safety

## 🌟 Resultado Esperado

Diseño ultra limpio y profesional con máximo contraste y estética tech moderna 2025.

---

**Inspirado en**: Linear, Vercel, Stripe
