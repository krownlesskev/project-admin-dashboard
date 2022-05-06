import React from 'react';
import './Main.styles.scss';
import { MdOutlineSearch, MdOutlineNotificationsActive } from 'react-icons/md';
import ProjectCard from './cards/project-card/ProjectCard';
import AnnouncementCard from './cards/announcement-card/AnnouncementCard';
import TrendingCard from './cards/trending-card/TrendingCard';

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
                        <img src="https://via.placeholder.com/75" alt="placeholder" />
                        <div className='header-bottom-left-text'>
                            <span className='sub-text'>Hi there,</span>
                            <span className='main-text'>Kevin Sana (@krwnlesskev)</span>
                        </div>
                    </div>
                    <div className='header-bottom-right'>
                        <button>New</button>
                        <button>Upload</button>
                        <button>Share</button>
                    </div>
                </div>
            </div>
            <div className='content'>
                <div className='content-left'>
                    <p className='content-left-p'>Your Projects</p>
                    <div className='projects-container'>
                        <ProjectCard title='Super Cool Project' />
                        <ProjectCard title='Less Cool Project' />
                        <ProjectCard title='Impossible App' />
                        <ProjectCard title='Easy Peasy App' />
                        <ProjectCard title='Ad Blocker' />
                        <ProjectCard title='Money Maker' />
                    </div>
                </div>
                <div className='content-right'>
                    <div className="content-right-top">
                        <p className='content-right-p'>Announcements</p>
                        <div className='announcements-container'>
                            <AnnouncementCard />
                        </div>
                    </div>
                    <div className="content-right-bottom">
                        <p className='content-right-p'>Trending</p>
                        <div className="trending-container">
                            <TrendingCard />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;