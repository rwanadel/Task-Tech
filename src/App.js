import React from "react";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import OfferDetails from "./pages/OfferDetails";
import Notifications from "./pages/Notifications";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PostDetails from "./pages/PostDetails";
import Chats from "./pages/Chats";
import Create1 from "./pages/createprofile1";
import Contact from "./pages/contact";
import Error from "./pages/error404";
import Create2 from "./pages/createprofile2";
import Create3 from "./pages/createprofile3";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ForgotPassword from "./pages/ForgotPassword";
import Verify from "./pages/Verify";
import ResetPassword from "./pages/ResetPassword";
import { PostTask } from "./pages/PostTask";
import Protected from "./components/Protected";
import Layout from "./ui/Layout";
import "./styles/global.css";
import Landing from "./pages/landingpage";
// import Protected from "./components/Protected";
import UnProtected from "./components/UnProtected";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <UnProtected>
                <Landing />
              </UnProtected>
            }
          />
          <Route
            path="/home"
            element={
              <Protected>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/signUp"
            element={
              <UnProtected>
                <SignUp />
              </UnProtected>
            }
          />
          <Route
            path="/signIn"
            element={
              <UnProtected>
                <SignIn />
              </UnProtected>
            }
          />
          <Route
            path="/Fpassword"
            element={
              <UnProtected>
                <ForgotPassword />
              </UnProtected>
            }
          />
          <Route
            path="/verify"
            element={
              <UnProtected>
                <Verify />
              </UnProtected>
            }
          />
          <Route
            path="/Reset"
            element={
              <UnProtected>
                <ResetPassword />
              </UnProtected>
            }
          />
          <Route
            path="/PostTask"
            element={
              <Protected>
                <PostTask />
              </Protected>
            }
          />

          <Route
            path="/payment"
            element={
              <Protected>
                <Payment />
              </Protected>
            }
          />

          <Route
            path="/notifications"
            element={
              <Protected>
                <Notifications />
              </Protected>
            }
          />
          <Route
            path="/offer-details"
            element={
              <Protected>
                <OfferDetails />
              </Protected>
            }
          />
          <Route
            path="/contact"
            element={
              <Protected>
                <Contact />
              </Protected>
            }
          />
          <Route
            path="/post-details"
            element={
              <Protected>
                <PostDetails />
              </Protected>
            }
          />
          <Route
            path="/chats"
            element={
              <Protected>
                <Chats />
              </Protected>
            }
          />
          <Route
            path="/createprofile1"
            element={
              <Protected>
                <Create1 />
              </Protected>
            }
          />
          <Route
            path="/createprofile2"
            element={
              <Protected>
                <Create2 />
              </Protected>
            }
          />
          <Route
            path="/createprofile3"
            element={
              <Protected>
                <Create3 />
              </Protected>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;