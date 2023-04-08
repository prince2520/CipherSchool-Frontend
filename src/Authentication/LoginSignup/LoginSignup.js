import './LoginSignup.scss';
import {Icon} from "@iconify/react";

import Logo from '../../Materials/Logo.png';
import SignUpForm from "./SignUpForm/SignUpForm";
import LoginForm from "./LoginForm/LoginForm";
import {useState} from "react";
import {OverlayActions} from "../../store/overlay";
import {useDispatch} from "react-redux";

const LoginSignup = () => {
    const [loginSelected, setLoginSelected] = useState(true);
    const dispatch = useDispatch();

    return (
        <div className="login-signup-container">
            <div className="login-signup-container-top">
                <span className='heading' style={{fontSize: '1.75rem'}}>Sign Up</span>
                <span className='close' onClick={() => dispatch(OverlayActions.closeOverlayHandler())}>
                    <Icon icon="material-symbols:close-rounded"
                          style={{fontSize: '2rem', color: 'var(--text-color2)'}}/>
                </span>
            </div>
            <div className="login-signup-container-bottom">
                <div className="login-signup-container-bottom-top">
                    <div className="form-logo">
                        <img src={Logo} style={{width: '2.5rem'}}/>
                        <span className="heading">
                            CipherSchools
                        </span>
                    </div>
                    <div className="form-detail">
                        <span style={{fontSize: '1.1rem', fontWeight: '600', color: 'var(--heading)'}}>
                            {loginSelected ? 'Hey, Welcome!' : 'Create New Account'}
                        </span>
                        <span style={{fontSize: '0.9rem', fontWeight: '500', color: 'var(--paragraph)'}}>
                            {loginSelected ? 'Please provide your email and password to signin'
                                : 'Please provide your valid information to signup'}
                        </span>
                    </div>

                </div>

                <div className="login-signup-container-bottom-bottom">
                    {loginSelected ? <LoginForm/> : <SignUpForm/>}
                </div>

                <div className="or-bar">
                    <hr/>
                    <span className="or-box">OR</span>
                </div>

                <div className="form-change">
                    <span>{loginSelected ? 'Don\'t have an account ?' : 'Already have an account?'}</span>
                    <span style={{cursor: 'pointer', color: 'var(--sidebar-tab-active)'}}>{loginSelected ?
                        <span onClick={() => setLoginSelected(false)}>Get Started</span> :
                        <span onClick={() => setLoginSelected(true)}>SignIn Now</span>}</span>
                </div>

            </div>

        </div>
    )
};

export default LoginSignup;