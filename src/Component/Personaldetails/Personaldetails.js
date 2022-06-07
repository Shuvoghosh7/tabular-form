import React from 'react';
import PersonaldetailsRow from './PersonaldetailsRow';
import '../Style/Style.css'
import { useQuery } from 'react-query';
const Personaldetails = () => {
    const { data: Personalinfo, isLoading,refetch } = useQuery('Personalinfo', () => fetch('http://localhost:5000/get-personalDetails').then(res => res.json()))
    
    console.log(Personalinfo)
    const addPersonalDetails = (e) => {
        e.preventDefault();
        const FirstName = e.target.Fname.value
        const LastName = e.target.Lname.value
        const Age = e.target.age.value
        const Number = e.target.number.value
        const Address = e.target.address.value
        console.log(FirstName, LastName, Age, Number, Address)
        fetch("http://localhost:5000/add-personalDetails", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({FirstName,LastName,Age,Number,Address})
        })
            .then(res => res.json())
            .then(data => {
                refetch()
                console.log(data)
                e.target.reset();
            })
    }
    return (
        <div>
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

                        </tr>
                    </thead>
                    <tbody>
                        {
                            Personalinfo?.map((info,index )=> <PersonaldetailsRow
                                key={info._id}
                                info={info}
                                index={index}
                                
                            ></PersonaldetailsRow>)
                        }
                        
                    </tbody>
                </table>
            </div>
            <div>
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