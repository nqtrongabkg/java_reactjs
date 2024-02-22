import React, { useEffect, useState } from 'react';
import { GET_ALL } from '../../api/Service';

const AllProductsListCategories = (category) => {
  const { categoryName, categoryId, categoryImg, categorySlug } = category;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    GET_ALL(`products/getlatest?categoryid=${categoryId}`).then((item) =>
      setProducts(item.data)
    );
  }, [categoryId]);

  return (
    <section className="padding-bottom">
      <div>
        <header className="section-heading heading-line">
          <h4 className="title-section text-uppercase">{categoryName}</h4>
        </header>
        <div className="card card-home-category">
          <div className="row no-gutters">
            <div className="col-md-3">
              <div className="home-category-banner bg-light-orange">
                <h5 className="title">Dòng sản phẩm {categoryName} chính hãng đến từ Asus</h5>
                <p>Với sự khắc khe trong từng chi tiết, Asus luôn mang đến cho khách hàng những sản phẩm hoàn hảo nhất</p>
                <a href="#nt" className="btn btn-outline-primary rounded-pill">Xem thêm</a>
                <img src={require(`../../assets/images/items/category_img/${categoryImg}`)} alt="#n" className="img-bg" />
              </div>
            </div>
            <div className="col-md-9">
              <ul className="row no-gutters bordered-cols">
                {products.length > 0 &&
                  products.map((product) => (
                    <li key={product.id} className="col-6 col-lg-3 col-md-4">
                      <a href={`/product_detail?productId=${product.id}`} className="item">
                        <div className="card-body">
                          <h6 className="title">{product.title}</h6>
                          <img
                            className="img-sm float-right"
                            src={require(`../../assets/images/items/${categorySlug}/${product.thumbnail}`)}
                            alt="Hình ảnh"
                          />
                          <p className="text-muted price">{product.price} vnđ</p>
                          <a href={`/product_detail?productId=${product.id}`} className="btn btn-primary btn-sm">
                            Xem sản phẩm
                          </a>
                        </div>
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllProductsListCategories;
