import { createContext } from 'react';

interface ThemeContextInterface {
  theme: string;
  setTheme: () => {};
}

export const ThemeContext = createContext({
  theme: 'light',
  setTheme: (newTheme: string) => {},
});
