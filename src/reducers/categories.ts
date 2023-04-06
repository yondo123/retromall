import { createSlice, createAction } from '@reduxjs/toolkit';
import { CategoryType, MinorCategoryType } from '../types';

interface InitialState {
  majorCategories: CategoryType[];
  minorCategories: MinorCategoryType[];
  selectedCategory: CategoryType | null;
}

export const initialState: InitialState = {
  majorCategories: [],
  minorCategories: [],
  selectedCategory: null
};

//Actions
export const addMajorCategories = createAction<CategoryType[]>('ADD_MAJOR_CATEGORIES');
export const addMinorCategories = createAction<MinorCategoryType[]>('ADD_MINOR_CATEGORIES');

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addMajorCategories, (state, action) => {
        state.majorCategories = action.payload;
      })
      .addCase(addMinorCategories, (state, action) => {
        state.minorCategories = action.payload;
      })
});

export default categorySlice;
