import { useTheme } from 'shared/theme';
import style from './style.module.scss';

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const handleSwitchTheme = () => {
    if (theme === 'dark') {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <div className={style.simpleToggler} onClick={handleSwitchTheme}>
      <div className={style.icon} />
      <div className={style.ball} />
    </div>
  );
};
