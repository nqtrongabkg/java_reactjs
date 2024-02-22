

import React, { useEffect, useState } from "react";
import Slider from '../pages/home/Slider';
import NewProduct from '../pages/home/NewProduct';
import AllProductsListCategories from '../pages/home/AllProductsListCategories';
import DiscountProduct from '../pages/home/DiscountProduct';
import RecommentProduct from '../pages/home/RecommetProduct';
import Region from '../pages/home/Region';
import { GET_ALL } from "../api/Service";


function Home() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
    GET_ALL(`categories`).then((item) => setCategories(item.data));
    }, [categories]);
    const filteredCategories = categories.filter(
    (category) => category.isHome === 1
    );
    return (
        <div className='container' >
            <Slider></Slider>
            <NewProduct></NewProduct>
            {filteredCategories.length > 0 &&
                filteredCategories.map((row) => (
                    <AllProductsListCategories key={row.id} categoryName={row.name} categoryId={row.id} categoryImg={row.thumbnail} categorySlug={row.slug}/>
            ))}
            <DiscountProduct></DiscountProduct>
            <RecommentProduct></RecommentProduct>
            <Region></Region>
        </div>
    );
}
export default Home;