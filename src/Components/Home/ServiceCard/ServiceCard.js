import React from 'react';
import './ServiceCard.css';

const ServiceCard = ( { service }) => {
    return (
        <div className="col-md-4 service-container">
            <div className=" service-card text-center p-5">
            <img src={service.icon} className="p-1 mb-3" height="74" width="74"  alt=""/>
            <h5>{service.title}</h5>
            <p className="text-secondary">{service.description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;