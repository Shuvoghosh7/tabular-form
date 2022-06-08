import React from 'react';
import { TbCurrencyTaka } from 'react-icons/tb';
import { toast } from 'react-toastify';
import { AiTwotoneDelete } from 'react-icons/ai';

const ApplicationdetailsRow = ({ loan, index, refetch }) => {
    const { _id, Date, LoanType, LoanAmount, InterestRate, LoanTenure } = loan

    const handealDelete = () => {
        const proceed = window.confirm("Are You Confirm,Delete This Item?")
        if (proceed) {
            const url = `https://gentle-earth-38780.herokuapp.com/delete-LoanDetails/${_id}`
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
            <td>{Date}</td>
            <td>{LoanType}</td>
            <td className='flex items-center'>{LoanAmount}<TbCurrencyTaka /></td>
            <td>{InterestRate}%</td>
            <td>{LoanTenure} Year</td>
            <td><button className='text-red-600' onClick={handealDelete}><AiTwotoneDelete /></button></td>

        </tr>
    );
};

export default ApplicationdetailsRow;