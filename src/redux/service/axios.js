import axios from "axios";
import { toast } from "react-toastify";

export const baseURL = "https://task-teck.onrender.com/api/v1/";
const toastOption={
  position: "top-right",
  autoClose: false,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
}

const clientFormData = axios.create({
  baseURL,
  headers: { "Content-Type": "multipart/form-data" },
});
const client = axios.create({
  baseURL,
});

export const request = ({ ...options }) => {
  client.defaults.headers.common.Accept = "application/json";
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "jwt"
  )}`;

  clientFormData.defaults.headers.common.Accept = "application/json";
  clientFormData.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "jwt"
  )}`;

  const onSuccess = (response) => {
    console.log("<<Success>>", response.data);
    if (!response.data.success) {
      console.log("Error2");
      throw new Error("somthing is wrong");
    }
    if (options.successMsg)
      toast.success(options.successMsg, toastOption);

     
    return response.data;
  };

  const onError = (err) => { /////////
    console.log("<<ERROR>>", err);
    if (err){
      
        toast.error( "Something went wrong...",toastOption );
      };

    return err;
  };

  if (options.formData) {
    return clientFormData(options).then(onSuccess).catch(onError);
  } else {
    return client(options).then(onSuccess).catch(onError);
  }


}

//usage examples

// export const getPostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "GET" });
//   };
//   export const deletePostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "Delete" });
//   };
// export const getlAllPosts = () => {
//   return request({ url: `/v1/post`, method: "GET" });
// };
//   export const updatePostByID = (id) => {
//     return request({ url: `/v1/post/${id}`, method: "Patch" });
//   };
