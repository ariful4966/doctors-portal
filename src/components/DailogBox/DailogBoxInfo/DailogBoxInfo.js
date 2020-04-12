import React from 'react';


import './DailogBoxInfo.css'
const DailogBoxInfo = () => {

    // const btnAddUser = document.getElementById('addPatient');
    // btnAddUser.addEventListener('click', () => {
    const handleAddPatient = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const age = document.getElementById('age').value;
        const weight = document.getElementById('weight').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;
        const address = document.getElementById('address').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const patient = { name, email, age , phone, gender, address, time, date, weight };
        // console.log(product)
        fetch('http://localhost:4200/addPatients', {
            method: 'POST',
            body: JSON.stringify(patient),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // updatePatient(data)

                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('age').value = '';
                document.getElementById('weight').value = '';
                document.getElementById('phone').value = '';
                document.getElementById('gender').value = '';
                document.getElementById('address').value = '';
                document.getElementById('time').value = '';
                document.getElementById('date').value = '';

                // success Message 
                // const success = document.getElementById('successMessage');
                // success.style.display = 'block';
                // setTimeout(() => {
                //     success.style.display = 'none';
                // }, 5000)
            })
    }
    return (
        <div className="dailogBoxInfo">
            <input type="text" class="form-control" id="name" placeholder=" Name"/>
            <input type="emai" class="form-control" id="email" placeholder="@email.com"/>
            <input type="number" class="form-control" id="age" placeholder="Age"/>
            <input type="number" class="form-control" id="weight" placeholder="Weight"/>
            <input type="number" class="form-control" id="phone" placeholder="Phone Number"/>
            <input type="text" class="form-control" id="gender" placeholder="Male / Female"/>
            <input type="date" class="form-control" id="date" />
            <input type="time" class="form-control" id="time"/>
            <input type="text" name="" class="form-control" id="address" placeholder="Your Address"/>
            <button class="btn btn-primary" id="addPatient" onClick={handleAddPatient}>Add Product</button>
        </div>
    );
};

export default DailogBoxInfo;