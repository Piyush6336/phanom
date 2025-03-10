import React from "react";
import Header from "./Components/header"; // Importing Header Component
import HeroBanner from "./Components/HeroSection";
import LogoSlider from "./Components/VertivalMoving";
import FinalLayout from "./Components/FinalCard";
import Layout from "./Components/Layout";
import StatisticsPanel from "./Components/Panel";
import Feature from "./Components/featureFinal";
import WhyChooseUsLayout from "./Components/whyChooseUs";
import MissionSection from "./Components/MissionSection";
import ConnectSection from "./Components/ConnectSection";
import VideoTestimonialLayout from "./Components/VideoTestimonialCard";
import BlogLayout from "./Components/BlogLayout";
import FooterLayout from "./Components/FooterFinal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header /> {/* Using the Header Component */}
      <HeroBanner/>
      <LogoSlider/>
      {/* <DiscoveryPlanning/> */}
      <FinalLayout/>
      <Layout/>
      <StatisticsPanel/>
      <Feature/>
      <WhyChooseUsLayout/>
      <MissionSection/>
      <ConnectSection/>
      <VideoTestimonialLayout/>
      <BlogLayout/>
      <FooterLayout/>
    </div>
  );
}

export default App;
