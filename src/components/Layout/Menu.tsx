import React from 'react';
import menuStyle from './styles/menu.module.scss';
import Playstation from '../Icons/Playstation';
import Xbox from '../Icons/Xbox';
import { constants } from '../../types';

const Menu = () => {
  return (
    <ul className={menuStyle.menu}>
      <li>
        <span className={menuStyle.title}>PlayStation</span>
        <div className={menuStyle.icon}>
          <Playstation color={constants.colors.accent} />
        </div>
      </li>
      <li>
        <span className={menuStyle.title}>Xbox</span>
        <div className={menuStyle.icon}>
          <Xbox color={constants.colors.accent} />
        </div>
      </li>
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>PlayStation</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Playstation color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>Xbox</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Xbox color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>PlayStation</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Playstation color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>Xbox</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Xbox color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>PlayStation</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Playstation color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>Xbox</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Xbox color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>PlayStation</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Playstation color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
      {/*<li>*/}
      {/*  <span className={menuStyle.title}>Xbox</span>*/}
      {/*  <div className={menuStyle.icon}>*/}
      {/*    <Xbox color={constants.colors.accent} />*/}
      {/*  </div>*/}
      {/*</li>*/}
    </ul>
  );
};

export default Menu;
