import './Sidebar.scss';
import {Icon} from "@iconify/react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {OverlayActions} from "../../store/overlay";
import {useContext} from "react";
import AuthCtx from "../../Context/authCtx";

const SideBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const authCtx = useContext(AuthCtx);

    return (
        <div className='sidebar-tab'>
            <div className="category-box-top">
                <div className="category-box"style={{cursor:'pointer'}}  onClick={()=>navigate('follower')}>
                    <Icon icon="fa-solid:user-check" style={{fontSize: '1.25rem'}}/>
                    <span className="category-name" >Followers</span>
                </div>
            </div>
            <div className="category-box-bottom">
                <div className="category-box" style={{cursor:'pointer'}}  onClick={()=> {
                    navigate('profilepage/my-profile')
                }}>
                    <Icon icon="material-symbols:account-circle-outline"
                          style={{fontSize: '1.25rem'}}/> <span
                    className="category-name">Profile</span>
                </div>
                {authCtx.isAuth && <div className="category-box" style={{cursor: 'pointer'}} onClick={() => authCtx.logoutHandler()}>
                    <Icon icon="streamline:interface-logout-circle-arrow-enter-right-logout-point-circle"
                          style={{fontSize: '1.25rem'}}/> <span
                    className="category-name">Logout</span>
                </div>}
                {!authCtx.isAuth && <div className="category-box" style={{cursor: 'pointer'}} onClick={() => dispatch(OverlayActions.showLoginSignUpModelHandler())}>
                    <Icon icon="streamline:interface-logout-circle-arrow-enter-right-logout-point-circle"
                          style={{fontSize: '1.25rem'}}/> <span
                    className="category-name">SignIn</span>
                </div>}
            </div>
        </div>
    );
};

export default SideBar;