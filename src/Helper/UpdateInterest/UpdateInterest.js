import './UpdateInterest.scss';
import InterestOption from "./InterestOption/InterestOption";
import {OverlayActions} from "../../store/overlay";
import {useDispatch} from "react-redux";

const interests = [
    'App Development',
    'Web Development',
    'Game Development',
    'Data Structure',
    'Programming',
    'Machine Learning',
    'Data Science',
    'Others'
];

const UpdateInterest = () => {
    const dispatch = useDispatch();

    return (
        <div className="update-interest-container">

            <div className={"update-interest-container-top"}>
                {
                    interests.map(name =>
                        <InterestOption name={name}/>
                    )
                }
            </div>
            <div className={"update-interest-container-bottom"} style={{width:'100%'}}>
                <div className="button-container">
                    <button className='edit-save cancel cancel-btn' onClick={()=>dispatch(OverlayActions.closeOverlayHandler())}>Cancel</button>
                    <button className='edit-save'>Save</button>
                </div>
            </div>


        </div>
    )

}

export default UpdateInterest;