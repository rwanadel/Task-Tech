import { GET_ALL_USERS, GET_ERROR } from "../type";


const inital={
    all:[],
    loading2:true,
}
//reducer to get all in hom page 
const allusersReducer = (state=inital,action) =>{

    switch(action.type)
    {
        case GET_ALL_USERS:
            return{
                ...state,
                all:action.payload,
                loading2:false
           }
        case GET_ERROR:
            return{
                all:action.payload,
                loading2:true
            }    
        default:
            return state;    
    }

}
export default allusersReducer;