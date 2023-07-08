import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createNewUser } from "../redux/actions/AuthAction";
import { isValidEmail } from "../Api/helpers";
const SignUpHook = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [showErrors, setShowErrors] = useState(false);

  const onChange = (key, e) => {
    setValues({
      ...values,
      [key]: e.target.value
    });
  };

  const validationValue = () => {
    let valid = true;
    const { name, password, email, confirmPassword } = values;
    if (
      name?.length === 0 ||
      !isValidEmail(email) ||
      password?.length < 7 ||
      password !== confirmPassword
    ) {
      setShowErrors(true);
      valid = false;
    }
    return valid;
  };
  
  const res = useSelector((state) => state.authReducer.createUser);
  const navigate =useNavigate()
  const handleRedirect=()=>{
    navigate("/createprofile1")
  }
  //save data
  const OnSubmit = () => {
    if (validationValue()) {
      const { name, password, email, confirmPassword } = values;
      dispatch(
        createNewUser({
          setLoading,
          handleRedirect,
          name,
          email,
          password,
          confirmPassword,
        })
      );
    }
    // talk to back-end
  };
  useEffect(() => {
    if (loading === false) {
      if (res) {
        console.log(res);
      }
    }
  }, [loading]);

  return { showErrors, ...values, onChange, loading, OnSubmit };
};

export default SignUpHook;
