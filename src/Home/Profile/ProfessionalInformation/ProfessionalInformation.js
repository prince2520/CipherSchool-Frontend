import Button from "../../../Helper/Button/Button";

import './ProfessionalInformation.scss';
import {educationInfo} from "./educationInfo";
import Education from "./Education/Education";

const ProfessionalInformation = () => {
    return (
        <div className="professional-info-section">
            <div className="professional-info-section-top">
                <span className="heading">PROFESSIONAL INFORMATION</span>
                <Button/>
            </div>
            <div className="professional-info-bottom">
                {educationInfo.map(education =>
                    <Education
                        label={education.label}
                        options={education.options}
                    />)}

            </div>

        </div>
    )
}

export default ProfessionalInformation;