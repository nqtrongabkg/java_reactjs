

import React from 'react';
import Text from '../pages/cart/Text';
import Cart from '../pages/cart/ShoppingCart';
import Head from '../pages/account/Head'
function ShoppingCart(props) {

    return (
        <div className='container'>   
            <Head/>  
            <Cart/>
            <Text/>
        </div>
    );
}
export default ShoppingCart;