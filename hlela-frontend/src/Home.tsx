import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Hero from "./components/Hero";

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;
  const payload = data.data.payload;
  const access_token = data.data.access_token;

  useEffect(() => {
    if (payload) {
      console.log("User:", payload);
      console.log("Access Token", access_token);
      if (payload.isAdmin) {
        navigate("/admin", { state: access_token });
      }
    }
  }, [navigate, payload, access_token]);
  return (
    <div>
      <Header />
      <p className={"px-6"}>Welcome!</p>
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
