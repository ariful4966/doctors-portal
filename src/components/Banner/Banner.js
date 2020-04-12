import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Banner.css'

import DentalChear from '../DentalChear/DentalChear';
import AboutDental from '../AboutDental/AboutDental';

const Banner = () => {
    return (
        <div className="bannerArea">
            <Grid container spacing={3}>
                <Grid item xs={5}>
                    <AboutDental></AboutDental>
                </Grid>
                <Grid item xs={1}>
                    
                </Grid>
                <Grid item xs={6}>
                    <DentalChear></DentalChear>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;