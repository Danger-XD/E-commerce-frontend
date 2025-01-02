import React, { useEffect } from 'react';
import LayoutBody from './../components/layouts/LayoutBody.jsx';
import CartList from '../components/carts/CartList';
import Brands from '../components/products/Brands.jsx';
import ProductsStore from '../store/ProductsStore.js';
import CartStore from '../store/CartsStore.js';

const CartPage = () => {
    const {BrandsListRequest}=ProductsStore();
    const {CartListRequest}=CartStore();
    useEffect(()=>{
        (async()=>{
            await BrandsListRequest();
            await CartListRequest();
        })();
    }, []);
    return (
        <LayoutBody>
            <CartList/>
            <Brands/>
        </LayoutBody>
    );
};

export default CartPage;