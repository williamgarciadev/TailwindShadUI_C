import { ThemeProvider } from './components/theme-provider';
import ColorShowcase from './examples/color-showcase';

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ColorShowcase />
    </ThemeProvider>
  );
}

export default App;
