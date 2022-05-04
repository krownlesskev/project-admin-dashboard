import './Drawer.styles.scss';
import {
    MdOutlineHome,
    MdOutlineContactMail,
    MdOutlineMessage,
    MdOutlineTimer,
    MdOutlineTask,
    MdOutlineGroups,
    MdOutlineSettings,
    MdInfoOutline,
    MdOutlineShield
} from 'react-icons/md';

const Drawer = () => {
    return (
        <div className='drawer-container'>
            <h1>Dashboard</h1>
            <ul>
                <li><MdOutlineHome /> Home</li>
                <li><MdOutlineContactMail /> Profile</li>
                <li><MdOutlineMessage /> Messages</li>
                <li><MdOutlineTimer /> History</li>
                <li><MdOutlineTask /> Tasks</li>
                <li><MdOutlineGroups /> Communities</li>
            </ul>
            <ul>
                <li><MdOutlineSettings /> Settings</li>
                <li><MdInfoOutline /> Support</li>
                <li><MdOutlineShield /> Privacy</li>
            </ul>
        </div>
    );
};

export default Drawer;