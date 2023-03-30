import React from 'react';
import style from './styles/input.module.scss';

interface InputProps {
  variants?: 'full' | 'center';
  placeholder: string;
  type?: 'text' | 'number' | 'tel';
  id?: string;
  onInput?: React.KeyboardEventHandler<HTMLInputElement>;
}
const Input = (props: InputProps) => {
  const { type = 'text', placeholder, variants = 'full', onInput } = props;
  return (
    <div className={style.center}>
      <input type={type} placeholder={placeholder} className={style.search} onInput={onInput} />
    </div>
  );
};
export default Input;
