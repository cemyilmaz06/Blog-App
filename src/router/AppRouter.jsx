import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import NavBar from "../components/NavBar";
import About from "../pages/About";
import NewBlog from "../pages/NewBlog";

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      
        <Route path="/register" element={<Register />} />
        <Route path="/newblog" element={<PrivateRouter />}>
          <Route path="/newblog" element={<NewBlog />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
