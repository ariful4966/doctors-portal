import React, { useEffect, useState } from 'react';
import DashBoardListBody from './DashBoardListBody';

const DashBoardList = () => {
    const [patient, setPatient] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4200/patients')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setPatient(data);
            })
    }, [])
    return (
        <div className="appointList">
            <div className="appointListHeading">
                <h3>Recent Appointments</h3>
                <label>
                    <div>Calender</div>
                </label>
            </div>
            <div className="appointListDetail">
                <table>
                    <thead>
                        <tr>
                            <th>SL.no</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Name</th>
                            <th>Contact</th>
                            <th>Prescription</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {
                        patient.map(ptn =>
                            <DashBoardListBody singlePtn={ptn}></DashBoardListBody>
                        )
                    }
                </table>
            </div>
        </div>
    );
};

export default DashBoardList;