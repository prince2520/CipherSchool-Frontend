import {Icon} from "@iconify/react";

import './Education.scss';
import {useState} from "react";
import {educationInfo} from "../educationInfo";
import {useSelector} from "react-redux";

const Education = (props) => {
    const [showOptions, setShowOptions] = useState(false);
    const auth = useSelector(state => state.user)
    const [selectedOption, setSelectedOption] = useState();

    return(
        <div className="education-section">
            <div className="label">
                {props.label}
            </div>
            <div className="options-container" onClick={()=>setShowOptions(!showOptions)}>
                <input defaultValue={props.label === educationInfo[0].label ? auth.professionalInfo.highest_education : auth.professionalInfo.currently_doing} disabled={true} value={selectedOption} className="selected-option"/>
                {!props.showEdit && showOptions && <div className="options">
                    {props.options.map(res => <span onClick={()=>setSelectedOption(res)} className={`option ${res===selectedOption ? 'selected' : ''}`}>{res}</span>)}
                </div>}
                <Icon icon="ic:round-keyboard-arrow-down"/>
            </div>

        </div>
    )

};

export  default  Education;