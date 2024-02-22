import React, { useEffect, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { GET_PAGE, GET_ID } from "../../api/Service";

const CategoryContent = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const numItems = 8;
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const currentPage = parseInt(queryParams.get("page")) || 1;
  let categoryId = queryParams.get("categoryId");

  const handlePageChange = (page) => {
    // Navigate to a new URL with the updated page parameter
    navigate(`/ListingGrid?page=${page}&categoryId=${categoryId}`);
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
            to={`?page=${i}&categoryId=${categoryId}`}
            onClick={(event) => handlePageChange(i, event)}
          >
            {i}
          </Link>
        </li>
      );
    }
    return pageNumbers;
  };
  console.log(products);

  useEffect(() => {
    if (categoryId === "null") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      categoryId = null;
    }
    GET_PAGE(`products`, currentPage - 1, numItems, categoryId).then(
      (response) => {
        setProducts(response.data);
        const contentRangeHeader = response.headers["content-range"];
        const [, totalItems] = contentRangeHeader.match(/\/(\d+)/);
        const calculatedTotalPages = Math.ceil(totalItems / numItems);
        setTotalPages(calculatedTotalPages);
      }
    );
    if (categoryId !== null) {
      GET_ID(`categories`, categoryId).then((item) => setCategories(item.data));
    } else {
      setCategories({ name: "Tất cả sản phẩm" });
    }
  }, [categoryId, currentPage]);


  return (
    <section className="section-content padding-y">
      <div className="container">
        <div className="row">
          <div className="col-md-2"> Bạn đang ở đây:</div>
          <nav className="col-md-8">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>Trang chủ</a>
              </li>
              <li className="breadcrumb-item">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>{categories.name}</a>
              </li>
            </ol>
          </nav>
          {/*<!-- col.// -->*/}
        </div>
        {/*<!-- row.// -->*/}
        <header className="section-heading heading-line container">
          <h4 className="title-section text-uppercase">Tất cả sản phẩm: {categories.name}</h4>
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
              <li className={`page-item ${currentPage === totalPages ? "disabled" : ""
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
export default CategoryContent;
