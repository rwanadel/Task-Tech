import Payment from "./pages/Payment";
import Home from "./pages/Home";
import Notifications from "./pages/Notifications";
import OfferDetails from "./pages/OfferDetails";
import Services from "./pages/Services";
import PostDetails from "./pages/PostDetails";
import Chats from "./pages/Chats";
import { Routes, Route } from "react-router-dom";
import "./styles/global.css";
import Layout from "./ui/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/offer-details" element={<OfferDetails />} />
          <Route path="/services" element={<Services />} />
          <Route path="/post-details" element={<PostDetails />} />
          <Route path="/chats" element={<Chats />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
