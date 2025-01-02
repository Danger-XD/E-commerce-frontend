import React, { useEffect } from 'react';
import LayoutBody from './../components/layouts/LayoutBody.jsx';
import ProductList from '../components/products/ProductList.jsx';
import ProductsStore from '../store/ProductsStore.js';
import { useParams } from 'react-router-dom';

const ProductByCategory = () => {
    const {ListByProductsCategoryRequest} = ProductsStore();
    const {id} = useParams();
    useEffect(()=>{
        (async()=>{
            await ListByProductsCategoryRequest(id);
        })()
    },[id])
    return (
        <LayoutBody>
            <ProductList/>
        </LayoutBody>
    );
};

export default ProductByCategory;