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
                    <MdOutlineNotificationsActive size='2em' />
                    <img src="https://via.placeholder.com/50" />
                    <span>Kevin Sana</span>
                </div>
            </div>
            <div className='header-bottom'>
                <div className='header-bottom-left'>
                    <img src="https://via.placeholder.com/75" />
                    <div className='header-bottom-left-text'>
                        <span className='sub-text'>Hi there,</span>
                        <span className='main-text'>Kevin Sana (@kevin)</span>
                    </div>
                </div>
                <div className='header-bottom-right'>
                    <button>New</button>
                    <button>Upload</button>
                    <button>Share</button>
                </div>
            </div>
        </div>
    );
};

export default Header;