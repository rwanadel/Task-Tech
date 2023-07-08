import usegettopuser from "../../Hook/usegettopuser"
import { request } from "../service/axios"
import { GET_CURERNT_USER, GET_ERROR } from "../type"
// اي حاجه في ال اكشن لازم تكون)(higherorderfunction)

const currtenuserAction =(id)=> async(dispatch) =>{
     try {
        //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
        //console.log(res.data)
        //const data=new FormData() to post photo
        //data.append("photo","")

        //formData:true,data //after method
        const response=await request ({url:`users/${id}`,method:'GET'})
        console.log(response)
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