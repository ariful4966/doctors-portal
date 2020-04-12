import React from 'react';

const PatientListBody = (props) => {
    console.log(props);
    const { name, gender, age, phone, weight, address } = props.singlePtn;
    return (
        <tbody>
            <tr>
                <td></td>
                <td id="name">{name}</td>
                <td id="gender">{gender}</td>
                <td id="age">{age}</td>
                <td id="weight">{weight}</td>
                <td id="phone">{phone}</td>
                <td id="address">{address}</td>
            </tr>
        </tbody>
    );
};

export default PatientListBody;