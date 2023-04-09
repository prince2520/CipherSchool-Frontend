import React, {useEffect, useState} from "react";


import './ChangeMode.scss'
import {useDispatch} from "react-redux";
import {CommonActions} from "../../store/common";

const ChangeMode = () => {
    const [selectedCategory, setSelectedCategory] = useState('Dark');
    const dispatch = useDispatch()

    return (
        <div className="change-mode-button">
            {['Dark', 'Light'].map(name => <span style={{cursor:'pointer'}} className={selectedCategory === name && 'selected'} onClick={() => {
                dispatch(CommonActions.changeMode(name))
                setSelectedCategory(name)
            }}>{name}</span>)}
        </div>
    );
};

export default ChangeMode;