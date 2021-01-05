import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png';
import Sidebar from '../Sidebar/Sidebar';

const HuntPage = () => {
    const [display, setDisplay] = useState();

    return (
        <section id="customer">
            <div className="navbar d-flex justify-content-between py-3 px-0 px-sm-5">
                <Link to="/">
                    <img src={logo} width="120px" alt=""/>
                </Link>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <Sidebar setDisplay={setDisplay} />
                </div>
                <div className="col-md-9 right bg-light">
                    {display}
                </div>
            </div>
        </section>
    );
};

export default HuntPage;