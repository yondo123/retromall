import React from 'react';
import { useSelector } from 'react-redux';
import useBodyScrollLock from '../../hooks/useBodyScrollLock';
import style from './styles/modal.module.scss';
import Button from './Button';
import type { RootStateType } from '../../reducers';

const Modal = () => {
  const { open, content } = useSelector((state: RootStateType) => state.modal);
  const { title, message, cancelMessage, confirmMessage, handleSuccess, handleCancel } = content;
  useBodyScrollLock(open);

  if (!open) {
    return null;
  }

  return (
    <section className={style['modal-wrap']}>
      <div className={style['modal-content']}>
        <h2>{title}</h2>
        <div className="mt-8">
          <div className={style['modal-message']}>
            <p>{message}</p>
          </div>
          <div className={`${style['modal-button-wrap']} mt-8`}>
            <Button variants="fill" size="md" onClick={handleCancel}>
              {cancelMessage}
            </Button>
            <Button variants="fill" size="md" color="accent" onClick={handleSuccess}>
              {confirmMessage}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Modal;
