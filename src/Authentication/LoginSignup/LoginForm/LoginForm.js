import {Icon} from "@iconify/react";
import {useContext, useState} from "react";
import AuthContext from "../../../Context/authCtx";

const LoginForm = () =>{
    const [showPassword, setShowPassword] = useState(false);
    const authCtx = useContext(AuthContext);

    const submitHandler = (event) => {
        event.preventDefault();

        let email, password;

        email = event.target[0].value;
        password = event.target[1].value;

        authCtx.loginHandler(email, password);
    }

    return(
        <form className="login-form" onSubmit={event => submitHandler(event)}>
            <div className="input-container">
                <input type="email" placeholder='Email Address'/>
            </div>
            <div className="input-container">
                <input type={!showPassword ? 'password' : 'text'} placeholder='Password'/>
                <Icon
                    icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{fontSize: '1.75rem', color: 'var(--heading)'}}/>
            </div>

            <button> Sign In </button>
        </form>
    );
};

export default LoginForm;