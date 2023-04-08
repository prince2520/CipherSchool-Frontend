import './Profile.scss';
import {Icon} from "@iconify/react";
import AboutMe from "./AboutMe/AboutMe";
import OnTheWeb from "./OnTheWeb/OnTheWeb";
import ProfessionalInformation from "./ProfessionalInformation/ProfessionalInformation";
import PasswordSecurity from "./PasswordSecurity/PasswordSecurity";
import Interests from "./Interests/Interests";
import CipherMap from "./CipherMap/CipherMap";
import {useContext} from "react";
import AuthContext from "../../Context/authCtx";

const Profile = () => {
    const authCtx = useContext(AuthContext);

    return (
        <div className='profile-page'>
            <div className="profile-page-user-box">
                <div className='profile-page-user-box-back'>
                    <div className='profile-page-user-box-back-content'>
                        <div className="profile-page-user-box-left">
                            <div className="profile-img-container">
                                <div className="profile-img">

                                </div>
                                <div className="profile-img-edit">
                                    <Icon icon="mdi:pencil" style={{fontSize: '1rem', color: 'white'}}/>
                                </div>
                            </div>
                            <div className="user-detail">
                                <span>Hello, </span>
                                <span style={{fontWeight: 'var(--fw-bold)'}}>{authCtx.first_name + ' ' + authCtx.last_name} </span>

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