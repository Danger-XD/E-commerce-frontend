import React, { useEffect } from "react";
import LayoutBody from "../components/layouts/LayoutBody.jsx";
import Details from "../components/products/Details.jsx";
import Brands from "../components/products/Brands.jsx";
import ProductsStore from "../store/ProductsStore.js";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const {
    BrandsList,
    BrandsListRequest,
    ProductsDetailsRequest,
    ProductsReviewRequest,
  } = ProductsStore();
  const { id } = useParams();
  useEffect(() => {
    (async () => {
        await ProductsDetailsRequest(id);
        await ProductsReviewRequest(id);
        BrandsList===null?await BrandsListRequest():null;
    })();
  }, []);
  return (
    <LayoutBody>
      <Details />
      <Brands />
    </LayoutBody>
  );
};

export default ProductDetails;
