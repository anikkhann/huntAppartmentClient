import React from 'react';
import './Service.css';
import service1 from '../../../images/service1.png';
import service2 from '../../../images/service2.png';
import service3 from '../../../images/service3.png';
import ServiceCard from '../ServiceCard/ServiceCard';


const serviceData = [
    {
        title: 'Wide Range of Properties',
        description: 'With a robust selection of popular properties on hand, as well as leading properties from experts.',
        icon: service1
    },
    {
        title: 'Financing Made Easy',
        description: 'Our stress-free finance department that can find financial solutions to save you money.',
        icon: service2
    },
    {
        title: 'Trusted by Thousands',
        description: '10 new offers every day. 350 offers on site, trusted by a community of thousands users',
        icon: service3
    }
]

const Service = () => {
    return (
        <section className="houses-container pt-5 pb-5">
        <div className="text-center mb-5">
            <h6 style={{ color: '#275A53' }}>SERVICE</h6>
            <h1 style={{ color: '#275A53', fontWeight:"bold" }}>We're an agency tailored to all <br/> clients' needs that always delivers</h1>
        </div>
        <div className="d-flex justify-content-center">
            <div className="w-75 row">
                {
                    serviceData.map(service => <ServiceCard service={service} key={service.title} />)
                }
            </div>
        </div>
    </section>
    );
};

export default Service;