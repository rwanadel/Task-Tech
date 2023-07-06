//دي هتعمملي العمليه يعني انا عندي فانكشن جيت ادتها البيز كل اللي عليا استخدمها ف اي اكشن واديها url الخاص باللي انا في 
// custom hook

import baseUrl from "../Api/baseURL";

const usegettopuser =async(url,para)=>{
    const res = await baseUrl.get(url,para);
    return res.data

}
export default usegettopuser;