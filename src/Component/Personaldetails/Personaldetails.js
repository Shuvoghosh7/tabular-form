import React from 'react';
import PersonaldetailsRow from './PersonaldetailsRow';
import '../Style/Style.css'
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
const Personaldetails = () => {
    const { data: Personalinfo, isLoading, refetch } = useQuery('Personalinfo', () => fetch('https://gentle-earth-38780.herokuapp.com/get-personalDetails').then(res => res.json()))
    if (isLoading) {
        return (
            <div className='h-screen flex justify-center items-center'>
                <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
            </div>
        );
    }
    const addPersonalDetails = (e) => {
        e.preventDefault();
        const FirstName = e.target.Fname.value
        const LastName = e.target.Lname.value
        const Age = e.target.age.value
        const Number = e.target.number.value
        const Address = e.target.address.value
        console.log(FirstName, LastName, Age, Number, Address)
        fetch("https://gentle-earth-38780.herokuapp.com/add-personalDetails", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ FirstName, LastName, Age, Number, Address })
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
                e.target.reset();
                toast.success("personal Details add successfully")
            })
    }
    return (
        <div>
            <p className='text-center text-xl text-cyan-600 font-bold'>Personal Details information</p>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                            <th>Mobile no</th>
                            <th>Address</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Personalinfo?.map((info, index) => <PersonaldetailsRow
                                key={info._id}
                                info={info}
                                index={index}
                                refetch={refetch}

                            ></PersonaldetailsRow>)
                        }

                    </tbody>
                </table>
            </div>
            <div className='mx-3'>
                <h1 className='text-2xl font-bold'>Add Personal Details</h1>
                <form onSubmit={addPersonalDetails}>
                    <div className='input-field'>
                        <input type="text" name="Fname" id="" placeholder='Write First Name' />
                        <input type="text" name="Lname" id="" placeholder='Write Last Name' />
                        <input type="text" name="age" id="" placeholder='Write Age' />
                        <input type="text" name="number" id="" placeholder='Write Number' />
                        <input type="text" name="address" id="" placeholder='Write Address' />

                        <button className='submit-button'>Add Personal Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Personaldetails;