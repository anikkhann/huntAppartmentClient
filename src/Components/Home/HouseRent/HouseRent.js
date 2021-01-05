import React, { useEffect, useState } from 'react';
import HouseRentCard from '../HouseRentCard/HouseRentCard';
import './HouseRent.css';
const HouseRent = () => {
    const [ house, setHouse ] = useState([]);
    useEffect(() => {
        fetch('https://powerful-fjord-39182.herokuapp.com/apartments')
        .then(res => res.json())
        .then(data => setHouse(data))
        }, [])
        
    return (
        <section className="houses-container pt-5">
        <div className="text-center mb-5">
            <h6 style={{ color: '#275A53' }}>HOUSE RENT</h6>
            <h1 style={{ color: '#275A53', fontWeight:"bold" }}>Discover the latest Rent <br/> available today</h1>
        </div>
        <div className="d-flex justify-content-center">
        <div>
                {
                        house.length===0 &&
                        <div class="d-flex justify-content-center mt-5">
                        <div class="spinner-border" role="status"></div>
                        <strong >Loading...</strong>
                      </div>
                        
                }
        </div>
            <div className="w-75 row">
                {
                    house.map(house => <HouseRentCard house={house} key={house._id} />)
                }
            </div>
        </div>
    </section>
    );
};

export default HouseRent;