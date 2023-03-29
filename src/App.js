import "./App.css";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Event from "./componets/home/Event";
import Faq from "./pages/Faq";
import Portfolio from "./pages/Portfolio";
import Profile from "./pages/Profile";
import Membership from "./pages/Membership";
import Error from "./pages/Error";

function App() {
  return (
    <>
      <Home />
      <About />
      <Blog />
      <Contact />
      <Event />
      <Faq />
      <Portfolio />
      <Profile />
      <Membership />
      <Error />
    </>
  );
}

export default App;
