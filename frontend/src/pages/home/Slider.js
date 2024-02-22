import React, { useState,useEffect  } from 'react';
import { GET_ALL } from '../../api/Service';
const Slider = () => {
    const [categories, setCategories] = useState([]);
    useEffect (() => {  
        GET_ALL (`categories`).then(item=>setCategories (item.data))
    }, [])

    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        require('../../assets/images/banners/slide-lg-1.jpg'),
        require('../../assets/images/banners/slide-lg-2.jpg'),
        require('../../assets/images/banners/slide-lg-3.jpg'),
    ];

    const handlePrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
        }, 3000); // Change the time (in milliseconds) here for the interval between slides
    
        return () => {
          clearInterval(interval);
        };
    }, [images.length]);

        return (
            <section className="section-main padding-y">
                <main className="card">
                    <div className="card-body">
                        <div className="row">
                            <aside className="col-lg col-md-3 flex-lg-grow-0">
                                <nav className="nav-home-aside">
                                    <h6 className="title-category" >MARKETS <i className="d-md-none icon fa fa-chevron-down"></i></h6>
                                    
                                    <ul className="menu-category">
                                        <li><a href='/allproducts'>Tất cả sản phẩm</a></li>
                                        {categories.map(category => (category.isHome === 1 &&(
                                            <li key={category.id}><a href={`/allproducts?categoryId=${category.id}`}>{category.name}</a></li>
                                        )))}
                                    </ul>
                                </nav>
                            </aside>
                            <div className="col-md-9 col-xl-7 col-lg-7">

                                {/* ================== COMPONENT SLIDER  BOOTSTRAP  ==================  */}                                                                                       
                                                        {/* Slider */}
                                                        <div id="carousel1_indicator" className="slider-home-banner carousel slide" data-ride="carousel">
                                                            <ol className="carousel-indicators">
                                                                {images.map((_, index) => (
                                                                    <li
                                                                        key={index}
                                                                        data-target="#ntcarousel1_indicator"
                                                                        data-slide-to={index}
                                                                        className={currentIndex === index ? 'active' : ''}
                                                                    ></li>
                                                                ))}
                                                            </ol>
                                                            <div className="carousel-inner">
                                                                {images.map((image, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className={`carousel-item${currentIndex === index ? ' active' : ''}`}
                                                                    >
                                                                        <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
                                                                    </div>
                                                                ))}
                                                            </div>
                                                            <a className="carousel-control-prev" href="#ntcarousel1_indicator" role="button" data-slide="prev" onClick={handlePrevSlide}>
                                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Previous</span>
                                                            </a>
                                                            <a className="carousel-control-next" href="#ntcarousel1_indicator" role="button" data-slide="next" onClick={handleNextSlide}>
                                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                                <span className="sr-only">Next</span>
                                                            </a>
                                                        </div>
                                                    </div>                                                                                                                                                                                                                                             
                           <div className="col-md d-none d-lg-block flex-grow-1">
                                <aside className="special-home-right">
                                    <h6 className="bg-primary text-center text-white mb-0 p-2">Sản phẩm phổ biến</h6>

                                    {categories
  .filter(category => category.isHome === 1 && category.isPopular === 1)
  .slice(0, 3)
  .map(category => (
    <div className="card-banner border-bottom" key={category.id}>
      <div className="py-3" style={{ width: '80%' }}>
        <h6 className="card-title">{category.name}</h6>
        <a href={`/allproducts?categoryId=${category.id}`} className="btn btn-primary btn-sm"> Xem sản phẩm </a>
      </div>
      <img
        src={require(`../../assets/images/items/category_img/${category.thumbnail}`)}
        alt=""
        style={{
          width: '80px',
          height: '80px'
        }}
      />
    </div>
  ))}
  
                                </aside>
                            </div>
                        </div>

                    </div>
                </main>

            </section>
        );
    };

    export default Slider;
