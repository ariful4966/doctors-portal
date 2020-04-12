import React from 'react';

const DashBoardListBody = (props) => {
    console.log(props);
    const { date, time, name, phone, } = props.singlePtn;
    return (
        <tbody>
            <tr>
                <td></td>
                <td id="date">{date}</td>
                <td id="time">{time}</td>
                <td id="name">{name}</td>
                <td id="phone">{phone}</td>
                <td id="prescription" type="button">View</td>
                <td id="action" type="button">Pending</td>
            </tr>
        </tbody>
    );
};

export default DashBoardListBody;