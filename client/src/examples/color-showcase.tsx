import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { ThemeToggle } from "../components/theme-toggle";

export default function ColorShowcase() {
  return (
    <div className="min-h-screen bg-background p-8">
      {/* Header */}
      <header className="mb-12 flex items-center justify-between border-b border-border pb-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Sistema de Colores Minimalista
          </h1>
          <p className="mt-2 text-muted-foreground">
            Inspirado en Linear, Vercel y Stripe
          </p>
        </div>
        <ThemeToggle />
      </header>

      {/* Botones */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Botones
        </h2>
        <div className="flex flex-wrap gap-4">
          <Button variant="default">Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
          <Button variant="ghost">Ghost Button</Button>
          <Button variant="destructive">Destructive Button</Button>
          <Button variant="link">Link Button</Button>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Cards
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Diseño Minimalista</CardTitle>
              <CardDescription>
                Contraste máximo para máxima legibilidad
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">
                Este sistema de colores prioriza la simplicidad y la claridad,
                con negro sobre blanco en modo claro.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Ver más
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-accent">
            <CardHeader>
              <CardTitle className="text-accent">Acento Púrpura</CardTitle>
              <CardDescription>
                El púrpura se usa solo como acento decorativo
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">
                El color púrpura vibrante se reserva para elementos que
                necesitan destacar sin dominar el diseño.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                Acción destacada
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tipografía Inter</CardTitle>
              <CardDescription>
                La fuente como protagonista del diseño
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-foreground">
                Inter proporciona excelente legibilidad y un aspecto moderno
                que complementa el diseño minimalista.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">
                Explorar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Paleta de Colores */}
      <section className="mb-12">
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Paleta de Gráficos
        </h2>
        <div className="grid gap-4 sm:grid-cols-5">
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-chart-1 shadow-sm" />
            <p className="text-center text-sm text-muted-foreground">
              Chart 1 - Púrpura
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-chart-2 shadow-sm" />
            <p className="text-center text-sm text-muted-foreground">
              Chart 2 - Verde
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-chart-3 shadow-sm" />
            <p className="text-center text-sm text-muted-foreground">
              Chart 3 - Azul
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-chart-4 shadow-sm" />
            <p className="text-center text-sm text-muted-foreground">
              Chart 4 - Naranja
            </p>
          </div>
          <div className="space-y-2">
            <div className="h-24 rounded-lg bg-chart-5 shadow-sm" />
            <p className="text-center text-sm text-muted-foreground">
              Chart 5 - Rosa
            </p>
          </div>
        </div>
      </section>

      {/* Escala de Grises */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold text-foreground">
          Escala de Grises
        </h2>
        <div className="grid gap-4 sm:grid-cols-4">
          <Card>
            <CardContent className="p-6">
              <div className="mb-2 h-12 rounded bg-background border border-border" />
              <p className="text-sm font-medium">Background</p>
              <p className="text-xs text-muted-foreground">0 0% 100% / 4%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-2 h-12 rounded bg-muted" />
              <p className="text-sm font-medium">Muted</p>
              <p className="text-xs text-muted-foreground">0 0% 96% / 15%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-2 h-12 rounded bg-secondary" />
              <p className="text-sm font-medium">Secondary</p>
              <p className="text-xs text-muted-foreground">0 0% 96% / 15%</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="mb-2 h-12 rounded bg-primary" />
              <p className="text-sm font-medium">Primary</p>
              <p className="text-xs text-muted-foreground">0 0% 9% / 98%</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 border-t border-border pt-8 text-center text-sm text-muted-foreground">
        <p>Sistema de colores minimalista moderno - 2025</p>
      </footer>
    </div>
  );
}
