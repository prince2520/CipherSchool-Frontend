import {createSlice} from '@reduxjs/toolkit';

const initialUserState = {
    first_name: '',
    last_name: '',
    email: '',
    phone_num: '',
    profile_img: '',
    about_me: '',
    socials: {},
    professionalInfo: {},
    interests: [],
    followers: []
};


const UserSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        saveProfileData(state, action) {
            state.first_name = action.payload.first_name
            state.last_name = action.payload.last_name
            state.email = action.payload.email
            state.profile_img = action.payload.profile_img
            state.phone_num = action.payload.phone_num
            state.about_me = action.payload.about_me
            state.socials = action.payload.socials
            state.professionalInfo = action.payload.professionalInfo
            state.interests = action.payload.interests
            state.followers = action.payload.followers
            console.log('state', state)
        },
        updateAboutMe(state,action){
            state.about_me = action.payload
        },
        updateSocials(state, action){
            state.socials = action.payload
        },
        updateProfessionalInfo(state, action){
            state.professionalInfo = action.payload
        },
        updateInterests(state, action){
            state.interests = action.payload
        },
        updateFollowers(state, action){
            state.followers = action.followers
        },
        updateProfileData(state, action){
            state.first_name = action.payload.first_name;
            state.last_name = action.payload.last_name;

            console.log(action.payload.phone_num)

            if(action.payload.phone_num)
                state.phone_num = action.payload.phone_num

            if(action.payload.profile_img)
                state.profile_img = action.payload.profile_img
        }
    }
});

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;