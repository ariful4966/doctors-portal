import React from 'react';
import Box from '@material-ui/core/Box';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';
import RoomIcon from '@material-ui/icons/Room';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import './SiteInfo.css'

const SiteInfo = () => {
    return (
        <Box display="flex" justifyContent="space-between" m={1} p={1} bgcolor="background.paper">
            <Box className="singleInfo" p={1} bgcolor="grey.300" display="flex" alignItems="center" justifyContent="space-evenly">
                <div className="infoIcon"><AccessTimeIcon/></div>
                <div>
                    <h3>Opening Hour</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nisi.</p>
                </div>
            </Box>
            <Box className="singleInfo" p={1} bgcolor="grey.300" display="flex" alignItems="center" justifyContent="space-evenly">
                <div className="infoIcon"><RoomIcon/></div>
                <div>
                    <h3>Visit Our Location</h3>
                    <address>Brooklyn, NY 10036, United Stated</address>
                </div>
            </Box>
            <Box className="singleInfo" p={1} bgcolor="grey.300" display="flex" alignItems="center" justifyContent="space-evenly">
                <div className="infoIcon"><PhoneInTalkIcon/></div>
                <div>
                    <h3>Contact Us Now</h3>
                    <p>+000 123 456789</p>
                </div>
            </Box>
        </Box>
    );
};

export default SiteInfo;