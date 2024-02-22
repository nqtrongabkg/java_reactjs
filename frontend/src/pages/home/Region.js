

import React from 'react';

const Region = () => {
    return(
        <div>
            <section className="padding-bottom">
  <header className="section-heading heading-line">
    <h4 className="title-section text-uppercase">Bảo hành đa quốc gia</h4>
  </header>
  <ul className="row mt-4">
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/CN.png")} alt='#nt' /> <span>China</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/DE.png")} alt='#nt' /> <span>Germany</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/AU.png")} alt='#nt' /> <span>Australia</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/RU.png")} alt='#nt' /> <span>Russia</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/IN.png")} alt='#nt' /> <span>India</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/GB.png")} alt='#nt' /> <span>England</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/TR.png")} alt='#nt' /> <span>Turkey</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <img className="icon-flag-sm" src={require("../../assets/images/icons/flags/UZ.png")} alt='#nt' /> <span>Uzbekistan</span> </a></li>
    <li className="col-md col-6"><a href="#nt" className="icontext"> <i className="mr-3 fa fa-ellipsis-h" /> <span>More regions</span> </a></li>
  </ul>
</section>
<article className="my-4">
	<img src={require("../../assets/images/banners/ad-sm.png")} alt='#baner' className="w-100"/>
</article>
        </div>


    );
};
export default Region;