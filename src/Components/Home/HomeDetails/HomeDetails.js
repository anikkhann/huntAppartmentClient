import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import './HomeDetails.css';
import { useForm } from 'react-hook-form';
import homeDetailImage1 from '../../../images/Rectangle 410.png';
import homeDetailImage2 from '../../../images/Rectangle 409.png';
import homeDetailImage3 from '../../../images/Rectangle 408.png';
import homeDetailImage4 from '../../../images/Rectangle 407.png';
import temporaryImage from '../../../images/Rectangle 398.png';
import { UserContext } from '../../../App';
import { Link, useHistory, useParams } from 'react-router-dom';

const HomeDetails = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [rentHouse, setRentHouse] = useContext(UserContext);
  const [loggedInUser, setLoggedInUser]= useContext(UserContext);
  

 
    const [allApartments, setAllApartments] = useState([]);
    const {_id} = useParams();
    const history = useHistory();

    useEffect(() => {
     fetch('https://powerful-fjord-39182.herokuapp.com/apartments')
    .then(res => res.json())
    .then(data => {
          setAllApartments(data);
    })
},[])

    const house = allApartments.find(apartment => apartment._id === _id) || { };
 

    const onSubmit = (data, event) => {
        const apartmentPrice = house.price;
        const apartmentTitle = house.title;
        const newBooking = {...data, apartmentPrice, apartmentTitle};
        fetch('https://powerful-fjord-39182.herokuapp.com/addBooking',{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newBooking)
      })
      .then(res=>res.json())
      .then(data=>{
        if(data){
          alert('Your booking is successfully complete');
          event.target.reset();
          history.push('/huntPage')
        }
      })
      console.log(rentHouse)

}

    return (
        <div style={{backgroundColor: '#E5E5E5'}} className="pb-5">
            <NavBar />
            <div className="row headingStyle ">
                <div className="col-md-12 pt-5">
                    <h1 className="text-center text-white mt-5 fonts">Apartment</h1>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center mt-4">
                <div className="col-md-8">
                <img src={temporaryImage} className="img-fluid" alt=""/>
                     

                      <div className="row justify-content-center mt-4">
                          <div className="col-md-3">
                              <img src={homeDetailImage1} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-md-3">
                              <img src={homeDetailImage2} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-md-3">
                              <img src={homeDetailImage3} className="img-fluid" alt=""/>
                          </div>
                          <div className="col-md-3">
                              <img src={homeDetailImage4} className="img-fluid" alt=""/>
                          </div>
                      </div>

                      <div className="row justify-content-between mt-4">
                          <div className="pl-3">
                             <h2>{house.title}</h2> 
                          </div>
                          <div className="pr-3">
                                 <h2 style={{color: '#275A53', fontWeightAbsolute:'bold'}}>${house.price}</h2>
                          </div>
                      </div>
                     <p className="mt-3">3000 sq-ft., {house.bedroom} Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

                      <div className="mt-4">
                          <h4>Price Details</h4>
                          <p className="mt-3">Rent/Month: $550 (negotiable)
                            Service Charge : 8,000/= Tk per month, subject to change
                            Security Deposit : 3 month’s rent
                            Flat Release Policy : 3 months earlier notice required</p>
                      </div>
                      <div className="mt-4">
                          <h4>Property Details</h4>
                           <p className="mt-3">Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.
                            Flat Size : 3000 Sq Feet.
                            Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)
                            Room Category : {house.bedroom} Large Bed Rooms with {house.bedroom} Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.
                            Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.
                            Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera
                           </p>
                      </div>
                </div>
                <div className="col-md-4 p-3 formStyle ">
                    <div className="pt-4">
                    <form onSubmit={handleSubmit(onSubmit)} style={{backgroundColor: '#F4F4F4'}}>
                        <div className="form-group">
                            <input type="text" name="name" className="form-control" placeholder="Full Name" defaultValue={loggedInUser.name} ref={register({ required: true })} />
                            {errors.name && <span className="error">Name is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="text" name="phone" className="form-control" placeholder="Phone No" ref={register({ required: true })}/>
                            {errors.name && <span className="error">Phone Number is required</span>}
                        </div>
                        <div className="form-group">
                            <input type="email" name="email" className="form-control" placeholder="Email Address" defaultValue={loggedInUser.email}  ref={register({ required: true })}/>
                            {errors.name && <span className="error">Email is required</span>}
                        </div>
                        <div className="form-group">
                            <textarea name="message" className="form-control" rows="4" placeholder="Message" ref={register({ required: true })}></textarea>
                            {errors.name && <span className="error">Message is required</span>}
                        </div>
                        <input type="submit" className="btn btn-block btnStyle" value="Request Booking"/>
                        
                    </form>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeDetails;