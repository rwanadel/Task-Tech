import React from "react";
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
<<<<<<< HEAD
<<<<<<< HEAD
import Landing from "./pages/landingpage";
// import Protected from "./components/Protected";
=======
import UnProtected from "./components/UnProtected";
>>>>>>> eb953b7694f2bb012c3a10b5b40dbe3e83bc372c
=======
import Landing from "./pages/landingpage";
// import Protected from "./components/Protected";
import UnProtected from "./components/UnProtected";
>>>>>>> 87727242669452e7fcefdaba338e037bb7704427

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
<<<<<<< HEAD
      {/* <<<<<<< HEAD */}
      {/*<Layout> */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
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
        <Route path="/createprofile2" element={<Create2 />} />
        <Route path="/createprofile3" element={<Create3 />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {/* ======= */}
      {/*<Layout> */}
      {/* <Routes>
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
=======
=======
>>>>>>> 87727242669452e7fcefdaba338e037bb7704427
      <Layout>
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route
            path="/Home"
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
<<<<<<< HEAD
>>>>>>> eb953b7694f2bb012c3a10b5b40dbe3e83bc372c
=======
>>>>>>> 87727242669452e7fcefdaba338e037bb7704427

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
