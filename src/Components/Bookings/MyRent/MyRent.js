import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../../App';
import MyRentDetails from './MyRentDetails';

const MyRent = () => {
    const[loggedInUser, setLoggedInUser] = useContext(UserContext);
    const[myRentInfo, setMyRentInfo] = useState([]);

    useEffect(() => {
        fetch('https://powerful-fjord-39182.herokuapp.com/specificUserBooking',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => {
            setMyRentInfo(data);
            console.log(data);
        });
    },[])

    return (
        <div>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>House Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        myRentInfo.map(data => <MyRentDetails data={data} id={data._id}/>)
                    }          
                </Table>
            </div>
        </div>
    );
};

export default MyRent;