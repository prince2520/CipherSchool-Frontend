import './Profile.scss';
import {Icon} from "@iconify/react";
import AboutMe from "./AboutMe/AboutMe";
import OnTheWeb from "./OnTheWeb/OnTheWeb";
import ProfessionalInformation from "./ProfessionalInformation/ProfessionalInformation";
import PasswordSecurity from "./PasswordSecurity/PasswordSecurity";
import Interests from "./Interests/Interests";
import CipherMap from "./CipherMap/CipherMap";
import {useContext, useEffect} from "react";
import AuthContext from "../../Context/authCtx";
import {useDispatch, useSelector} from "react-redux";
import {OverlayActions} from "../../store/overlay";
import {getProfileDetail} from "../../api";
import {UserActions} from "../../store/user";

const Profile = () => {
    const authCtx = useContext(AuthContext);
    const dispatch = useDispatch();

    const auth = useSelector(state => state.user)
    useEffect(()=>{
        getProfileDetail(authCtx.user_id, authCtx.token).then(res=>{
            dispatch(UserActions.saveProfileData(res.user))
        }).catch(err=>console.log(err));
    },[])

    return (
        <div className='profile-page'>
            <div className="profile-page-user-box">
                <div className='profile-page-user-box-back'>
                    <div className='profile-page-user-box-back-content'>
                        <div className="profile-page-user-box-left">
                            <div className="profile-img-container">
                                <div className="profile-img">
                                    <img src={auth.profile_img}/>
                                </div>
                                <div className="profile-img-edit" onClick={()=>dispatch(OverlayActions.showProfileUpdateModelHandler())}>
                                    <Icon icon="mdi:pencil" style={{fontSize: '1rem', color: 'white'}}/>
                                </div>
                            </div>
                            <div className="user-detail">
                                <span>Hello, </span>
                                <span style={{fontWeight: 'var(--fw-bold)'}}>{auth.first_name + ' ' + auth.last_name} </span>

                                <span>{authCtx.email}</span>
                            </div>
                        </div>
                        <div className="profile-page-user-box-right">
                            <span>0 Followers</span>
                        </div>

                    </div>

                </div>

            </div>
            <AboutMe/>
            <CipherMap/>
            <OnTheWeb/>
            <ProfessionalInformation/>
            <PasswordSecurity/>
            <Interests/>
        </div>
    )
};

export default Profile;