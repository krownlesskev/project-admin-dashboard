import React from 'react';
import './Header.styles.scss';
import {
    MdSearch,
    MdOutlineNotificationsActive,
} from 'react-icons/md';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='header-top'>
                <div className='header-top-left'>
                    <MdSearch size='2em' />
                    <input type="text" />
                </div>
                <div className='header-top-right'>
                    <MdOutlineNotificationsActive />
                    <img src="https://via.placeholder.com/50" />
                    <span>Kevin Sana</span>
                </div>
            </div>
            <div className='header-bottom'>
            </div>
        </div>
    );
};

export default Header;