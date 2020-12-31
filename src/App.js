import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import CocktailsList from "./CocktailsList";
import "./App.css";
import Header from "./Header"
import MyTry from "./MyTry"
import Mwindow from "./Authorization/Account"
import HZ from "./Slider/Style"

function App() {
  return (
    <ParallaxProvider>
      <Header/>
     <HZ/>
    </ParallaxProvider>
  );
}

export default App;
