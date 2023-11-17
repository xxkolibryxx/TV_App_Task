import React from 'react';
import clsx from 'clsx';
import style from './style.module.css';
import { BUTTON_VARIANTS } from './constants';
export const Button = ({ title, variant = 'white', icon = '', onClick }) => {
  return (
    <button className={clsx([style.btn, style[BUTTON_VARIANTS[variant]]])} onClick={onClick}>
      {icon ? <img src={icon} alt={`icon-${icon}`} /> : null}
      {title}
    </button>
  );
};
