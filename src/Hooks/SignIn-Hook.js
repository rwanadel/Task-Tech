import React from 'react'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isValidEmail } from '../Api/helpers';
import { SignInUser } from '../redux/actions/AuthAction';

const SignInHook = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [showErrors, setShowErrors] = useState(false);

    const OnchangeEmail = (e) => {
        setEmail(e.target.value)
    }
    const OnchangePassword = (e) => {
        setPassword(e.target.value)
    }

    const validationValue = () => {
        if (
            !isValidEmail(email) ||
            password.length < 7 
        ) {
            setShowErrors(true);
            return;
        }
    }
    const OnSubmit = async () => {
        validationValue();
        setLoading(true);
        // talk to back-end
        dispatch(SignInUser({
          setLoading,
          email,
          password,
        }));
        setLoading(false);
    
      }
      const res = useSelector(state => state.authReducer.SignInUser)
      useEffect(() => {
        if (loading === false) {
          if (res?.data) {
            console.log(res)
            setLoading(true);
          }
        }
      }, [loading])
    return {showErrors,  email, password, loading,  OnchangeEmail, OnchangePassword, OnSubmit}
}

export default SignInHook
