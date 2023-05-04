// import React from 'react'
import { useState} from "react";
import { useDispatch } from "react-redux";
import { isValidEmail } from "../Api/helpers";
import { SignInUser } from "../redux/actions/AuthAction";

const SignInHook = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const OnchangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const OnchangePassword = (e) => {
    setPassword(e.target.value);
  };

  const validationValue = () => {
    let vaild = true;
    if (!isValidEmail(email) || password.length < 7) {
      setShowErrors(true);
      vaild = false;
    }
    return vaild;
  };
  const OnSubmit = async () => {
    if ( validationValue()){
      // talk to back-end
      dispatch(
        SignInUser({
          setIsLoading,
          email,
          password,
        })
      );
    }
  };
  
  return {
    showErrors,
    email,
    password,
    isLoading,
    OnchangeEmail,
    OnchangePassword,
    OnSubmit,
  };
};

export default SignInHook;
