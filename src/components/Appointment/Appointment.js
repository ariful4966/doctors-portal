import React from 'react';
import Grid from '@material-ui/core/Grid';
import SiteMenu from '../SiteMenu/SiteMenu';
import DentalChear from '../DentalChear/DentalChear';
import { Container } from '@material-ui/core';
import Calender from '../Calender/Calender';
import DailogBox from '../DailogBox/DailogBox';

import './Appointment.css';

const Appointment = () => {
    return (
        <div className="appointMentArea">
            <Container>
                <SiteMenu></SiteMenu>
                <div className="bannerArea">
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <div className="appiniment">
                                <h1>Appointment</h1>
                                <DailogBox></DailogBox>
                                <div className="calender">
                                    <Calender></Calender>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <DentalChear></DentalChear>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
};

export default Appointment;