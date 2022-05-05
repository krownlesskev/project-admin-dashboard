import React from 'react';
import './ProjectCard.styles.scss';
import {
    MdStarBorder,
    MdOutlineRemoveRedEye
} from 'react-icons/md';
import { AiOutlineFork } from 'react-icons/ai';

const ProjectCard = ({ title }) => {
    return (
        <div className='project-card-container'>
            <div className="project-card-top">
                <p className='main-text'>{title}</p>
                <p className='sub-text'>
                    Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit.
                    Tempore dolore aliquam ut id commodi eaque deleniti
                    culpa beatae cupiditate doloribus corrupti cum laudantium
                    architecto nihil, officiis mollitia fuga consequuntur soluta!
                </p>
            </div>
            <div className="project-card-bottom">
                <MdStarBorder className='project-icon' size='1.5em' />
                <MdOutlineRemoveRedEye className='project-icon' size='1.5em' />
                <AiOutlineFork className='project-icon' size='1.5em' />
            </div>
        </div>
    );
};

export default ProjectCard;