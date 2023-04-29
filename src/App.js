import Payment from "./pages/Payment";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import OfferDetails from "./pages/OfferDetails";

import PostDetails from "./pages/PostDetails";
import Chats from "./pages/Chats";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";

import Create1 from "./pages/createprofile1";
import Contact from "./pages/contact";
import Error from "./pages/error404";
import Create2 from "./pages/createprofile2";
import Create3 from "./pages/createprofile3";


import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
function App() {
  return (
    <div className="App">
     {/*<Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signUp" element={<SignUp/>} />
          <Route path="/signIn" element={<SignIn/>} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/createprofile1" element={<Create1/>}/>
          <Route path="/createprofile2" element={<Create2/>}/>
          <Route path="/createprofile3" element={<Create3/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      {/*</Layout>*/}
      
    </div>
  );
}

export default App;
