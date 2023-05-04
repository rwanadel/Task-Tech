import {
  ADD_ERROR_MESSAGE,
  ADD_SUCCESS_MESSAGE,
  ADD_USER_DATA,
  // CREATE_NEW_USER,
  // SIGNIN_USER,
} from "../type";

import { insertData } from "../../Hook/useInsertData";
// import { useGetData, useGetDataToken } from './../../hooks/useGetData';
// import { useInsUpdateData } from '../../hooks/useUpdateData';

//create new user
export const createNewUser = (data) => async (dispatch) => {
  const { setLoading, ...restData } = data;
  try {
    setLoading(true);
    const response = await insertData(`users/signup`, restData);
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
  const { setLoading, ...restData } = data;
  try {
    setLoading(true);
    const response = await insertData(`auth/signin`, restData);
    setLoading(false);
    // dispatch({
    //   type: SIGNIN_USER,
    //   payload: response,
    //   loading: true,
    // });
  } catch (e) {
    setLoading(false);
    // dispatch({
    //   type: SIGNIN_USER,
    //   payload: e.response,
    // });
  }
};
