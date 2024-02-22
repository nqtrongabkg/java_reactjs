
import React from 'react';


function Header() {


        return(
                        <header className="section-header">
            <section className="header-main border-bottom">
                <div className="container ">
                <div className="row align-items-center ">
                    <div className="col-xl-2 col-lg-3 col-md-12">
                    <a href="/" className="brand-wrap">
                        <img className="logo" src={require("../assets/images/logo.png")} alt='#logo' />
                    </a> {/* brand-wrap.// */}
                    </div>
                    <div className="col-xl-6 col-lg-5 col-md-6">
                    <form action="#" className="search-header">
                        <div className="input-group w-100">
                        
                        <input type="text" className="form-control" placeholder="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-primary" type="submit">
                            <i className="fa fa-search" /> Search
                            </button>
                        </div>
                        </div>
                    </form> {/* search-wrap .end// */}
                    </div> {/* col.// */}
                    <div className="col-xl-4 col-lg-4 col-md-6">
                    <div className="widgets-wrap float-md-right">
                        <div className="widget-header mr-3">
                        <a href="/account" className="widget-view">
                            <div className="icon-area">
                            <i className="fa fa-user" />
                            {/* <span className="notify">3</span> */}
                            </div>
                            <small className="text"> User </small>
                        </a>
                        </div>
                        
                        <div className="widget-header mr-3">
                        <a href="/orders" className="widget-view">
                            <div className="icon-area">
                            <i className="fa fa-store" />
                            </div>
                            <small className="text"> Orders </small>
                        </a>
                        </div>
                        <div className="widget-header">
                        <a href="/shopping_cart" className="widget-view">
                            <div className="icon-area">
                            <i className="fa fa-shopping-cart" />
                            </div>
                            <small className="text"> Cart </small>
                        </a>
                        </div>
                    </div> {/* widgets-wrap.// */}
                    </div> {/* col.// */}
                </div> {/* row.// */}
                </div> {/* container.// */}
            </section> {/* header-main .// */}
            <nav className="navbar navbar-main navbar-expand-lg border-bottom">
                <div className="container">
                
                <div className="collapse navbar-collapse container" id="main_nav">
                    <ul className="navbar-nav ">
                        <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="/"><i className="fab fa-font-awesome border border-dark  rounded p-1" />&nbsp;HOME</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="#facebook"><i className="fab fa-facebook-f border border-dark  rounded p-1" />&nbsp;Facebook</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="#instagram"><i className="fab fa-instagram border border-dark  rounded p-1" />&nbsp;Instagram</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="#youtube"><i className="fab fa-youtube border border-dark  rounded p-1" />&nbsp;Youtube</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="/payment_guide"><i className="fa fa-credit-card border border-dark  rounded p-1" />&nbsp;Hướng dẫn thanh toán</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="/guarantee"><i className="fa fa-star border border-dark  rounded p-1" />&nbsp;Chính sách bảo hành</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link bg-primary border-right" href="/information_store"><i className="fa fa-store border border-dark  rounded p-1" />&nbsp;Thông tin cửa hàng</a>
                    </li>
                    </ul>
                </div> {/* collapse .// */}
                </div> {/* container .// */}
            </nav>
            
            
            </header>


        );
    
}
export default Header;