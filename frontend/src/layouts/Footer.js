
import React, {Component} from 'react';
// import {Link} from 'react-router-dom';

class Footer extends Component {
    // constructor(props){
    //     super(props)
    // }
    render(){
        return(
                        <footer className="section-footer bg-secondary">
            <div className="container">
                <section className="footer-top padding-y-lg text-white">
                <div className="row">
                    <aside className="col-md col-6">
                    <h6 className="title">Brands</h6>
                    <ul className="list-unstyled">
                        <li> <a href="#a">Adidas</a></li>
                        <li> <a href="#df">Puma</a></li>
                        <li> <a href="#f">Reebok</a></li>
                        <li> <a href="#2">Nike</a></li>
                    </ul>
                    </aside>
                    <aside className="col-md col-6">
                    <h6 className="title">Company</h6>
                    <ul className="list-unstyled">
                        <li> <a href="f#">About us</a></li>
                        <li> <a href="#fh">Career</a></li>
                        <li> <a href="#h">Find a store</a></li>
                        <li> <a href="y#">Rules and terms</a></li>
                        <li> <a href="#j">Sitemap</a></li>
                    </ul>
                    </aside>
                    <aside className="col-md col-6">
                    <h6 className="title">Help</h6>
                    <ul className="list-unstyled">
                        <li> <a href="#r">Contact us</a></li>
                        <li> <a href="#r">Money refund</a></li>
                        <li> <a href="#nt">Order status</a></li>
                        <li> <a href="#nt">Shipping info</a></li>
                        <li> <a href="#nt">Open dispute</a></li>
                    </ul>
                    </aside>
                    <aside className="col-md col-6">
                    <h6 className="title">Account</h6>
                    <ul className="list-unstyled">
                        <li> <a href="#nt"> User Login </a></li>
                        <li> <a href="#nt"> User register </a></li>
                        <li> <a href="#nt"> Account Setting </a></li>
                        <li> <a href="#nt"> My Orders </a></li>
                    </ul>
                    </aside>
                    <aside className="col-md">
                    <h6 className="title">Social</h6>
                    <ul className="list-unstyled">
                        <li><a href="#nt"> <i className="fab fa-facebook" /> Facebook </a></li>
                        <li><a href="#nt"> <i className="fab fa-twitter" /> Twitter </a></li>
                        <li><a href="#nt"> <i className="fab fa-instagram" /> Instagram </a></li>
                        <li><a href="#nt"> <i className="fab fa-youtube" /> Youtube </a></li>
                    </ul>
                    </aside>
                </div> {/* row.// */}
                </section>	{/* footer-top.// */}
                <section className="footer-bottom text-center">
                <p className="text-white">Privacy Policy - Terms of Use - User Information Legal Enquiry Guide</p>
                <p className="text-muted"> © 2019 Company name, All rights reserved </p>
                <br />
                </section>
            </div>{/* //container */}
            </footer>

        );
    }
}
export default Footer;