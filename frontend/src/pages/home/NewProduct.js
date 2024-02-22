

import React, {useEffect, useState} from 'react' 
import { GET_ALL } from '../../api/Service';

const NewProduct = () => {
  const [products, setProducts] = useState({});
    useEffect (() => {
        GET_ALL (`products`).then(item=>setProducts (item.data))
    }, [])
    return(
        <section className="padding-bottom">
  <div className="card card-deal">
    <header className="section-heading heading-line">
    <h4 className="title-section text-uppercase">Sản phẩm mới</h4>
  </header>
    <div className='row'>
        <div className='col-md-12'>
                <div className="row no-gutters items-wrap">


                      {products.length > 0 &&
    products
        .filter(row => row.discount > 0)
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // Sắp xếp theo thời gian tạo mới nhất
        .slice(0, 5)
        .map(row => (
            <div className="col-md col-6" key={row.id}>
                <figure className="card-product-grid card-sm">
                    <a href={`/product_detail?productId=${row.id}`} className="img-wrap">
                        <img src={require(`../../assets/images/items/${row.category.slug}/${row.thumbnail}`)} alt="#t" />
                    </a>
                    <div className="text-wrap p-3">
                        <a href={`/product_detail?productId=${row.id}`} className="title text-truncate">
                            {row.title}
                        </a>
                        <span className="badge badge-danger"> {row.price} vnđ </span>
                        <div>
                            <a href={`/product_detail?productId=${row.id}`} className="btn btn-primary btn-sm">
                                Xem sản phẩm
                              </a>
                        </div>
                    </div>
                </figure>
            </div>
        ))}
    </div>
        </div>
    </div>
    
    
  </div>
</section>


    )
};
export default NewProduct;