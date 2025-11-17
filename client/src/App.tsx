import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { ColorThemeProvider } from './contexts/theme-color-context';
import { AuthProvider } from './contexts/auth-context';
import { MainLayout } from './components/layout/main-layout';

// Lazy load pages for better performance
const DashboardPage = lazy(() => import('./pages/dashboard').then(m => ({ default: m.DashboardPage })));
const AnalyticsPage = lazy(() => import('./pages/analytics').then(m => ({ default: m.AnalyticsPage })));
const TablesPage = lazy(() => import('./pages/tables').then(m => ({ default: m.TablesPage })));
const FormsPage = lazy(() => import('./pages/forms').then(m => ({ default: m.FormsPage })));
const UsersPage = lazy(() => import('./pages/users').then(m => ({ default: m.UsersPage })));
const SettingsPage = lazy(() => import('./pages/settings').then(m => ({ default: m.SettingsPage })));
const LoginPage = lazy(() => import('./pages/login').then(m => ({ default: m.LoginPage })));
const SignupPage = lazy(() => import('./pages/signup').then(m => ({ default: m.SignupPage })));
const ColorShowcase = lazy(() => import('./examples/color-showcase'));

// Loading component
function PageLoader() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ColorThemeProvider>
        <BrowserRouter>
          <AuthProvider>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                {/* Auth Routes */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />

                {/* Color Showcase (demo route) */}
                <Route path="/showcase" element={<ColorShowcase />} />

                {/* Main Application Routes */}
                <Route path="/" element={<MainLayout><DashboardPage /></MainLayout>} />
                <Route path="/analytics" element={<MainLayout><AnalyticsPage /></MainLayout>} />
                <Route path="/tables" element={<MainLayout><TablesPage /></MainLayout>} />
                <Route path="/forms" element={<MainLayout><FormsPage /></MainLayout>} />
                <Route path="/users" element={<MainLayout><UsersPage /></MainLayout>} />
                <Route path="/settings" element={<MainLayout><SettingsPage /></MainLayout>} />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </ColorThemeProvider>
    </ThemeProvider>
  );
}

export default App;
