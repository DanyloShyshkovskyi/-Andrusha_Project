  
// @flow
import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import "./App.css";

  

const Parallax = () => (
    <Controller>
      <div className="section" />
      <Scene
        indicators={true}
        duration="200%"
        triggerHook="onEnter"
      >
        <Timeline
          wrapper={<div className="parallax" />}
        >
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <img src="https://placeimg.com/1000/1000/nature" alt="" />
          </Tween>
          <Tween
          from={{ x: '-100%' }}
          to={{ x: '0%' }}
          >
            <h2>Das ist ein Titel</h2>
          </Tween>
        </Timeline>
      </Scene>
      <div className="section" />
    </Controller>
);

export default Parallax;