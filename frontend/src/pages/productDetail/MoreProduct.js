

import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/Service";

const MoreProduct = () => {
  const [product, setProduct] = useState();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const productId = queryParams.get("productId");
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState({ name: "Loading..." }); // Default loading state
  const [totalPages, setTotalPages] = useState(1);
  const numItems = 8;
  const navigate = useNavigate();
  const currentPage = parseInt(queryParams.get("page")) || 1;

  useEffect(() => {
    GET_ID(`products`, productId).then((item) => setProduct(item.data));
  }, [productId]);

  useEffect(() => {
    const fetchCategoryAndProducts = async () => {
      let categoryId = null; // Default value
      if (product && product.category) {
        categoryId = product.category.id;
      }

      if (categoryId === "null") {
        categoryId = null;
      }

      if (categoryId !== null) {
        const categoryResponse = await GET_ID(`categories`, categoryId);
        setCategories(categoryResponse.data);
      } else {
        setCategories({ name: "Tất cả sản phẩm" });
      }

      const productsResponse = await GET_PAGE(
        "products",
        currentPage - 1,
        numItems,
        categoryId
      );

      setProducts(productsResponse.data);

      const contentRangeHeader = productsResponse.headers["content-range"];
      const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
      const calculatedTotalPages = Math.ceil(totalItems / numItems);
      setTotalPages(calculatedTotalPages);
    };

    fetchCategoryAndProducts();
  }, [product, currentPage]);

  const handlePageChange = (page) => {
    navigate(`/ListingGrid?page=${page}&categoryId=${product.category.id}`);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li
          key={i}
          className={`page-item ${currentPage === i ? "active" : ""}`}
        >
          <Link
            className="page-link"
            to={`?page=${i}&categoryId=${product.category.id}`}
            onClick={(event) => handlePageChange(i, event)}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };

  if (!product || !categories) {
    return <div>Loading...</div>; // Render a loading indicator
  }

  return (
    <section className="section-content padding-y">
      <div className="container">
        <header className="section-heading heading-line container">
        <h4 className="title-section text-uppercase">Sản phẩm tương tự: {product.name}</h4>
      </header>
        <nav className="row">
          {products.length > 0 &&
            products.map((row) => (
              <div className="col-md-3" key={row.id}>
                <div className="card card-category">
                  <div className="img-wrap" style={{ background: '#ffd7d7' }}>
                    <img src={require(`../../assets/images/items/${row.category.slug}/${row.thumbnail}`)} alt={row.title} />
                    
                  </div>
                  <div className="card-body text-center">
                    <h6 className="title">{row.title}</h6>
                    <p className="text-muted price">{row.price} vnđ</p>
                    <a href="#nt" className="btn btn-primary btn-sm">
                      Xem sản phẩm
                    </a>
                    <br />
                    <br />
                    <a href="#nt" className="btn btn-primary btn-sm">
                      Thêm vào giỏ
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </nav>
        <nav className='row'>
          <nav className='mb-4' aria-label='Page navigation sample'>
            <ul className='pagination'>
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <a className='page-link' href='#nt' onClick={handlePrevious}>Previous</a>
              </li>
              {renderPageNumbers()}
              <li className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}>
                <a className='page-link' href='#nt' onClick={handleNext}>Next</a>
              </li>
            </ul>
          </nav>
        </nav>
      </div> {/* container .//  */}
    </section>


    )
};
export default MoreProduct;