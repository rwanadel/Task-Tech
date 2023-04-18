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

function App() {
  return (
    <div className="App">
     {/*<Layout> */}
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/payment" element={<Payment />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/chats" element={<Chats />} />
          <Route path="/createprofile1" element={<Create1/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      {/*</Layout>*/}
      
    </div>
  );
}

export default App;
