// import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import Author from "./components/Author";
import SocialLinks from "./components/SocialLinks";
import Fashion from "./components/FashionTips";
import Contact from "./components/Contact";
import Travel from "./components/Travel";
import Technology from "./components/Technology";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <SocialLinks />
      {/* <Author /> */}

      <Travel/>
      <Fashion />
      <Technology/>
      <Contact />
      </div>
  );
}

export default App;
