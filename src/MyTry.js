import React from "react";
import ParallaxMousemove from './Mouse';
import Account from "./Authorization/Account";
import Comments from "./Comments/Index";
import Ingridients from "./Ingridients/Index"
import AddCocktail from "./AddCocktail/index"

import "./App.css";

export default class MyTry extends React.Component{
  render(){
  var style = {
    inner: {
      position: 'absolute',
      top:0,
      left:0,
      right:0,
      bottom:0,
      zIndex:-1,
      textAlign:'center',
    },
    infoLayerStyle: {
      position: 'absolute',
    },
    hw:{
      height:"100%",
      width:"100%"
    }
  }
      return ( 
      <div className="wrapper">
  
      <div className="content">
        <div className="tagline"><AddCocktail/></div>
  
        <div className="pages"><Comments/></div>
  
        <div className="title">margaritta</div>
  
        <div className="more"><Ingridients/></div>
  
        <div className="desc">
          <p>
            Your <span>healthy</span> life <br/>starts here with us
          </p>
          <p>
            A family owned company founded with the purpose of giving your family access to clean, organic products while
            you are on the go.
          </p>
        </div>
      </div>
  
      <div className="juice">
        <img src="./img/Margaritta.png"/>
      </div>


      <ParallaxMousemove containerStyle={style.outter} fullHeight={true}>
          <div style={style.inner}>
          <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.1,
                yFactor: -0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="layer" style={{marginLeft:"70vw", marginTop:"70vh"}} src='./img/leaf01.png' alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
          <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: -0.3,
                yFactor: -0.2,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="layer" style={style.hw} style={{marginLeft:"50vw", marginTop:"60vh"}} src='./img/leaf02.png' alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.2,
                yFactor: 0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="layer" style={style.hw} style={{marginLeft:"10vw", marginTop:"60vh"}} src='./img/leaf03.png' alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: -0.2,
                yFactor: 0.3,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="layer" style={style.hw}  style={{marginLeft:"30vw", marginTop:"20vh"}} src='./img/leaf04.png' alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
            <ParallaxMousemove.Layer layerStyle={style.infoLayerStyle} config={{
                xFactor: 0.1,
                yFactor: -0.1,
                springSettings: {
                  stiffness: 50,
                  damping: 30
                }
              }}>
              < img className="layer" style={style.hw} style={{marginLeft:"80vw", marginTop:"45vh"}} src='./img/leaf05.png' alt="Parallax Layer"></ img >
            </ParallaxMousemove.Layer>
          </div>
        </ParallaxMousemove>
  
  
    </div>);
    
    }
  }