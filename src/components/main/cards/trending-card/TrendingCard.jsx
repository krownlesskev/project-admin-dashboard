import React from 'react';
import './TrendingCard.styles.scss';

const TrendingSection = ({ username, subText }) => {
    return (
        <div className='trending-section-container'>
            <img src="https://via.placeholder.com/50" alt="placeholder" />
            <div className='trending-section-text'>
                <p className='main-text'>@{username}</p>
                <p className='sub-text'>{subText}</p>
            </div>
        </div>
    );
};

const TrendingCard = () => {
    return (
        <div className='trending-card-container'>
            <TrendingSection username='tegan' subText='World Peace Builder' />
            <TrendingSection username='morgan' subText='Super Cool Project' />
            <TrendingSection username='kendall' subText='Life Changing App' />
            <TrendingSection username='alex' subText='No Traffic Maker' />
        </div>
    );
};

export default TrendingCard;