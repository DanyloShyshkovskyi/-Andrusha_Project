import React from "react";

import "./style.css";

export default class Ingridients extends React.Component{

    
  render(){
      return ( 
        <div class="container-ingridients">
        <div class="row">
          <div class="col-md-4">
            <div class="card card-1">
              <h3>Залупа Коня</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-2">
              <h3>Листок Подорожніка</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card card-3">
              <h3>Пеніс Гріши</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
        </div>
      </div>
);
    
    }
  }