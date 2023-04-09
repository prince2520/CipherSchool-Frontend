import {configureStore} from "@reduxjs/toolkit";
import overlayReducer from './overlay';
import userReducer from './user';
import commonReducer from './common';

const store = configureStore({
    reducer: {
        overlay: overlayReducer,
        user: userReducer,
        common: commonReducer
    }
});

export default store;