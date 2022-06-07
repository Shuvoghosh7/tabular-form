import React from 'react';
import PersonaldetailsRow from './PersonaldetailsRow';
import '../Style/Style.css'
const Personaldetails = () => {

    const addPersonalDetails=(e)=>{
        e.preventDefault();
        const FirstName=e.target.Fname.value
        const LastName=e.target.Lname.value
        const Age=e.target.age.value
        const Number=e.target.number.value
        const Address=e.target.address.value
        console.log(FirstName,LastName,Age,Number,Address)
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
                        {/* {
                            users.map(user => <PersonaldetailsRow
                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></PersonaldetailsRow>)
                        } */}
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <td>Blue</td>
                            <td>Blue</td>
                            <td>Blue</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div>
                <h1 className='text-2xl font-bold'>Add Personal Details</h1>
                <form onSubmit={addPersonalDetails}>
                    <div className='input-field'>
                        <input type="text" name="Fname" id="" placeholder='Write First Name' />
                        <input  type="text" name="Lname" id="" placeholder='Write Last Name'/>
                        <input  type="text" name="age" id="" placeholder='Write Age'/>
                        <input  type="text" name="number" id="" placeholder='Write Number'/>
                        <input  type="text" name="address" id="" placeholder='Write Address'/>
                        
                      <button className='submit-button'>Add Personal Details</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Personaldetails;