import { createSlice, createAction } from '@reduxjs/toolkit';
import type { Modal } from '../types';

interface ModalState {
  open: boolean;
  content: Modal;
}

export const initialState: ModalState = {
  open: false,
  content: {
    title: '',
    message: '',
    confirmMessage: '확인',
    cancelMessage: '취소'
  }
};

export const openModal = createAction<Modal>('OPEN_MODAL');
export const closeModal = createAction('CLOSE_MODAL');

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(openModal, (state, action) => {
        state.open = true;
        state.content = Object.assign({}, state.content, action.payload);
      })
      .addCase(closeModal, (state) => {
        state.open = false;
      })
});

export default modalSlice;
