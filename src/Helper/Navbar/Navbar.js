
import Logo from '../../Materials/Logo.png'

import './Navbar.scss';
import {Icon} from "@iconify/react";
import ChangeMode from "../ChangeMode/ChangeMode";

const Navbar = () => {
    return (
        <div className="navbar-box">
            <div className="navbar-box-left">
                <Icon icon={'heroicons-outline:menu-alt-2'} style={{fontSize: '1.5rem', color: 'var(--text-color)'}}/>
                <img src={Logo} style={{height:'2.5rem'}}/>
                <span style={{fontSize: '1.25rem', fontWeight: '700', color:'var(--text-color)'}}>CiperSchools</span>
                <div className="browse-container">
                    <Icon icon="ph:compass" style={{fontSize: '1rem'}}/>
                    <span>Browse</span>
                    <span><Icon icon='material-symbols:keyboard-arrow-down-rounded'/></span>
                </div>
            </div>
            <div className="navbar-box-right">
                <div className="search-bar">
                    <Icon icon="material-symbols:search-rounded" style={{color:'var(--text-color)'}}/>
                    <input placeholder={'Search and Learn'}/>
                    <Icon icon="mi:filter" style={{color:'var(--text-color)'}} />
                </div>
                <div className="notification-container">
                    <Icon icon="mdi:bell-outline"style={{fontSize:'1.5rem', color:'var(--text-color)'}}/>
                </div>
                <div className="profile-img-container">

                </div>
                <div className="cipher-points">
                    <img src={Logo} style={{height:'1.5rem'}}/>
                    <span>0</span>
                </div>
                <ChangeMode/>
            </div>

        </div>
    );
};

export default Navbar;