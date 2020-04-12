import React, { useState, useEffect } from 'react';
import PatientListBody from './PatientListBody';


const PatientList = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/patients')
            .then(res => res.json())
            .then(data => {
                setPatient(data);
            })
    }, [])
    return (
        <div className="appointList">
            <div className="appointListHeading">
                <h3>All Patients</h3>
                <label>
                    <div>Calender</div>
                </label>
            </div>
            <div className="appointListDetail">
                <table>
                    <thead>
                        <tr>
                            <th>SL.no</th>
                            <th>Name</th>
                            <th>Gender</th>
                            <th>Age</th>
                            <th>Weight</th>
                            <th>Contact</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    {
                        patient.map(ptn=><PatientListBody singlePtn={ptn}></PatientListBody>)
                    }
                </table>
            </div>
        </div>
    );
};

export default PatientList;