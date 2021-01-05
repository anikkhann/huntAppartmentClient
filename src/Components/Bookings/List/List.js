import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import ListDetails from './ListDetails';

const List = () => {
 const [listInfo, setListInfo] = useState([]);

 useEffect(() =>{
     fetch('https://powerful-fjord-39182.herokuapp.com/allUsersBooking')
     .then(res => res.json())
     .then(data => {
         setListInfo(data);
     })
 }, [])

    return (
        <div>
            <div className="servicelist-table">
                <Table borderless>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email ID</th>
                            <th>Service</th>
                            <th>Product Details</th>
                            <th className="text-center">status</th>
                        </tr>
                    </thead>
                        {
                            listInfo.map(data => <ListDetails data={data} id={data._id}/>)
                        }           
                </Table>
            </div>
        </div>
    );
};

export default List;