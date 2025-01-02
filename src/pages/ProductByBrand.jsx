import React, { useEffect } from 'react';
import LayoutBody from './../components/layouts/LayoutBody.jsx';
import ProductList from '../components/products/ProductList.jsx';
import ProductsStore from '../store/ProductsStore.js';
import { useParams } from 'react-router-dom';

const ProductByBrand = () => {
    const {ListByProductsBrandRequest} = ProductsStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await ListByProductsBrandRequest(id);
        })()
    },[id])
    return (
        <LayoutBody>
            <ProductList/>
        </LayoutBody>
    );
};

export default ProductByBrand;