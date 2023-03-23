import React from 'react';
import { constants } from '../../types/constants';
import { PacmanLoader } from 'react-spinners';
import style from './styles/spinner.module.scss';

interface SpinnerProps {
  color?: `#${string}`;
  message: string;
}

const Spinner = (props: SpinnerProps) => {
  const { color = constants.colors.primary, message } = props;
  return (
    <div className={style.spinnerWrap}>
      <p>{message}</p>
      <PacmanLoader color={color} />
    </div>
  );
};

export default Spinner;
