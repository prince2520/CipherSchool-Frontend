import './OnTheWeb.scss';
import Button from "../../../Helper/Button/Button";
import {socials} from "./social";
import SocialInput from "./SocialInput/SocialInput";

const OnTheWeb = () => {
    return (
        <div className="onTheWeb-section">
            <div className="onTheWeb-section-top">
                <span className="heading">ON THE WEB</span>
                <Button/>
            </div>
            <div className="onTheWeb-bottom">
                {socials.map(social =>
                    <SocialInput
                        label={social.label}
                        placeholder={social.placeholder}
                        icon ={social.icon}
                    />)}

            </div>

        </div>
    )
}

export default OnTheWeb;