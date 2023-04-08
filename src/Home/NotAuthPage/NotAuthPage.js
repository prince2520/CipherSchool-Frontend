import './NotAuthPage.scss';
import NotAuthImg from '../../Materials/NotFound.png'
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../store/overlay";
const NotAuthPage = () => {
    const dispatch = useDispatch();
    return(
        <div className="not-auth-page">

            <div className="not-auth-page-container">
                <img src={NotAuthImg}/>
                <button onClick={()=>dispatch(OverlayActions.showLoginSignUpModelHandler())}>Signin to proceed</button>
            </div>

        </div>
    )

}

export default NotAuthPage;