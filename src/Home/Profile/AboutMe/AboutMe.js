import './AboutMe.scss'
import Button from "../../../Helper/Button/Button";
import {buttonStatus} from "../../../common";
import {useContext, useRef, useState} from "react";
import {updateAboutMe} from "../../../api";
import AuthContext from "../../../Context/authCtx";

import '../../../Button.scss';
import {useSelector} from "react-redux";

const AboutMe = () => {
    const inputRef = useRef();
    const authCtx = useContext(AuthContext);
    const [showEdit, setShowEdit] = useState(true);
    const saveHandler = () => {
        let about_me = inputRef.current.value;

        if(!showEdit){
            updateAboutMe(authCtx.user_id, authCtx.token, about_me)
                .then((res) => {
                    setShowEdit(true)
                }).catch(err => console.log(err))
        }
    }

    const about_me = useSelector(state => state.user.about_me)

    return (
        <div className="about-me-section">
            <div className="about-me-section-top">
                <span>ABOUT ME</span>
                <button className='edit-save' onClick={()=>{
                    setShowEdit(!showEdit)
                    saveHandler()}
                }>{showEdit ? buttonStatus[0] : buttonStatus[1]}</button>
            </div>
            <div className="about-me-section-bottom">
                <textarea defaultValue={about_me} disabled={showEdit} ref={inputRef} placeholder="Add Something about you."/>
            </div>
        </div>

);
}

export default AboutMe;