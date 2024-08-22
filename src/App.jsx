import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import { Error404 } from "./pages/Error";
import { Registered } from "./components/info";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />}>
          <Route path=":more-infor" element={<Registered />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <footer className="text-center font-semibold">
        CREATED BY DEJI ICE MONEY
      </footer>
    </div>
  );
}

export default App;
