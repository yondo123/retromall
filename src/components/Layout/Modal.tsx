import React from 'react';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import style from './styles/modal.module.scss';
import Button from './Button';

const Modal = () => {
  useBodyScrollLock();
  return (
    <section className={style['modal-wrap']}>
      <div className={style['modal-content']}>
        <h2>title</h2>
        <div className="mt-8">
          <div className={style['modal-message']}>
            <p>메시지</p>
          </div>
          <div className={`${style['modal-button-wrap']} mt-8`}>
            <Button variants="fill" size="md">
              ok
            </Button>
            <Button variants="fill" size="md">
              cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
