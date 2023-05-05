import {
  RESET_PASSWORD,
  VERIFY_PASSWORD,
  FOREGT_PASSWORD,
  GET_CURERNT_USER,
  ADD_ERROR_MESSAGE,
  ADD_SUCCESS_MESSAGE,
  CLEAR_MESSAGES,
  ADD_USER_DATA,
} from "../type";

const inital = {
  userData: [],
  currentUser: [],
  forgetPassword: [],
  verifyPassword: [],
  resetPassword: [],
  loading: true,
  errorMessage: "",
  successMessage: "",
};
const authReducer = (state = inital, action) => {
  switch (action.type) {
    case ADD_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };

    case GET_CURERNT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case FOREGT_PASSWORD:
      return {
        ...state,
        forgetPassword: action.payload,
      };
    case VERIFY_PASSWORD:
      return {
        ...state,
        verifyPassword: action.payload,
      };
    case RESET_PASSWORD:
      return {
        ...state,
        resetPassword: action.payload,
      };
    case ADD_ERROR_MESSAGE: 
      return {
        ...state,
        errorMessage: action.payload,
      }

    case ADD_SUCCESS_MESSAGE: 
    return{
        ...state,
        successMessage :action.payload,
    }
    case CLEAR_MESSAGES: 
    return{
        ...state,
        successMessage :'',
        errorMessage: '',
    }
    default:
      return state;
  }
};
export default authReducer;
