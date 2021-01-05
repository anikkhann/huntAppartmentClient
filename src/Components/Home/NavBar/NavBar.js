import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../logos/Logo.png';
import './NavBar.css';

const NavBar = () => {

    return (
        <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: '#E5E5E5'}}>
            <div className="container-xl">
                <Link className="navbar-brand" to="/">
                    <img src={logo} alt="" width="100px" />
                </Link>
                <button className="border-0 navbar-toggler" type="button" data-toggle="collapse" data-target="#nava">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse text-center navbar-collapse" id="nava">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-dark" to="/">Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link text-dark" to="/">About</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="/">Service</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="/">Event</a>
                        </li>   
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="/">Contact</a>
                        </li>                        
                        <li className="nav-item mx-2">
                            <a className="nav-link text-dark" href="/">Concerns</a>
                        </li>  
                        <li className="nav-item mx-2">
                            <Button className=" nav-btn" width="100px" style={{backgroundColor: '#275A53', border: '1px solid #275A53'}} href='/login'>Login</Button>
                            {/* <a className="nav-link text-dark" href="#contact">Concerns</a> */}
                        </li>  
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;