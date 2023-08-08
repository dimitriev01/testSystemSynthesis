import React from 'react';
import clsx from 'clsx';
import style from './style.module.scss';
import globalStyle from '../../../app/style.module.scss';
import { ThemeToggler } from 'shared/theme/themeToggler';

const Header = () => {
  return (
    <div className={style.header}>
      <div className={clsx(globalStyle.container, style.headerContainer)}>
        <h1 className={style.headerTitle}>Market</h1>
        <ThemeToggler />
      </div>
    </div>
  );
};

export default Header;
