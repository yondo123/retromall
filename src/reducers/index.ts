import { combineReducers } from 'redux';
import categorySlice from './categories';

const rootReducer = combineReducers({
  category: categorySlice.reducer
});
export type RootStateType = ReturnType<typeof rootReducer>;
export default rootReducer;
