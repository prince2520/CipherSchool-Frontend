import {createSlice} from '@reduxjs/toolkit';

const initialCommonState = {
    darkMode: false
};


const CommonSlice = createSlice({
    name: 'common',
    initialState: initialCommonState,
    reducers: {
        changeMode(state,action) {
            if(action.payload==='Dark'){
                state.darkMode = true;
            }else {
                state.darkMode = false
            }
        }
    }
});

export const CommonActions = CommonSlice.actions;
export default CommonSlice.reducer;