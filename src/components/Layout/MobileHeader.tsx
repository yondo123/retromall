import React from 'react';
import style from './styles/header.module.scss';
import ChevronLeft from '../Icons/ChevronLeft';
import Button from './Button';
import { constants } from '../../types/constants';
import { useRouterHandler } from '../../hooks/useRouterHandler';

interface HeaderProps {
  title: string;
}

const MobileHaeder = (props: HeaderProps) => {
  const { handleBackButton } = useRouterHandler();
  const { colors } = constants;

  return (
    <header className={style['header-wrapper']}>
      <h1 className={'visually-hidden'}>Header</h1>
      <div className={style.header}>
        <Button variants={'ghost'} size={'md'} onClick={handleBackButton}>
          <ChevronLeft width={32} height={32} color={colors.font} />
        </Button>
        <h2 className={style['header-title']}>{props.title}</h2>
      </div>
    </header>
  );
};

export default MobileHaeder;
