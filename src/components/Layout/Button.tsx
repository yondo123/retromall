import React from 'react';
import style from './styles/button.module.scss';
import type { ColorTokens } from '../../types';

interface ButtonProps {
  variants: 'fill' | 'outlined' | 'ghost';
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  color?: Extract<ColorTokens, 'primary' | 'accent' | 'secondary'>;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
const Button = (props: ButtonProps) => {
  const { type = 'button', variants = 'fill', size = 'md', children, disabled, color = 'primary' } = props;
  const buttonColorClass = variants !== 'ghost' ? `${variants}-${color}` : variants;

  return (
    <button
      type={type}
      disabled={disabled}
      className={`${style[buttonColorClass]} ${style[size]}`}
      {...(props.onClick ? { onClick: props.onClick } : {})}
    >
      {children}
    </button>
  );
};

export default Button;
