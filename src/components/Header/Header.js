import React from 'react';
import SiteMenu from '../SiteMenu/SiteMenu';
import Banner from '../Banner/Banner';
import { Container } from '@material-ui/core';

import './Header.css';
import SiteInfo from '../SiteInfo/SiteInfo';


const Header = () => {
    return (
        <div className="headerArea">
            <Container>
                <SiteMenu></SiteMenu>
                <Banner></Banner>
                <SiteInfo></SiteInfo>
            </Container>
        </div>
    );
};

export default Header;