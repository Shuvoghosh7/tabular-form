import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import BusinessdetailsRow from './BusinessdetailsRow';


const Businessdetails = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm();

    const { data: businessdetails, isLoading, refetch } = useQuery('businessdetails', () => fetch('https://gentle-earth-38780.herokuapp.com/get-Businessdetails').then(res => res.json()))
    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        );
    }

    const onSubmit = data => {
        console.log(data)
        fetch("https://gentle-earth-38780.herokuapp.com/add-Businessdetails", {
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
                console.log(data)

            })
    };
    return (
        <div>
            <p className='text-center text-xl text-cyan-600 font-bold'>Business Details information</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Business name</th>
                            <th>Business Type</th>
                            <th>GST no</th>
                            <th>Mobile no</th>
                            <th>Address</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            businessdetails?.map((Binfo, index) =>
                                <BusinessdetailsRow
                                    key={Binfo._id}
                                    Binfo={Binfo}
                                    index={index}
                                    refetch={refetch}
                                />
                            )
                        }

                    </tbody>
                </table>
            </div>
            <div className='mx-3'>
                <p className='text-xl font-bold'>Add Business Details</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='input-field'>
                        <input
                            type="text"
                            placeholder="Write BUSINESS NAME"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("BusinessName")}
                        />
                        <input
                            type="text"
                            placeholder="Write BUSINESS TYPE"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("BusinessType")}
                        />
                        <input
                            type="text"
                            placeholder="Write GST NO"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("GST")}
                        />
                        <input
                            type="text"
                            placeholder="Write Number"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("Number")}
                        />
                        <input
                            type="text"
                            placeholder="Write Address"
                            className="input input-bordered w-44 max-w-xs"
                            {...register("Address")}
                        />
                        <button className='btn btn-success rounded-2xl'>ADD BUSINESS DETAILS</button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default Businessdetails;