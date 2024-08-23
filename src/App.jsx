import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Error404 from "./pages/Error";
import Registered from "./components/info";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Register from "./pages/Register";
import Login from "./pages/Login";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthProvider";

function App() {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Navbar />
      <Routes>
        {/* Authenticated Routes */}
        {user ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />}>
              <Route path=":more-info" element={<Registered />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<Error404 />} />
          </>
        ) : (
          <>
            {/* Non-Authenticated Routes */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      <footer className="text-center font-semibold">
        CREATED BY DEJI ICE MONEY
      </footer>
    </div>
  );
}

export default App;
