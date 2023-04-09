import './ProfessionalInformation.scss';
import {educationInfo} from "./educationInfo";
import Education from "./Education/Education";

import '../../../input.scss'
import {useContext, useState} from "react";
import {buttonStatus} from "../../../common";
import {updateProfessionalInfo} from "../../../api";
import AuthContext from "../../../Context/authCtx";
import {useDispatch} from "react-redux";
import {UserActions} from "../../../store/user";

const ProfessionalInformation = () => {
    const [showEdit, setShowEdit] = useState(true);
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();

    const submitHandler = (event) => {
        event.preventDefault();

        setShowEdit(!showEdit);
        if (!showEdit) {
            let highest_education, currently_doing;

            highest_education = event.target[1].value;
            currently_doing = event.target[2].value;

            updateProfessionalInfo(authCtx.user_id, authCtx.token, highest_education, currently_doing)
                .then((res) =>{
                    dispatch(UserActions.updateProfessionalInfo({
                        highest_education:highest_education,
                        currently_doing :currently_doing
                    }))
                }).catch(err=>console.log(err));

        }
    }


    return (
        <form onSubmit={(event) => submitHandler(event)} className="professional-info-section">
            <div className="professional-info-section-top">
                <span className="heading">PROFESSIONAL INFORMATION</span>
                <button className="edit-save" onClick={() => {
                }}>{showEdit ? buttonStatus[0] : buttonStatus[1]}</button>
            </div>
            <div className="professional-info-bottom">
                {educationInfo.map(education =>
                    <Education
                        showEdit={showEdit}
                        label={education.label}
                        options={education.options}
                    />)}
            </div>
        </form>
    )
}

export default ProfessionalInformation;