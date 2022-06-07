import React from 'react';

const PersonaldetailsRow = ({info,index}) => {
    const{FirstName,LastName,Age,Number,Address}=info
    return (
        <tr>
            <th>{index+1}</th>
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{Age}</td>
            <td>{Number}</td>
            <td>{Address}</td>
        </tr>
    );
};

export default PersonaldetailsRow;