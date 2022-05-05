import React from 'react';
import './Main.styles.scss';
import { MdOutlineSearch, MdOutlineNotificationsActive } from 'react-icons/md';

const Main = () => {
    return (
        <div className='main-container'>
            <div className='header'>
                <div className='header-top'>
                    <div className='header-top-left'>
                        <MdOutlineSearch size='2em' />
                        <input type="text" />
                    </div>
                    <div className='header-top-right'>
                        <MdOutlineNotificationsActive size='2em' />
                        <img src="https://via.placeholder.com/50" alt="placeholder" />
                        <span>Kevin Sana</span>
                    </div>
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>

                    </div>
                    <div className='header-bottom-right'>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;