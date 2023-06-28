import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import categoriesSlice from "./categories/categoriesSlice";
import subcategoriesSlice from "./subcategories/subcategoriesSlice";
import productsSlice from "./products/productsSlice";
import manufacturerSlice from "./manufacturer/manufacturerSlice"


export const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    subcategories: subcategoriesSlice,
    products: productsSlice,
    manufacturer: manufacturerSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getMiddleware) => getMiddleware().concat(apiSlice.middleware),
  devTools: true,
});