import React, { useEffect } from "react";
import LayoutBody from "./../components/layouts/LayoutBody.jsx";
import WishList from "../components/wishlist/WishList.jsx";
import Brands from "../components/products/Brands.jsx";
import ProductsStore from "../store/ProductsStore.js";
import WishStore from "../store/WishlistStore.js";

const WishPage = () => {
    const {BrandsListRequest}=ProductsStore();
    const {WishListRequest}=WishStore();
    useEffect(()=>{
        (async()=>{
            await BrandsListRequest();
            await WishListRequest();
        })();
    }, []);
  return (
    <LayoutBody>
      <WishList />
      <Brands />
    </LayoutBody>
  );
};

export default WishPage;
