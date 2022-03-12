import {configureStore} from '@reduxjs/toolkit';
import actionReducerSlice from '../Reducers/actionReducerSlice';


const store=configureStore({
    reducer:{
        message:actionReducerSlice
    }
})

export default store;