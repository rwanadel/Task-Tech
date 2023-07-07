import {
  ADD_ERROR_MESSAGE,
  ADD_SUCCESS_MESSAGE,
  ADD_USER_DATA,
  // CREATE_NEW_USER,
  // SIGNIN_USER,
} from "../type";

import { insertData } from "../../Hook/useInsertData";
import axios from "axios";
import { BackendURL } from "../../constants";
// import { useGetData, useGetDataToken } from './../../hooks/useGetData';
// import { useInsUpdateData } from '../../hooks/useUpdateData';

//create new user
export const createNewUser = (data) => async (dispatch) => {
  const { setLoading, ...restData } = data;
  try {
    setLoading(true);
    // const response = await insertData(`register`, restData);
    const response = await axios.post(BackendURL+'/register', restData);
    if(response.status === 200){
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    }
    setLoading(false);
  
    dispatch({
      type: ADD_SUCCESS_MESSAGE,
      payload: "User created successfully,",
    });

    // res.data.token + res.data.data.user
    const { user } = response?.data?.data;
    const { token } = response?.data;
    if (user && token) {
      localStorage.setItem("userData", JSON.stringify({ user, token }));
    }
    dispatch({
      type: ADD_USER_DATA,
      payload: { user, token },
    });
  } catch (e) {
    setLoading(false);
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: e?.response?.data?.message ?? "Please try again later",
    });
  }
};

//Sign in User
export const SignInUser = (data) => async (dispatch) => {
  const { setIsLoading, ...restData } = data;
  try {
    setIsLoading(true);
    // {
    //   data: {
    //     token: string;
    //     data: {
    //       user
    //     }
    //   } 
    // }
    const response = await axios.post(BackendURL+'/users/login', restData);
    console.log(response.data);
    if(response.status === 200){
      axios.defaults.headers.common.Authorization = `Bearer ${response.data.token}`;
    }
    setIsLoading(false);
    
    const { user } = response?.data?.data;
    const { token } = response?.data;
    if (user && token) {
      localStorage.setItem("userData", JSON.stringify({ user, token }));
    }
    dispatch({
      type: ADD_USER_DATA,
      payload: { user, token },
    });
  } catch (e) {
    setIsLoading(false);
    dispatch({
      type: ADD_ERROR_MESSAGE,
      payload: e?.response?.data?.message ?? "Please try again later",
    });
  }
};
