import {OverlayActions} from "../../store/overlay";
import {Icon} from "@iconify/react";
import {useDispatch, useSelector} from "react-redux";

import Resizer from "react-image-file-resizer";

import {getDownloadURL, ref, uploadBytesResumable} from 'firebase/storage'

import './ProfileUpdate.scss'
import {useContext, useEffect, useRef, useState} from "react";
import {storage} from "../../firebase";
import AuthContext from "../../Context/authCtx";
import {updateProfile} from "../../api";
import {UserActions} from "../../store/user";

const ProfileUpdate = () => {
    const dispatch = useDispatch();
    const [profileImage, setProfileImage] = useState(null);

    const auth = useSelector(state=>state.user)

    const authCtx = useContext(AuthContext);

    const imgRef = useRef();
    const [preview, setPreview] = useState(null);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const phoneNumRef = useRef();


    useEffect(() => {
        if (profileImage) {
            const readImg = new FileReader();
            readImg.onloadend = () => {
                setPreview(readImg.result);
            }
            readImg.readAsDataURL(profileImage)
        } else {
            setPreview(null)
        }
    }, [profileImage])

    const saveProfileDetail = async () => {
        let first_name, last_name, phone_num;
        first_name = firstNameRef.current.value;
        last_name = lastNameRef.current.value;
        phone_num = phoneNumRef.current.value;


        if (profileImage) {
            let imageRef = ref(storage, `images/${authCtx.email}`);
            const uploadTask = uploadBytesResumable(imageRef, profileImage);
            await uploadTask.on('state_changed',
                (snapshot) => {
                },
                (error) => {
                },
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((profile_photo) => {
                        updateProfile(authCtx.user_id, authCtx.token, profile_photo, first_name, last_name, phone_num).then(res=>{
                            dispatch(UserActions.updateProfileData({
                                first_name: first_name,
                                last_name: last_name,
                                phone_num: phone_num,
                                profile_img: profile_photo
                            }));
                            dispatch(OverlayActions.closeOverlayHandler());
                        }).catch(err=>console.log(err));
                    }).catch(err => console.log())
                });
        }else {
            updateProfile(authCtx.user_id, authCtx.token, null, first_name, last_name, phone_num).then(res=>{
                dispatch(UserActions.updateProfileData({
                    first_name: first_name,
                    last_name: last_name,
                    phone_num: phone_num ? phone_num : '',
                    profile_img: null
                }));
                dispatch(OverlayActions.closeOverlayHandler());
            }).catch(err=>console.log(err));
        }
    }

    return (
        <div className="profile-update-container">
            <div className="profile-update-container-top">
                <span className='heading' style={{fontSize: '1.75rem'}}>Profile Update</span>
                <span className='close' onClick={() => dispatch(OverlayActions.closeOverlayHandler())}>
                    <Icon icon="material-symbols:close-rounded"
                          style={{fontSize: '2rem', color: 'var(--text-color2)'}}/>
                </span>
            </div>
            <div className="profile-update-container-bottom">
                <div className="profile-img-container">
                    <div className="profile-img">
                        <img src={preview ? preview : auth.profile_img} alt="profile-photo"/>
                    </div>
                    <div className="profile-img-edit"
                         style={{width:'2rem', height:"2rem"}}
                         onClick={() => dispatch(OverlayActions.showProfileUpdateModelHandler())}>
                        <Icon icon="mdi:pencil" style={{fontSize: '1rem', color: 'white'}}
                              onClick={() => imgRef.current.click()}/>
                        <input
                            ref={imgRef}
                            type={"file"}
                            style={{display: 'none'}}
                            onChange={(event) => {
                                const file = event.target.files[0]
                                if (file && file.type.substr(0, 5) === "image") {
                                    try {
                                        Resizer.imageFileResizer(
                                            event.target.files[0],
                                            300,
                                            300,
                                            "JPEG",
                                            100,
                                            0,
                                            (uri) => {
                                                setProfileImage(uri)
                                            },
                                            "blob",
                                            200,
                                            200
                                        );
                                    } catch (err) {
                                        console.log(err);
                                    }
                                } else {
                                    setProfileImage(null)
                                }
                            }}
                        />
                    </div>
                </div>
                <div className={'profile-update-container-bottom-right'}>
                    <label htmlFor="current-password">First Name</label>
                    <div className="input-container">
                        <input defaultValue={auth.first_name} ref={firstNameRef} placeholder='First Name'/>
                    </div>

                    <label htmlFor="current-password">Last Name</label>
                    <div className="input-container">
                        <input defaultValue={auth.last_name} ref={lastNameRef} placeholder='Last Name'/>
                    </div>

                    <label htmlFor="current-password">Email</label>
                    <div className="input-container">
                        <input value={authCtx.email} placeholder='Email'/>
                    </div>

                    <label htmlFor="current-password">Phone Number</label>
                    <div className="input-container">
                        <input defaultValue={auth.phone_num} ref={phoneNumRef} placeholder='Phone Number'/>
                    </div>

                    <div className="button-container">
                        <button className='edit-save cancel cancel-btn' onClick={()=>dispatch(OverlayActions.closeOverlayHandler())}>Cancel</button>
                        <button className='edit-save' onClick={()=>saveProfileDetail()}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfileUpdate;