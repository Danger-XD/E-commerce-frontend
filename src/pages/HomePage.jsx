import React, { useEffect } from "react";
import LayoutBody from "../components/layouts/LayoutBody.jsx";
import ProductsStore from "../store/ProductsStore.js";
import FeaturesStore from "../store/FeaturesStore.js";
import Sliders from "./../components/products/Sliders.jsx";
import Features from "./../components/features/Features.jsx";
import Categories from "./../components/products/Categories.jsx";
import Products from "./../components/products/Products.jsx";
import Brands from "./../components/products/Brands.jsx";

const HomePage = () => {
  const {
    BrandsListRequest,
    CategoriesListRequest,
    SlidersListRequest,
    ListByProductsRemarkRequest,
  } = ProductsStore();
  const { FeaturesListRequest } = FeaturesStore();
  useEffect(() => {
    (async () => {
      await BrandsListRequest();
      await CategoriesListRequest();
      await SlidersListRequest();
      await ListByProductsRemarkRequest("new");
      await FeaturesListRequest();
    })();
  }, []);

  return (
    <LayoutBody>
      <Sliders />
      <Features />
      <Categories />
      <Products />
      <Brands />
    </LayoutBody>
  );
};

export default HomePage;
