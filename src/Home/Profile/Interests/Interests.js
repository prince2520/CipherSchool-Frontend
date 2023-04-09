import Interest from "./Interest/Interest";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../../store/overlay";

const Interests = () => {
    const dispatch = useDispatch();

    return (
        <div className="interests-section">
            <div className="interests-section-top">
                <span className="heading">INTERESTS</span>
                <button className="edit-save"
                        onClick={() => dispatch(OverlayActions.showUpdateInterestModelHandler())}>Edit
                </button>
            </div>
            <div className="interests-section-bottom">
                <Interest/>
            </div>
        </div>

    );
}

export default Interests;