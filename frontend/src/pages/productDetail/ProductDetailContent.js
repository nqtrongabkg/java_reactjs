import React, { useEffect, useState } from 'react';
import { GET_ID } from '../../api/Service';
import { useLocation } from 'react-router-dom';

const ProductDetailContent = () => {
  const [product, setProduct] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");

  useEffect(() => {
    GET_ID(`products`, productId).then((item) => setProduct(item.data));
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section-content bg-white padding-y">
      {/* ... */}
      <aside className="col-md-12">
        <div className="card">
          <article className="gallery-wrap">
            <div className='row'>
              <div className='col-md-7'>
                <div className="img-big-wrap">
                  <div>
                    <a href="#nt">
                      <img
                        src={require(`../../assets/images/items/${product.category.slug}/${product.thumbnail}`)}
                        alt={product.title}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <h4>Chi tiết sản phẩm:</h4>

                <article className="product-info-aside">
                  <h2 className="title mt-3">{product.title}</h2>
                  <p>{product.description}</p>
                  <div className="mb-3">
                    <var className="price h4">Giá: </var>
                    <span className="text-muted"> {product.price} vnđ</span>
                  </div>
                  <a href="#themvaogio" className="btn btn-primary btn-sm">
                    Thêm vào giỏ hàng
                  </a>
                  {/* ... */}
                </article>
              </div>

            </div>
          </article>
        </div>
      </aside>
      <main className="col-md-6">

      </main>
      {/* ... */}
    </section>
  );
};

export default ProductDetailContent;
