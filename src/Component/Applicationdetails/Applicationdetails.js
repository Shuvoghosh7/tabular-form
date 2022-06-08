import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import ApplicationdetailsRow from '../Personaldetails/ApplicationdetailsRow';

const Applicationdetails = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const { data: LoanApplication, isLoading,refetch } = useQuery('LoanApplication', () => fetch('http://localhost:5000/get-LoanDetails').then(res => res.json()))
    
    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        );
    }
    const onSubmit = data => {
        console.log(data)
        fetch("http://localhost:5000/add-LoanDetails", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset()
                refetch()
                toast.success("Business Info add successfully")
                
                
            })
    }
    return (
        <div>
            <p className='text-center text-xl text-cyan-600 font-bold'>Loan Application information</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Date</th>
                            <th>Type of Loan</th>
                            <th>Loan amount</th>
                            <th>interest rate</th>
                            <th>loan tenure</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            LoanApplication?.map((loan,index) =>
                                <ApplicationdetailsRow
                                key={loan._id}
                                loan={loan}
                                index={index}
                                refetch={refetch}
                                />
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div >
                <p className='text-xl font-bold mt-5'>Add Loan Application details</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-field'>
                        <input
                            type="date"
                            min="2022-01-01" max="2030-12-31"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("Date")}
                        />
                        <select {...register("LoanType")} className="w-44">
                            <option value="Personal Loan">Personal Loan</option>
                            <option value="Home Loan">Home Loan</option>
                            <option value="Car Loan">Car Loan</option>
                        </select>
                        <input
                            type="text"
                            placeholder="WRITE LOAN AMOUNT"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("LoanAmount")}
                        />
                        <input
                            type="text"
                            placeholder="WRITE INTEREST RATE"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("InterestRate")}
                        />
                        <input
                            type="text"
                            placeholder="Write 	LOAN TENURE"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("LoanTenure")}
                        />
                        <button className='btn border-t-cyan-500 rounded-2xl'>ADD  Application details</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Applicationdetails;