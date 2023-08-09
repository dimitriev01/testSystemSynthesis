import { createContext } from 'react';
import { Themes } from 'shared/theme/model';

export interface IThemeContext {
  theme: Themes;
  setTheme: (theme: Themes) => void;
  supportedThemes: { [key: string]: string };
}

export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

