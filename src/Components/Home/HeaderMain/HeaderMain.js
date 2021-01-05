import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';
import './HeaderMain.css'

const HeaderMain = () => {
    return (
        <div>
            <section className="header-main">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center text-white py-5 text-searchbar w-75">
                            <h1 className="my-4 header-text">FIND YOUR HOUSE RENT</h1>
                            <input type="text" className="search-box" placeholder="Search"/>
                            <button className="search-btn btn ml-3">Find Now</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HeaderMain;