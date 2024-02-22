

import React, {useEffect, useState} from 'react' 
import { GET_ALL } from '../../api/Service';

const PCProduct = () => {
  const [products, setProducts] = useState({});
    useEffect (() => {
        GET_ALL (`products`).then(item=>setProducts (item.data))
    }, [])
    return(
        <section className="padding-bottom">
  <header className="section-heading heading-line">
    <h4 className="title-section text-uppercase">PC gaming - PC đồ họa - PC doanh nghiệp</h4>
  </header>
  <div className="card card-home-category">
    <div className="row no-gutters">
      <div className="col-md-3">
        <div className="home-category-banner bg-light-orange">
          <h5 className="title">Dòng sản phẩm PC chính hãng của Asus</h5>
          <p>Quá trình phát triển sản phẩm được nghiên cứu để phù hợp với từng nhóm khách hàng và nhu cầu sử dụng.</p>
          <a href="#nt" className="btn btn-outline-primary rounded-pill">Xem thêm</a>
          <img src={require("../../assets/images/items/pc/pc2.jpg")} alt='#t' className="img-bg" />
        </div>
      </div> {/* col.// */}
      <div className="col-md-9">
        <ul className="row no-gutters bordered-cols">
          {products.length > 0 &&
              products
              .filter((row) => row.category.name === 'PC')
              .slice(0, 8)
              .map((row) => (
                  row.category.name === 'PC' && (
                      <li className="col-6 col-lg-3 col-md-4">
                          <a href={`/product_detail/${row.id}`} className="item">
                              <div className="card-body">
                                  <h6 className="title">{row.title}</h6>
                                  <img
                                      className="img-sm float-right"
                                      src={require(`../../assets/images/items/pc/${row.thumbnail}`)}
                                      alt="#n"
                                  />
                                  <p className="text-muted price">{row.price} vnđ</p>
                                  <a href={`/product_detail/${row.id}`} className="btn btn-primary btn-sm">
                                      Xem sản phẩm
                                  </a>
                              </div>
                          </a>
                      </li>
                  )
            ))}
        </ul>
      </div> {/* col.// */}
    </div> {/* row.// */}
  </div> {/* card.// */}
</section>

    );
};
export default PCProduct;