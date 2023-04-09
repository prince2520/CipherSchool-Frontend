import {createSlice} from '@reduxjs/toolkit';

const initialOverlayState = {
    showOverlay: false,
    showLoginSignUpModel: false,
    showPasswordChangeModel: false,
    showUpdateInterestModel: false,
    showProfileUpdateModel: false
};

const OverlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        closeOverlayHandler(state) {
            state.showOverlay = false;
            state.showLoginSignUpModel = false;
            state.showPasswordChangeModel = false;
            state.showUpdateInterestModel = false;
            state.showProfileUpdateModel =false
        },
        showLoginSignUpModelHandler(state) {
            state.showOverlay = true;
            state.showLoginSignUpModel = true;
        },
        showPasswordChangeModelHandler(state) {
            state.showOverlay = true;
            state.showPasswordChangeModel = true;
        },
        showUpdateInterestModelHandler(state){
            state.showOverlay = true;
            state.showUpdateInterestModel = true;
        },
        showProfileUpdateModelHandler(state){
            state.showOverlay = true;
            state.showProfileUpdateModel = true;
        }
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;