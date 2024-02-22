

import React from 'react';
import ProductDetailContent from '../pages/productDetail/ProductDetailContent';
import MoreProduct from '../pages/productDetail/MoreProduct';


function ProductDetail(props) {

    return (
        <div className='container'>
            <ProductDetailContent/>
            <MoreProduct/>
        </div>
    );
}
export default ProductDetail;