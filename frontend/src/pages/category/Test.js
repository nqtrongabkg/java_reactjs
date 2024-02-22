import React, { useEffect, useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import axios from "axios";
import Header from "./Header";

function Test() {
    const productsPerPage = 6; // Number of products to display per page
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get("http://localhost:8080/api/products").then((response) => {
            setProducts(response.data);
        });
    }, []);

    // Calculate the index range for the current page
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;

    const displayedProducts = products.slice(startIndex, endIndex);

    return (
        <>
        <Header/>
            <div className="container">
                <div className="section-heading text-center">
                    <h2 className="hTitle">
                        <a href="/collections/dien-thoai">Điện thoại </a>
                    </h2>
                </div>
                {/* Display products for the current page */}
                <Row md={6} className="g-4 mt-1">
                    {displayedProducts.map((sv) => (
                        <Col key={sv.id}>
                            <Card>
                                <Card.Img
                                    variant="top"
                                    src={require(`../images/items/${sv.thumbnail}`)}
                                    style={{ height: "176px", width: "176px" }}
                                    alt="Product Image"
                                />
                                <Card.Body>
                                    <Card.Title>{sv.title}</Card.Title>
                                    <Card.Text>{sv.description}</Card.Text>
                                    <Card.Text>
                                        <b>Giá: </b>
                                        {sv.price} VND
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>

            {/* Pagination controls */}
            <div className="text-center">
                <nav aria-label="Page navigation">
                    <ul className="pagination">
                        {Array.from({ length: Math.ceil(products.length / productsPerPage) }).map((_, index) => (
                            <li
                                key={index}
                                className={`page-item ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                <button
                                    className="page-link"
                                    onClick={() => setCurrentPage(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            <div className="wraplist-button text-center visible-mobile">
                <a href="/collections/dien-thoai" className="button dark btn-collection">
                    Xem thêm sản phẩm <b> Điện thoại </b>
                </a>
            </div>
        </>
    );
}

export default Test;
