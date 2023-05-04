import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import OfferDetails from "./pages/OfferDetails";
import Notifications from "./pages/Notifications";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PostDetails from "./pages/PostDetails";
import Chats from "./pages/Chats";
import Create1 from "./pages/createprofile1";
import Contact from "./pages/contact";
import Error from "./pages/error404";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Verify from "./pages/Verify";
import ResetPassword from "./pages/ResetPassword";
import PostTask from "./pages/PostTask";
import { useDispatch } from "react-redux";
import { ADD_USER_DATA } from "./redux/type";
import "./styles/global.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user?.token) {
      dispatch({
        type: ADD_USER_DATA,
        payload: user,
      });
    }
  }, []);
  return (
    <div className="App">
      {/*<Layout> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/Fpassword" element={<ForgotPassword />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/Reset" element={<ResetPassword />} />
        <Route path="/PostTask" element={<PostTask />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/offer-details" element={<OfferDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post-details" element={<PostDetails />} />
        <Route path="/chats" element={<Chats />} />
        <Route path="/createprofile1" element={<Create1 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/*</Layout>*/}
    </div>
  );
}

export default App;
