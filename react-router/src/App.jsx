import Header from "./Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Blog from "./Blog.jsx";
import NotFound from "./Notfound.jsx";
import Profile from "./Profile.jsx";
import Settings from "./Settings.jsx";
import Userlogin from "./Userlogin.jsx";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="contact" element={<Contact />}>
          <Route index element={<Profile />} />
          <Route path="settings" element={<Settings />} />
          <Route path="user">
            <Route path="login" element={<Userlogin />} />
          </Route>
        </Route>
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
