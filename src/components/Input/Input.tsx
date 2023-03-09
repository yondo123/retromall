import React from 'react';
import style from './styles/input.module.scss';

interface InputProps {
    variants?: 'full' | 'center';
    placeholder: string;
}
const Input = (props: InputProps) => {
    return (
        <div className={style.center}>
            <input type="text" placeholder={props.placeholder} className={style.search} />
        </div>
    );
};
export default Input;
