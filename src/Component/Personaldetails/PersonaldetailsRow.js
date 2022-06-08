import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
const PersonaldetailsRow = ({ info, index, refetch }) => {
    const { _id, FirstName, LastName, Age, Number, Address } = info

    const handealDelete = () => {
        const proceed = window.confirm("Are You Confirm,Delete This Item?")
        if (proceed) {
            const url = `https://gentle-earth-38780.herokuapp.com/delete-personalDetails/${_id}`
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
            <td>{FirstName}</td>
            <td>{LastName}</td>
            <td>{Age}</td>
            <td>{Number}</td>
            <td>{Address}</td>
            <td><button className='text-2xl text-red-600' onClick={handealDelete}><AiTwotoneDelete /></button></td>
        </tr>
    );
};

export default PersonaldetailsRow;