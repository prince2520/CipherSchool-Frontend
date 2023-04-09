import {Icon} from "@iconify/react";
import {useContext, useState} from "react";
import AuthCtx from "../../../Context/authCtx";
const SignUpForm = () =>{
    const [showPassword, setShowPassword] = useState(false);
    const authCtx = useContext(AuthCtx);

    const submitHandler = (event) => {
        event.preventDefault();

        let first_name, last_name, email, phone_num, password;

        first_name = event.target[0].value;
        last_name = event.target[1].value;
        email = event.target[2].value;
        phone_num = event.target[3].value;
        password = event.target[4].value;

        console.log(first_name, last_name, email, phone_num, password)

        authCtx.signUpHandler(first_name, last_name, email, phone_num, password)
    }

    return(
        <form className="signup-form" onSubmit={(event) => submitHandler(event)}>
            <div className="input-container">
                <input type="text" placeholder='First Name'/>
            </div>
            <div className="input-container">
                <input type="text" placeholder='Last Name'/>
            </div>
            <div className="input-container">
                <input type="email" placeholder='Email Address'/>
            </div>
            <div className="input-container">
                <input type="text" placeholder='Phone (Optional)'/>
            </div>
            <div className="input-container">
                <input type={!showPassword ? 'password' : 'text'} placeholder='Password'/>
                <Icon
                    icon={!showPassword ? `mdi:eye-off-outline` : 'mdi:eye-outline'}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{fontSize: '1.75rem', color: 'var(--heading)'}}/>
            </div>

            <button> Create Account </button>
        </form>
    );

};

export default SignUpForm;