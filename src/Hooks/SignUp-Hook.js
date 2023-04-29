import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createNewUser } from '../redux/actions/AuthAction';
import { isValidEmail } from '../Api/helpers';
const SignUpHook = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [showErrors, setShowErrors] = useState(false);

  const OnchangeName = (e) => {
    setName(e.target.value)
  }
  const OnchangeEmail = (e) => {
    setEmail(e.target.value)
  }
  const OnchangePassword = (e) => {
    setPassword(e.target.value)
  }
  const OnchangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value)
  }

  const validationValue = () => {
    if (
      name.length === 0 ||
      !isValidEmail(email) ||
      password.length < 7 ||
      password !== confirmPassword
    ) {
      setShowErrors(true);
      return;
    }
  }
  const res = useSelector(state => state.authReducer.createUser)
  //save data
  const OnSubmit = async () => {
    validationValue();
    // talk to back-end
    dispatch(createNewUser({
      setLoading,
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
    }));


  }
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res)
        // if (res.data.token) {
        //     localStorage.setItem("token", res.data.token)
        //     alert("تم تسجيل الحساب بنجاح", "success")
        //     setTimeout(() => {
        //         navigate('/login')
        //     }, 2000);
        // }

        // if (res.data.errors) {
        //     if (res.data.errors[0].msg === "E-mail already in use")
        //         alert("هذا الايميل مسجل من قبل" )
        // }
        // if (res.data.errors) {
        //     if (res.data.errors[0].msg === "accept only egypt phone numbers")
        //         alert("يجب ان يكون الرقم مصري مكون من 11 رقم" )
        // }

        // if (res.data.errors) {
        //     if (res.data.errors[0].msg === "must be at least 6 chars")
        //         alert("يجب ان لاقل كلمه السر عن 6 احرف او ارقام" )
        // }


      }
    }
  }, [loading])

  return {showErrors, name, email, password, confirmPassword, loading, OnchangeName, OnchangeEmail, OnchangePassword, OnchangeConfirmPassword, OnSubmit}

}

export default SignUpHook

