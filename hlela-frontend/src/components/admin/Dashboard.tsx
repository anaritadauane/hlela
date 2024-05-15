import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
// import { useLocation } from "react-router-dom";

const Dashboard = () => {
  //   const location = useLocation();
  //   const access_token = location.state;
  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
};

export default Dashboard;
