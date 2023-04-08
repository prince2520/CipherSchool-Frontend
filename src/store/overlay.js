import {createSlice} from '@reduxjs/toolkit';

const initialOverlayState = {
    showOverlay: false,
    showLoginSignUpModel: false,
};

const OverlaySlice = createSlice({
    name: 'overlay',
    initialState: initialOverlayState,
    reducers: {
        closeOverlayHandler(state) {
            state.showOverlay = false;
            state.showLoginSignUpModel = false;
        },
        showLoginSignUpModelHandler(state) {
            state.showOverlay = true;
            state.showLoginSignUpModel = true;
        }
    }
});

export const OverlayActions = OverlaySlice.actions;
export default OverlaySlice.reducer;