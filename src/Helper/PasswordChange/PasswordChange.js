import '../../input.scss'

import './PasswordChange.scss'
import {Icon} from "@iconify/react";
import {useContext, useRef, useState} from "react";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../store/overlay";
import AuthContext from "../../Context/authCtx";
import {updateAboutMe, updatePassword} from "../../api";

const PasswordChange = () =>{
    const [showCurrPassword, setShowCurrPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const currPasswordRef = useRef();
    const newPasswordRef = useRef();
    const confirmPasswordRef = useRef();

    const dispatch = useDispatch()

    const authCtx = useContext(AuthContext);

    const saveHandler = () => {

        let password, new_password, confirm_password;

        password = currPasswordRef.current.value;
        new_password = newPasswordRef.current.value;
        confirm_password = confirmPasswordRef.current.value;

        console.log(password, new_password, confirm_password)

        updatePassword(authCtx.email, authCtx.token, password, new_password, confirm_password )
            .then((res) => {
                console.log(res)
                // dispatch(OverlayActions.closeOverlayHandler())
            }).catch(err => console.log(err))
    }
    return(
        <div className='password-change-container'>
            <label htmlFor="current-password">Current Password</label>
            <div className="input-container">
                <input ref={currPasswordRef} type={!showCurrPassword ? 'password' : 'text'} placeholder='Password'/>
                <Icon
                    icon={!showCurrPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                    onClick={() => setShowCurrPassword(!showCurrPassword)}
                    style={{fontSize: '1.75rem', color: 'var(--heading)'}}/>
            </div>
            <label htmlFor="current-password">New Password</label>
            <div className="input-container">
                <input ref={newPasswordRef} type={!showNewPassword ? 'passsword' : 'text'} placeholder='Password'/>
                <Icon
                    icon={!showNewPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    style={{fontSize: '1.75rem', color: 'var(--heading)'}}/>
            </div>

            <label htmlFor="current-password">Confirm Password</label>
            <div className="input-container">
                <input ref={confirmPasswordRef} type={!showConfirmPassword ? 'password' : 'text'} placeholder='Password'/>
                <Icon
                    icon={!showConfirmPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    style={{fontSize: '1.75rem', color: 'var(--heading)'}}/>
            </div>

            <div className="button-container">
                <button className='edit-save cancel cancel-btn' onClick={()=>dispatch(OverlayActions.closeOverlayHandler())}>Cancel</button>
                <button className='edit-save' onClick={()=>saveHandler()}>Save</button>
            </div>

        </div>
    );
}

export default PasswordChange;