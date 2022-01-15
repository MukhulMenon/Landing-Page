import React ,{useState} from "react";
import HeroSection from "../Components/Hero";
import InfoSection from "../Components/InfoSection";
import { homeObjOne,homeObjTwo ,homeObjThree, homeObjFour } from "../Components/InfoSection/Data";
import Navbar from "../Components/Navbar";
import Sidebar from "../Components/Sidebar/Index";
import Footer from "../Components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle= () =>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne}/>
      <InfoSection {...homeObjTwo}/>
      <InfoSection {...homeObjThree}/>
      <InfoSection {...homeObjFour}/>
      <Footer />
    </>
  );
};

export default Home;
