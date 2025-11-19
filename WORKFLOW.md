# 🚀 Flujo de Trabajo - Git & Vercel

Este documento describe el flujo de trabajo recomendado para mantener el proyecto actualizado y desplegado en Vercel.

## 📋 Configuración Actual

- **Rama principal:** `main`
- **Deployment:** Vercel despliega automáticamente desde `main`
- **Framework:** Vite + React + TypeScript
- **Estilo:** TailwindCSS + shadcn/ui

## ⚡ Flujo de Trabajo Recomendado

### Opción 1: Trabajo Directo en Main (Simple)

**Para cambios pequeños y desarrollo individual:**

```bash
# 1. Asegúrate de estar en main y actualizado
git checkout main
git pull origin main

# 2. Haz tus cambios en los archivos

# 3. Revisa los cambios
git status
git diff

# 4. Agregar, commit y push
git add .
git commit -m "feat: descripción clara del cambio"
git push origin main
```

**✅ Ventajas:**
- Simple y directo
- Vercel despliega automáticamente
- Ideal para proyectos personales
- Cambios en producción en minutos

---

### Opción 2: Feature Branches (Profesional)

**Para cambios grandes o trabajo colaborativo:**

```bash
# 1. Crear rama para nueva feature
git checkout main
git pull origin main
git checkout -b feature/nombre-descriptivo

# 2. Desarrollar la feature
# ... hacer cambios ...
git add .
git commit -m "feat: añadir nueva funcionalidad"

# 3. Push de la rama feature
git push origin feature/nombre-descriptivo

# 4. Crear Pull Request en GitHub
# - Ve a GitHub
# - Crea PR desde feature/nombre-descriptivo → main
# - Revisa cambios
# - Merge PR

# 5. Actualizar main local después del merge
git checkout main
git pull origin main

# 6. Opcional: Eliminar rama feature
git branch -d feature/nombre-descriptivo
git push origin --delete feature/nombre-descriptivo
```

**✅ Ventajas:**
- Revisión de código antes de producción
- Historial limpio y organizado
- Ideal para equipos
- Vercel crea preview deployments automáticamente

---

## 🎯 Comandos Útiles

### Ver Estado Actual
```bash
# ¿En qué rama estoy?
git branch

# ¿Qué archivos cambié?
git status

# Ver cambios específicos
git diff

# Ver commits recientes
git log --oneline -5
```

### Cambiar de Rama
```bash
# Cambiar a main
git checkout main

# Crear y cambiar a nueva rama
git checkout -b feature/mi-feature

# Ver todas las ramas (locales y remotas)
git branch -a
```

### Sincronizar
```bash
# Traer últimos cambios de main
git pull origin main

# Actualizar todas las referencias remotas
git fetch origin

# Ver diferencias con remoto
git log origin/main..HEAD
```

---

## 🔄 Vercel: Cómo Funciona

### Deployments Automáticos

**Production (main):**
- Cada push a `main` → Deploy automático a producción
- URL: Tu dominio principal
- Tiempo: ~2-5 minutos

**Preview (feature branches):**
- Cada push a cualquier rama → Preview deployment
- URL única temporal
- Ideal para revisar cambios antes del merge

### Verificar Deployment

1. Ve a [Vercel Dashboard](https://vercel.com/dashboard)
2. Selecciona tu proyecto
3. Tab "Deployments"
4. Busca el commit más reciente
5. Estados:
   - 🟡 Building... → En proceso
   - 🟢 Ready → Desplegado exitosamente
   - 🔴 Error → Falló el build

---

## 📝 Convenciones de Commits

Usa mensajes descriptivos siguiendo [Conventional Commits](https://www.conventionalcommits.org/):

```bash
# Nuevas features
git commit -m "feat: agregar sistema de notificaciones"

# Corrección de bugs
git commit -m "fix: corregir problema en login"

# Refactoring
git commit -m "refactor: mejorar estructura del header"

# Documentación
git commit -m "docs: actualizar README con instrucciones"

# Estilos (no afecta lógica)
git commit -m "style: ajustar espaciado en sidebar"

# Tests
git commit -m "test: agregar tests para autenticación"

# Build/Dependencias
git commit -m "chore: actualizar dependencias"
```

---

## 🚨 Solución de Problemas

### Error: "Your branch is behind"
```bash
# Traer cambios remotos
git pull origin main

# Si hay conflictos, resuélvelos y luego:
git add .
git commit -m "merge: resolver conflictos"
git push origin main
```

### Error: "failed to push"
```bash
# Verificar que estés en la rama correcta
git branch

# Asegurar que estás actualizado
git pull origin main

# Intentar push nuevamente
git push origin main
```

### Vercel no está desplegando
1. Verifica que el push se completó: `git log origin/main -1`
2. Revisa Vercel Dashboard → Project Settings → Git
3. Confirma que "Production Branch" = `main`
4. Revisa los logs de build en Vercel

---

## ✨ Mejores Prácticas

### ✅ Hacer
- Commits pequeños y frecuentes
- Mensajes descriptivos
- Pull antes de push
- Revisar cambios antes de commit (`git diff`)
- Probar localmente antes de push (`npm run dev`)

### ❌ Evitar
- Commits gigantes con muchos cambios
- Mensajes vagos ("fix", "update", "changes")
- Push sin pull primero
- Commit de archivos generados (`node_modules`, `dist`)
- Commit con código roto

---

## 📦 Archivos Importantes

### `.gitignore`
Evita commitear archivos innecesarios:
```
node_modules/
dist/
.env
.env.local
*.log
.DS_Store
```

### `vercel.json`
Configuración de Vercel (ya incluida):
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 🎓 Recursos Adicionales

- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [Vercel Documentation](https://vercel.com/docs)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)

---

## 💡 Tips Rápidos

```bash
# Ver historial visual
git log --oneline --graph --all --decorate

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Ver quién cambió cada línea de un archivo
git blame archivo.tsx

# Buscar en commits
git log --all --grep="notification"

# Ver cambios entre dos commits
git diff abc123..def456

# Stash temporal (guardar cambios sin commit)
git stash
git stash pop
```

---

**Última actualización:** 2025-11-18
**Versión:** 1.0.0
