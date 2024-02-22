
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProductDetail from './ProductDetail';
import UserRegister from './UserRegister';
import UserLogin from './UserLogin';
import Category from './Category';
import Account from './Account';
import Cart from './ShoppingCart';
import Order from './Orders';
import PaymenGuide from './PaymentGuide';
import Guarantee from './Guarantee';
import InformationStore from './InformationStore';

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/product_detail' element={<ProductDetail/>}></Route>
                <Route path='/user_register' element={<UserRegister/>}></Route>
                <Route path='/user_login' element={<UserLogin/>}></Route>
                <Route path='/allproducts' element={<Category/>}></Route>
                <Route path='/account' element={<Account/>}></Route>
                <Route path='/shopping_cart' element={<Cart/>}></Route>
                <Route path='/orders' element={<Order/>}></Route>
                <Route path='/payment_guide' element={<PaymenGuide/>}></Route>
                <Route path='/guarantee' element={<Guarantee/>}></Route>
                <Route path='/information_store' element={<InformationStore/>}></Route>
            </Routes>
        </main>
    );
}
export default Main;