import './OnTheWeb.scss';
import Button from "../../../Helper/Button/Button";
import {socials} from "./social";
import SocialInput from "./SocialInput/SocialInput";
import {useContext, useState} from "react";
import {updateOnTheWeb} from "../../../api";
import {buttonStatus} from "../../../common";
import AuthCtx from "../../../Context/authCtx";

const OnTheWeb = () => {
    const authCtx = useContext(AuthCtx);
    const [showEdit, setShowEdit] = useState(true);

    const submitFormHandler = (event) => {
        event.preventDefault();

        setShowEdit(!showEdit);

        if (!showEdit) {
            let linkedIn, github, facebook, twitter, instagram, website;

            linkedIn = event.target[1].value;
            github = event.target[2].value;
            facebook = event.target[3].value;
            twitter = event.target[4].value;
            instagram = event.target[5].value;
            website = event.target[6].value;

            updateOnTheWeb(authCtx.user_id, authCtx.token, linkedIn, github, facebook, twitter, instagram, website)
                .then(res => {
                    console.log(res)
                    setShowEdit(true)
                }).catch(err => console.log(err));
        }
    }

    return (
        <form className="onTheWeb-section" onSubmit={(event) => submitFormHandler(event)}>
            <div className="onTheWeb-section-top">
                <span className="heading">ON THE WEB</span>
                <button className='edit-save' type={"submit"}>{showEdit ? buttonStatus[0] : buttonStatus[1]}</button>
            </div>
            <div className="onTheWeb-bottom">
                {socials.map(social =>
                    <SocialInput
                        showEdit={showEdit}
                        label={social.label}
                        placeholder={social.placeholder}
                        icon={social.icon}
                    />)}
            </div>
        </form>
    )
}

export default OnTheWeb;