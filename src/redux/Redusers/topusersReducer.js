
import { GET_ALL_USERS, GET_ERROR, GET_TOP_USERS } from "../type";
const inital={
    users:[],
    loading:true,
}

//reducer to get top users in hom page 
const topusersReducer = (state=inital,action) =>{

    switch(action.type)
    {
        case GET_TOP_USERS:
            return{
                 ...state,
                 users:action.payload,
                 loading:false
            }
            
        case GET_ALL_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
           }
        case GET_ERROR:
            return{
                users:action.payload,
                loading:true
            }    
        default:
            return state;    
    }

}

export default topusersReducer;