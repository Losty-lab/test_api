import {createSlice} from '@reduxjs/toolkit';



const messageResults=createSlice({
    name:'messageResults',
    initialState:{
        message:''
    },
    reducers:{

        setMessageView(state,action){

            state.message=action.payload
        }
    }
})

export const {setMessageView}=messageResults.actions;

export default messageResults.reducer;