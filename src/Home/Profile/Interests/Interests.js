import Button from "../../../Helper/Button/Button";
import Interest from "./Interest/Interest";

const Interests = () => {
    return(
        <div className="interests-section">
            <div className="interests-section-top">
                <span className="heading">INTERESTS</span>
                <Button/>
            </div>
            <div className="interests-section-bottom">
                <Interest/>
            </div>
        </div>

    );
}

export default Interests;