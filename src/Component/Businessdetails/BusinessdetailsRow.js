import React from 'react';

const BusinessdetailsRow = ({Binfo,index}) => {
    const{BusinessName,BusinessType,GST,Number,Address}=Binfo
   
    return (
        <tr>
            <th>{index+1}</th>
            <td>{BusinessName}</td>
            <td>{BusinessType}</td>
            <td>{GST}</td>
            <td>{Number}</td>
            <td>{Address}</td>

        </tr>
    );
};

export default BusinessdetailsRow;