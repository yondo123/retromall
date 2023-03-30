import React from 'react';
import style from './styles/textarea.module.scss';

interface TextareaProps {
  id?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
  defaultValue?: string;
}
const Textarea = (props: TextareaProps) => {
  const { disabled = false, placeholder = '', onChange = () => {}, defaultValue = '' } = props;
  return <textarea disabled={disabled} defaultValue={defaultValue} placeholder={placeholder} className={style.textarea} onChange={onChange} />;
};

export default Textarea;
