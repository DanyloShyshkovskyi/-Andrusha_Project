import React from "react";
import Account from "./Authorization/Account";

import "./App.css";

export default class Header extends React.Component{
  render(){
  
      return ( 
      <div className="wrapper">
      <div className="nav">
        <div className="logo">BS Cocktails</div>
  
        <div className="menu-links">
          <ul>
            <li>our menu</li>
            <li>our story</li>
            <li>contact us</li>
          </ul>
        </div>
  
        <div className="search"><i className="fa fa-search"></i></div>
  
        <Account/>
  
      </div>
      </div>
      );
      }
      }