import React from "react";
import Strip from "./components/Home/Strip";
import Benefit from "./components/Home/Benefit";
import Hero from "./components/Home/Hero";
import Features from "./components/Features/Features";
import System from "./components/System/System";
import About from "./components/About/About";
import Contactus from "./components/Home/Contactus";

const IndexPage = () => {
  return (
    <>
      <Hero />
      <Strip />
      <System />
      <About />
      <Features />
      <Benefit />
      <Contactus />
    </>
  );
};

export default IndexPage;
