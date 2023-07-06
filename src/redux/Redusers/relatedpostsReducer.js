import { GET_ERROR, GET_RELATED_POSTS } from "../type";
const inital={
    posts:[],
    loading:true,
}

//reducer to get top users in hom page 
const relatesposts = (state=inital,action) =>{

    switch(action.type)
    {
        case GET_RELATED_POSTS:
            return{
                 ...state,
                 posts:action.payload,
                 loading:false
            }
        case GET_ERROR:
            return{
                posts:action.payload,
                loading:true
            }    
        default:
            return state;    
    }

}

export default relatesposts;