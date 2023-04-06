export interface CategoryType {
  id: string;
  name: string;
}

export interface MinorCategoryType extends CategoryType {
  parent: string;
}
