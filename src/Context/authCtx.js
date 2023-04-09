import React, {useEffect, useState} from "react";

import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {serverUrl} from "../api";
import {OverlayActions} from "../store/overlay";


const AuthContext = React.createContext({
    loginHandler: (email, password) => {
    },
    signUpHandler: (first_name, last_name, email, phone_num, password) => {
    },
    logoutHandler: () => {
    },
    autoLogout: () => {
    },
    isAuth: false,
    email: '',
    first_name: '',
    last_name: '',
    user_id: '',
    token:''
});

export const AuthContextProvider = (props) => {
    const [isAuth, setIsAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState(null);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const autoLogout = (milliseconds) => {
        setTimeout(() => {
            logoutHandler();
        }, milliseconds)
    }

     const signUpHandler =  (first_name, last_name, email, phone_num, password) => {
        fetch(`${serverUrl}/auth/signup`,{
            method:'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body:JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                email: email,
                phone_num:phone_num,
                password : password
            })
        }).then(res=>res.json()).then((res)=>console.log(res)).catch(err=>console.log(err))
    };

    const loginHandler = (email, password) => {
        fetch(`${serverUrl}/auth/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(result => {
                console.log('user', result);
                setFirstName(result.first_name)
                setLastName(result.last_name)
                setEmail(result.email)
                setUserId(result.user_id);
                setToken(result.token)
                dispatch(OverlayActions.closeOverlayHandler());
                setIsAuth(result.isAuth)
            })
            .catch(err => console.log(err));
    }

    const logoutHandler = () => {
        setFirstName('')
        setLastName('')
        setEmail('')
        setIsAuth(false);
        localStorage.clear();
        navigate('')
    };

    return (
        <AuthContext.Provider value={{
            loginHandler: loginHandler,
            signUpHandler: signUpHandler,
            logoutHandler: logoutHandler,
            autoLogout: autoLogout,
            isAuth: isAuth,
            email: email,
            first_name: firstName,
            last_name: lastName,
            user_id: userId,
            token: token
        }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;