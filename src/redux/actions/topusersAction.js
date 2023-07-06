
import usegettopuser from "../../Hook/usegettopuser"
import { GET_CURERNT_USER, GET_ERROR, GET_TOP_USERS } from "../type"
// اي حاجه في ال اكشن لازم تكون)(higherorderfunction)

const gettopusersaction =()=> async(dispatch) =>{
     try {
        //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
        //console.log(res.data)
        const response=await usegettopuser ('users/topuser')
        dispatch({
            type:GET_TOP_USERS,
            payload:response.data,
        })
        
     } catch (e) {
        dispatch({
            type:GET_ERROR,
            payload:"Error"+e,
        })
     }
}  


export const getallusersaction =()=> async(dispatch) =>{
    try {
       //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
       //console.log(res.data)
       const response=await usegettopuser ('users/alluser')
       dispatch({
           type:GET_CURERNT_USER,
           payload:response.data,
       })
       
    } catch (e) {
       dispatch({
           type:GET_ERROR,
           payload:"Error"+e,
       })
    }
}  




export default gettopusersaction ;
