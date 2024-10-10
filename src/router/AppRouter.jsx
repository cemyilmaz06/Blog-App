import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
