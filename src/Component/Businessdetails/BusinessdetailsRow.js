import React from 'react';
import { toast } from 'react-toastify';
import { AiTwotoneDelete } from 'react-icons/ai';

const BusinessdetailsRow = ({ Binfo, index, refetch }) => {
    const { _id, BusinessName, BusinessType, GST, Number, Address } = Binfo

    const handealDelete = () => {
        const proceed = window.confirm("Are You Confirm,Delete This Item?")
        if (proceed) {
            const url = `https://gentle-earth-38780.herokuapp.com/delete-Businessdetails/${_id}`
            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    refetch()
                    toast.success("Delete Information successfully")
                    console.log(data)

                })
        }
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{BusinessName}</td>
            <td>{BusinessType}</td>
            <td>{GST}</td>
            <td>{Number}</td>
            <td>{Address}</td>
            <td><button className='text-2xl text-red-600' onClick={handealDelete}><AiTwotoneDelete /></button></td>
        </tr>
    );
};

export default BusinessdetailsRow;