import usegettopuser from "../../Hook/usegettopuser"
import { GET_ERROR, GET_RELATED_POSTS } from "../type"
// اي حاجه في ال اكشن لازم تكون)(higherorderfunction)

const getrelatedpostsAction =()=> async(dispatch ) =>{
    
     try {
        //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
        //console.log(res.data)
        const response=await usegettopuser ('users/$id/relatedPosts')
        dispatch({
            type:GET_RELATED_POSTS,
            payload:response.data,
        })
        
     } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error"+e,
        })
     }
}  
export default getrelatedpostsAction;