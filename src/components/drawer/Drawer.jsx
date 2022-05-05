import './Drawer.styles.scss';
import {
    MdDashboard,
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
            <div className='drawer-header'>
                <MdDashboard size='2em' />
                <h1>Dashboard</h1>
            </div>
            <ul className='list-1'>
                <li>
                    <MdOutlineHome />
                    <span>
                        Home
                    </span>
                </li>
                <li>
                    <MdOutlineContactMail />
                    <span>
                        Profile
                    </span>
                </li>
                <li>
                    <MdOutlineMessage />
                    <span>
                        Messages
                    </span>
                </li>
                <li>
                    <MdOutlineTimer />
                    <span>
                        History
                    </span>
                </li>
                <li>
                    <MdOutlineTask />
                    <span>
                        Tasks
                    </span>
                </li>
                <li>
                    <MdOutlineGroups />
                    <span>
                        Communities
                    </span>
                </li>
            </ul>
            <ul className='list-2'>
                <li><MdOutlineSettings /> Settings</li>
                <li><MdInfoOutline /> Support</li>
                <li><MdOutlineShield /> Privacy</li>
            </ul>
        </div>
    );
};

export default Drawer;