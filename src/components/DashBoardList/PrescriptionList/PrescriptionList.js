import React, { useEffect } from 'react';
import { useState } from 'react';
import PrescriptionListBody from './PrescriptionListBody';

const PrescriptionList = () => {
    const [patient, setPatient] = useState([])
    useEffect(()=>{
        fetch('http://localhost:4200/patients')
        .then(res => res.json())
        .then(data =>{
            setPatient(data);
        })
    },[]);
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
                                    <th>Name</th>
                                    <th>Contact</th>
                                    <th>Prescription</th>
                                </tr>
                            </thead>
                            {
                                patient.map(ptn=><PrescriptionListBody singlePtn={ptn}></PrescriptionListBody>)
                            }
                        </table>
                    </div>
                  </div>
    );
};

export default PrescriptionList;