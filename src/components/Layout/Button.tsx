import React from 'react';
import style from './styles/button.module.scss';
import { ColorTokens } from '../../types';

interface ButtonProps {
  variants: 'fill' | 'outlined' | 'ghost';
  size: 'sm' | 'md' | 'lg' | 'xl';
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  color?: Extract<ColorTokens, 'primary' | 'accent' | 'secondary'>;
  disabled?: boolean;
}
const Button = (props: ButtonProps) => {
  const { variants = 'fill', size = 'md', children, disabled, color = 'primary' } = props;
  const buttonColorClass = variants !== 'ghost' ? `${variants}-${color}` : variants;

  return (
    <button disabled={disabled} className={`${style[buttonColorClass]} ${style[size]}`} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
