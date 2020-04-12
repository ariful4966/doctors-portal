import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import { Link } from 'react-router-dom';

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
                    <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Appointments" />
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/dashboard/patient" className="dashBoardMenu">
                <ListItemIcon>
                    <PeopleIcon />
                </ListItemIcon>
                <ListItemText primary="Patients" />
            </Link>
        </ListItem>
        <ListItem button>
            <Link to="/dashboard/prescription" className="dashBoardMenu">
                <ListItemIcon>
                    <LayersIcon />
                </ListItemIcon>
                <ListItemText primary="Prescriptions" />
            </Link>
        </ListItem>
        
        <ListItem button>
            <Link to="/dashboard/setting" className="dashBoardMenu">
                <ListItemIcon>
                    <BarChartIcon />
                </ListItemIcon>
                <ListItemText primary="Settings" />
            </Link>
        </ListItem>
    </div>
);

