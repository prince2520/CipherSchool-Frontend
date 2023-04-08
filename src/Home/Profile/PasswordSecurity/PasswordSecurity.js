import './PasswordSecurity.scss';
import Button from "../../../Helper/Button/Button";


const OnTheWeb = () => {
    return (
        <div className="password-security-section">
            <div className="password-security-section-top">
                <span className="heading">PASSWORD & SECURITY</span>
                <Button/>
            </div>
            <div className="password-security-bottom">
                <label htmlFor="password">Password</label>
                <div className="password">**************</div>
            </div>
        </div>
    )
}

export default OnTheWeb;