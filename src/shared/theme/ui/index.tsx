import { useEffect, useState } from 'react';
import { ThemeContext } from '../themeProvider';
import { Themes, supportedThemes } from '../model';

const StorageThemeKey = 'theme';

const Theme = (props: { children: React.ReactNode }) => {
  const getTheme = (): Themes => {
    let theme = localStorage.getItem(StorageThemeKey);

    if (!theme) {
      localStorage.setItem(StorageThemeKey, 'light');
      theme = 'light';
    }

    return theme as Themes;
  };
  const [theme, setTheme] = useState<Themes>(getTheme);

  useEffect(() => {
    localStorage.setItem(StorageThemeKey, theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        supportedThemes,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default Theme;
