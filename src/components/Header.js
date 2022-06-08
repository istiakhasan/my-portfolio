import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header className='h-screen'>
                <Navbar />
                <Banner />            
        </header>
    );
};

export default Header;