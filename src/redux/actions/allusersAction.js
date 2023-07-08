import usegettopuser from "../../Hook/usegettopuser";
import { GET_ALL_USERS, GET_ERROR } from "../type";

 const getallusersaction =()=> async(dispatch) =>{
    try {
       //const res = await baseUrl.get('users/topuser'); // الجزء ده هشيله وهعوض عن ب هوك هتفدني في حاجات 
       //console.log(res.data)
       const response=await usegettopuser ('users/alluser')
       dispatch({
           type:GET_ALL_USERS,
           payload:response.data,
       })
       
    } catch (e) {
       dispatch({
           type:GET_ERROR,
           payload:"Error"+e,
       })
    }
}  

export default getallusersaction;