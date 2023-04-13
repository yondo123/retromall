import { combineReducers } from 'redux';
import categorySlice from './categories';
import modalSlice from './modal';

const rootReducer = combineReducers({
  category: categorySlice.reducer,
  modal: modalSlice.reducer
});
export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
