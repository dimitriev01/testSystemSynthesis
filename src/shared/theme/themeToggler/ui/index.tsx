import { ThemeContext } from 'shared/theme/themeProvider';
import style from './style.module.scss';
import { useContext } from 'react';

export const ThemeToggler = () => {
  const context = useContext(ThemeContext);

  const handleSwitchTheme = () => {
    if (context) {
      if (context.theme === 'dark') {
        context.setTheme('light');
      } else {
        context.setTheme('dark');
      }
    }
  };

  return (
    <div className={style.simpleToggler} onClick={handleSwitchTheme}>
      <div className={style.icon} />
      <div className={style.ball} />
    </div>
  );
};
