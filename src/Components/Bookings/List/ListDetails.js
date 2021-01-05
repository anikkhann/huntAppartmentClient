import React from 'react';

const ListDetails = ({ data }) => {
    console.log(data);
    return (
        <tbody>
            <tr>
                <td><b>{data.name}</b></td>
                <td><b>{data.email}</b></td>
                <td><b>{data.phone}</b></td>
                <td><b>{data.message}</b></td>
                <td className="text-success">Done</td>
            </tr>
        </tbody>
    );
};

export default ListDetails;