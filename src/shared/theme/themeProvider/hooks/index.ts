import { createContext, useContext } from 'react';
import { Themes } from 'shared/theme/model';

export interface IThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  supportedThemes: { [key: string]: string };
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'You can use "useTheme" hook only within a <ThemeProvider> component.'
    );
  }

  return context;
};
