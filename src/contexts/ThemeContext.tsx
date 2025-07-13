
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    // Always force light mode - remove dark mode functionality
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add('light');
    localStorage.setItem('theme', 'light');
  }, []);

  // Disabled toggle function - always stays light
  const toggleTheme = () => {
    // Theme toggle disabled - always light mode
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
