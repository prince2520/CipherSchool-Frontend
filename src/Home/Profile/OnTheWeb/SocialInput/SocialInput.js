import {Icon} from "@iconify/react";

import './SocialInput.scss';
import {useEffect, useState} from "react";
import {socials} from "../social";
import {useSelector} from "react-redux";

const SocialInput = (props) => {
    const [value, setValue] = useState('');
    const auth = useSelector(state => state.user);

    useEffect(()=>{
        console.log(props.label)
        let data = ''
        switch (props.label){
            case socials[0]:
                data = auth.socials.linkedIn;
                break;
            case socials[1]:
                data = auth.socials.github;
                break;
            case socials[2]:
                data = auth.socials.facebook;
                break;
            case socials[3]:
                data = auth.socials.twitter;
                break;
            case socials[5]:
                data = auth.socials.instagram;
                break;
            default:
                data = auth.socials.instagram;
        }
        setValue(data ? data : '')
    },[props.label])


    return (
        <div className="social-input">
            <label htmlFor={props.label}>{props.label}</label>
            <div className="input-container">
                <Icon icon={props.icon} style={{fontSize: '2rem', color:'var(--paragraph)'}}/>
                <input defaultValue={value} disabled={props.showEdit} placeholder={props.placeholder}/>
            </div>
        </div>
    );
}

export default SocialInput;