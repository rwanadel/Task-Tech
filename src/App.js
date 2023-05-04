import React, { useState, useEffect } from "react";
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
import { PostTask } from "./pages/PostTask";
import { useDispatch } from "react-redux";
import { ADD_USER_DATA } from "./redux/type";
import "./styles/global.css";
import Protected from "./components/Protected";

function App() {
  const [isSignedIn, setIsSignedin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userData"));
    if (user?.token) {
      setIsSignedin(true);
      dispatch({
        type: ADD_USER_DATA,
        payload: user,
      });
    } else if (!isSignedIn) {
      setIsSignedin(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

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
        <Route
          path="/PostTask"
          element={
            <Protected isSignedIn={isSignedIn}>
              <PostTask />
            </Protected>
          }
        />

        <Route
          path="/payment"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Payment />
            </Protected>
          }
        />

        <Route
          path="/notifications"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Notifications />
            </Protected>
          }
        />
        <Route
          path="/offer-details"
          element={
            <Protected isSignedIn={isSignedIn}>
              <OfferDetails />
            </Protected>
          }
        />
        <Route
          path="/contact"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Contact />
            </Protected>
          }
        />
        <Route
          path="/post-details"
          element={
            <Protected isSignedIn={isSignedIn}>
              <PostDetails />
            </Protected>
          }
        />
        <Route
          path="/chats"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Chats />
            </Protected>
          }
        />
        <Route
          path="/createprofile1"
          element={
            <Protected isSignedIn={isSignedIn}>
              <Create1 />
            </Protected>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
      {/*</Layout>*/}
    </div>
  );
}

export default App;
