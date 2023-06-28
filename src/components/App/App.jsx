import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import AppRoutes from "../Routes/Routes";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import { getCategories } from "../../features/categories/categoriesSlice";
import { getProducts } from "../../features/products/productsSlice";
import {getSubcategories} from "../../features/subcategories/subcategoriesSlice"
import { getManufacturer } from "../../features/manufacturer/manufacturerSlice";


const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getManufacturer());
    dispatch(getCategories());
    dispatch(getSubcategories());
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;