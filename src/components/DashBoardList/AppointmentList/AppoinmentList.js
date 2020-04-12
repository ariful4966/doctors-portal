import React, { useEffect, useState } from 'react';
import './AppoinmentList.css';

import AppointmentListBody from './AppointmentListBody';

const AppoinmentList = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('https://boiling-sierra-01617.herokuapp.com/patients')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPatient(data);
            })
    }, [])

    return (



        <div className="appointmentList">
            <div className="appointListHead">
                <h3>Appointments</h3>
                <date>Data:</date>
            </div>
            <div className="appointListDetail">
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Schedule</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    {
                        patient.map(ptn =>
                            <AppointmentListBody singlePtn={ptn}></AppointmentListBody>
                        )
                    }

                </table>
            </div>
        </div>
    );
};

export default AppoinmentList;