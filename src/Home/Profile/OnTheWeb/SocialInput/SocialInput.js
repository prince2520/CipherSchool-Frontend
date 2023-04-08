import {Icon} from "@iconify/react";

import './SocialInput.scss';

const SocialInput = (props) => {
    return (
        <div className="social-input">
            <label htmlFor={props.label}>{props.label}</label>
            <div className="input-container">
                <Icon icon={props.icon} style={{fontSize: '2rem', color:'var(--paragraph)'}}/>
                <input placeholder={props.placeholder}/>
            </div>

        </div>
    );
}

export default SocialInput;