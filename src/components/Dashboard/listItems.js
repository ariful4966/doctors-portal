import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import { Link } from 'react-router-dom';
import DateRangeIcon from '@material-ui/icons/DateRange';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import SettingsIcon from '@material-ui/icons/Settings';

export const mainListItems = (
    <div>
        <ListItem button>
            <Link to="/doctor/dashboard" className="dashBoardMenu">
                <ListItemIcon>
                    <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/dashboard/appointment" className="dashBoardMenu">
                <ListItemIcon>
                    <DateRangeIcon />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/dashboard/patient" className="dashBoardMenu">
                <ListItemIcon>
                    <SupervisorAccountIcon />
                </ListItemIcon>
                <ListItemText primary="Patients" />
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/dashboard/prescription" className="dashBoardMenu">
                <ListItemIcon>
                    <NoteAddIcon />
                </ListItemIcon>
                <ListItemText primary="Prescriptions" />
            </Link>
        </ListItem>
        
        <ListItem button>
            <Link to="/dashboard/setting" className="dashBoardMenu">
                <ListItemIcon>
                    <SettingsIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </Link>
        </ListItem>
    </div>
);

