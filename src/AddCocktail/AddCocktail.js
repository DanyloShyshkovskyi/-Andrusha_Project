import React from "react";

import "./addCocktail.css";

export default class AddCocktail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            image: "./img/Margaritta.png",
        };
      }
      onClickAdd = () => {
          console.log(this.state.container);
        this.setState({
          container: "container right-panel-active",
        });
      };

      onClickRemove = () => {
        this.setState({
          container: "container",
        });
      };

      

    
  render(){
    console.log(this.state.image);
      return ( 
        <div class="signupSection">
        <div class="info">
          <h2>Your Cocktail</h2>
          <img src={this.state.image} style={{width:"150px",height:"300px"}} aria-hidden="true"/>
          <p>Is awesome</p>
        </div>
        <form action="#" method="POST" class="signupForm" name="signupform">
          <h2>Add Cocktail</h2>
          <ul class="noBullet">
            <li>
              <label for="username"></label>
              <input type="text" class="inputFields" id="name" name="Cocktail name" placeholder="Cocktail name" value="" oninput="return userNameValidation(this.value)" required/>
            </li>
            <li>
              <label for="password"></label>
              <input type="password" class="inputFields" id="imageUrl" name="imageUrl" placeholder="imageUrl" value="" oninput="return passwordValidation(this.value)" required/>
            </li>
            <li>
              <label for="email"></label>
              <input type="email" class="inputFields" id="ingredients" name="ingredients" placeholder="ingredients" value="" required/>
            </li>
            <li>
              <label for="description"></label>
              <input type="description" class="inputFields" id="description" name="description" placeholder="description" value="" required/>
            </li>
            <li>
              <label for="recipe"></label>
              <input type="email" class="inputFields" id="recipe" name="recipe" placeholder="recipe" value="" required/>
            </li>
            <li id="center-btn">
              <input type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
            </li>
          </ul>
        </form>
      </div>
);
    
    }
  }