import './PasswordSecurity.scss';
import Button from "../../../Helper/Button/Button";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../../store/overlay";
import {buttonStatus} from "../../../common";

import '../../../Button.scss';


const PasswordSecurity = () => {
    const dispatch = useDispatch();

    return (
        <div className="password-security-section">
            <div className="password-security-section-top">
                <span className="heading">PASSWORD & SECURITY</span>
                <button className='edit-save' onClick={()=>dispatch(OverlayActions.showPasswordChangeModelHandler())}>{buttonStatus[2]}</button>
            </div>
            <div className="password-security-bottom">
                <label htmlFor="password">Password</label>
                <div className="password">**************</div>
            </div>
        </div>
    )
}

export default PasswordSecurity;