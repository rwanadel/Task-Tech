import { GET_CURERNT_USER, GET_ERROR } from "../type";
const inital={
    currtenuser:[],
    loading:true,
}

//reducer to get top users in hom page 
const currtenuserReducer = (state=inital,action) =>{

    switch(action.type)
    {
        case GET_CURERNT_USER:
            return{
                 ...state,
                 currtenuser:action.payload,
                 loading:false
            }
        case GET_ERROR:
            return{
                currtenuser:action.payload,
                loading:true
            }    
        default:
            return state;    
    }

}

export default currtenuserReducer;