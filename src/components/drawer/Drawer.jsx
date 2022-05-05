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
                <MdDashboard size='3em' />
                <h1>Dashboard</h1>
            </div>
            <ul className='list'>
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
            <ul className='list'>
                <li>
                    <MdOutlineSettings />
                    <span>
                        Settings
                    </span>
                </li>
                <li>
                    <MdInfoOutline />
                    <span>
                        Support
                    </span>
                </li>
                <li>
                    <MdOutlineShield />
                    <span>
                        Privacy
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Drawer;