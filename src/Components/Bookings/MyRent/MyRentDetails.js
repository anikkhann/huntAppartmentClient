import React from 'react';

const MyRentDetails = ({data}) => {
    console.log(data);
    return (
        <tbody>
            <tr>
                <td><b>{data.apartmentTitle}</b></td>
                <td><b>${data.apartmentPrice}</b></td>
                <button className="btn btnStyle">View Details</button>
            </tr>
        </tbody>
    );
};

export default MyRentDetails;