import {ReactComponent as Logo} from '../../Materials/LogoSvg.svg';


import './Navbar.scss';
import {Icon} from "@iconify/react";

const Navbar = () => {
    return (
        <div className="navbar-box">
            <div className="navbar-box-left">
                <Icon icon={'heroicons-outline:menu-alt-2'} style={{fontSize: '1.5rem'}}/>
                <Logo/>
                <span style={{fontSize: '1.25rem', fontWeight: '700'}}>CiperSchools</span>
                <div className="browse-container">
                    <Icon icon="ph:compass" style={{fontSize: '1rem'}}/>
                    <span>Browse</span>
                    <Icon icon='material-symbols:keyboard-arrow-down-rounded' />
                </div>
            </div>
            <div className="navbar-box-right">
                <div className="search-bar">
                    <Icon icon="material-symbols:search-rounded" />
                    <input placeholder={'Search and Learn'}/>
                    <Icon icon="mi:filter" />
                </div>
                <div className="notification-container">
                    <Icon icon="mdi:bell-outline" style ={{fontSize: '1.5rem'}} />
                </div>
                <div className="profile-img-container">

                </div>
                <div className="cipher-points">
                    <Logo/>
                    <span>0</span>
                </div>

            </div>

        </div>
    );
};

export default Navbar;