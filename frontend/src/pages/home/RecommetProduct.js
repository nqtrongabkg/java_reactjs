

import React, {useEffect, useState} from 'react' 
import { GET_ALL } from '../../api/Service';

const RecommentProduct = () => {
  const [products, setProducts] = useState({});
    useEffect (() => {
        GET_ALL (`products/lowest-price`).then(item=>setProducts (item.data))
    }, [])
    return(
        <section className="padding-bottom-sm">
  <header className="section-heading heading-line">
    <h4 className="title-section text-uppercase">Gợi ý sản phẩm</h4>
  </header>
  <div className="row row-sm">
    
    {products.length > 0 && 
  products
    .sort((a, b) => a.price - b.price) // Sắp xếp theo giá tăng dần
    .slice(0, 12) // Chọn 12 sản phẩm đầu tiên sau khi đã lọc và sắp xếp
    .map((row) => (
      <div className="col-xl-2 col-lg-3 col-md-4 col-6">
      <div className="card card-sm card-product-grid text-center">
        <a href={`/product_detail?productId=${row.id}`} className="img-wrap"> <img src={require(`../../assets/images/items/${row.category.slug}/${row.thumbnail}`)} alt='#nt' /> </a>
        <figcaption className="info-wrap">
          <a href={`/product_detail?productId=${row.id}`} className="title text-truncate">{row.title}</a>
          <div className="price mt-1 text-monospace">{row.price} vnđ</div> {/* price-wrap.// */}
        </figcaption>
        <div>
                            <a href={`/product_detail?productId=${row.id}`} className="btn btn-primary btn-sm">
                                Xem sản phẩm
                              </a>
                        </div>
      </div>
    </div>
    ))}

  </div> {/* row.// */}
</section>

    );
};
export default RecommentProduct;