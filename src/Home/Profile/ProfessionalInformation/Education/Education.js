import {Icon} from "@iconify/react";

import './Education.scss';

const Education = (props) => {
    return(
        <div className="education-section">
            <div className="label">
                {props.label}
            </div>
            <div className="options-container">
                <span className="selected-option">
                    Graduation
                </span>
                <Icon icon="ic:round-keyboard-arrow-down"/>
            </div>

        </div>
    )

};

export  default  Education;