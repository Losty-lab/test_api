import { setMessageView } from "../Reducers/actionReducerSlice";
import axios from 'axios';



export const sendMessage=()=>dispatch=>{


        axios.get("/api/message").then(resp=>{
            console.log('RESP',resp.data.message)
            dispatch(setMessageView(resp.data.message))
        })

    
}


export const selectMessage=(state)=>state.message