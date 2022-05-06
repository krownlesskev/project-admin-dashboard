import React from 'react';
import './AnnouncementCard.styles.scss';

const AnnouncementSection = ({ title }) => {
    return (
        <div>
            <p className='main-text'>
                {title}
            </p>
            <p className='sub-text'>
                Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Id eos corporis illo voluptatem asperiores officia,
                quod ut suscipit nulla sapiente ratione obcaecati! Voluptatum eligendi
                ab illo totam, inventore nostrum incidunt?
            </p>
        </div>
    );
};

const AnnouncementCard = () => {
    return (
        <div className='announcement-container'>
            <AnnouncementSection title='Site Maintenance' />
            <hr className='horizontal-line' />
            <AnnouncementSection title='Community Share Day' />
            <hr className='horizontal-line' />
            <AnnouncementSection title='Updated Privacy Policy' />
        </div>
    );
};

export default AnnouncementCard;