import React from "react";
import Api from '../services/Api';
import "./addCocktail.css";

export default class AddCocktail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id:null,
            imageURL: "./img/Margaritta.png",
            name:"",
            ingredients:"",
            description:"",
            recipe:"",
            creatorId:1



        };
        this.handleImageChange = this.handleImageChange.bind(this);
        this.handleCocktailNameChange = this.handleCocktailNameChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleRecipeChange = this.handleRecipeChange.bind(this);
        this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
      }

      handleImageChange(event){
        this.setState({imageURL:event.target.value});
    }

    handleCocktailNameChange(event){
      this.setState({name:event.target.value});
  }

  handleDescriptionChange(event){
    this.setState({description:event.target.value});
}

handleRecipeChange(event){
  this.setState({recipe:event.target.value});
}

handleIngredientsChange(event){
  this.setState({ingredients:event.target.value});
}


onCreateBeverageClick = async () => {
  const data = await Api.post(
    'beverages',
    {
      beverage_name: 'сhupachups',
      recipe: 'how to do it 123',
      description: 'hz',
      creator_id: 1,
      id: 4
    },
    "token"
  );
  console.log(data);
};


    
  render(){
      return ( 
        <div class="signupSection">
        <div class="info">
          <h2>Your Cocktail</h2>
          <img src={this.state.imageURL} style={{width:"150px",height:"300px"}} aria-hidden="true"/>
          <p>Is awesome</p>
        </div>
        <form action="#" method="POST" class="signupForm" name="signupform">
          <h2>Add Cocktail</h2>
          <ul class="noBullet">
            <li>
              <label for="username"></label>
                <input onChange={this.handleCocktailNameChange}  class="inputFields" placeholder="Cocktail name"  />
            </li>
              <li>
              <label for="password"></label>
              <input  onChange={this.handleImageChange} class="inputFields" id="imageUrl" name="imageUrl" placeholder="imageUrl"  required/>
            </li>
            <li>
              <label for="email"></label>
              <input onChange={this.handleIngredientsChange} class="inputFields" id="ingredients" name="ingredients" placeholder="ingredients" required/>
            </li>
            <li>
              <label for="description"></label>
              <input onChange={this.handleDescriptionChange} class="inputFields" id="description" name="description"  required/>
            </li>
            <li>
              <label for="recipe"></label>
              <input onChange={this.handleRecipeChange}  class="inputFields" id="recipe" name="recipe" placeholder="recipe" required/>
            </li>
            <li id="center-btn">
              <input onClick={this.onCreateBeverageClick} type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
            </li>
          </ul>
        </form>
      </div>
);
    
    }
  }