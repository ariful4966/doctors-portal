import React from 'react';

const PrescriptionListBody = (props) => {
    const {date, name, phone} = props.singlePtn;
    return (
        <tbody>
            <tr>
                <td></td>
                <td>{date}</td>
                <td>{name}</td>
                <td>{phone}</td>
                <td type="button">View</td>
            </tr>
        </tbody>
    );
};

export default PrescriptionListBody;