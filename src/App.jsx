import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import OurClasses from "./components/OurClasses";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
function App() {
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }

      if (window.scrollY !== 0) setIsTopOfPage(false);
    };

    window.addEventListener('scroll',handleScroll);

    return () => window.removeEventListener("scroll",handleScroll);
  },[]);
  return (
    <>
      <div>
        <Navbar isTopOfPage= {isTopOfPage}/>
        <Home/>
        <Benefits/>
        <OurClasses/>
        <ContactUs/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
