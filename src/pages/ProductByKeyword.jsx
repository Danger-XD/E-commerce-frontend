import React, { useEffect } from 'react';
import LayoutBody from './../components/layouts/LayoutBody.jsx';
import ProductList from '../components/products/ProductList.jsx';
import ProductsStore from '../store/ProductsStore.js';
import { useParams } from 'react-router-dom';

const ProductByKeyword = () => {
    const {ListByProductsKeywordRequest} = ProductsStore();
    const {keyword} = useParams();
    useEffect(()=>{
        (async()=>{
            await ListByProductsKeywordRequest(keyword);
        })()
    },[keyword])
    return (
        <LayoutBody>
            <ProductList/>
        </LayoutBody>
    );
};

export default ProductByKeyword;