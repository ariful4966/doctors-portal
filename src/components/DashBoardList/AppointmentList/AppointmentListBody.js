import React from 'react';

const AppointmentListBody = (props) => {
    // console.log(props);
    const { name, time } = props.singlePtn;
    return (
        <tbody>
            <tr>
                <td id="pName">{name}</td>
                <td id="pTime">{time}</td>
                <td id="pAction">

                    <select>
                        <option>Not Visited</option>
                        <option>Visited</option>
                        <option>Cancelled</option>
                        <option>Approved</option>
                    </select>

                </td>
            </tr>
        </tbody>
    );
};

export default AppointmentListBody;