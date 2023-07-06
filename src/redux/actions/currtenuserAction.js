import usegettopuser from "../../Hook/usegettopuser"
import { GET_CURERNT_USER, GET_ERROR } from "../type"
// اي حاجه في ال اكشن لازم تكون)(higherorderfunction)

const currtenuserAction =()=> async(dispatch) =>{
     try {
        //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
        //console.log(res.data)
        const response=await usegettopuser ('users/6495dd3dd01f19004c40daa3')
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
export default currtenuserAction;