import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './components/theme-provider';
import { MainLayout } from './components/layout/main-layout';
import { DashboardPage } from './pages/dashboard';
import { AnalyticsPage } from './pages/analytics';
import { TablesPage } from './pages/tables';
import { FormsPage } from './pages/forms';
import { UsersPage } from './pages/users';
import { SettingsPage } from './pages/settings';
import ColorShowcase from './examples/color-showcase';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <BrowserRouter>
        <Routes>
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
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
