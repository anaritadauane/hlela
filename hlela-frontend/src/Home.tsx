import { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useLocation } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const data = location.state;
  const user = data.data.user;

  // console.log("acess2:", data.data.user);
  // console.log(access_token);
  useEffect(() => {
    if (user) {
      console.log("User:", user);
    }
  }, [user]);
  return (
    <div>
      <Header />
      <p>Welcome, {user.firstName}!</p>
      <Footer />
    </div>
  );
};

export default Home;
