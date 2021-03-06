import React from "react";
import Api from '../services/Api';
import "./style.css";

export default class Style extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            container: "container",
            token:null,
            login:"",
            password:"",
        };
        this.handleLoginChange = this.handleLoginChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
      }

      handleLoginChange(event){
          this.setState({login:event.target.value});
      }

      handlePasswordChange(event){
        this.setState({password:event.target.value});
    }

      onAuthClick = async () => {
        const data = await Api.post('auth', { login: "esenin", password: "password" });
        const { data: json } = data;
    
        console.log(json);
        this.setState({token:json.token});
        console.log(this.state.token);
        console.log("login: ",this.state.login);
        console.log("password: ",this.state.password)
      };

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
      
      return ( 
          <div className="bodycontainer">
        <div className={this.state.container} id="container">
            <div class="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <span>or use your email for registration</span>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button > Sign Up</button>
                </form>
            </div>
            <div class="form-container sign-in-container">
                <form action="#">
                    <h1 >Sign in</h1>
                    <span>or use your account</span>
                    <input onChange={this.handleLoginChange} type="email" placeholder="Email" />
                    <input onChange={this.handlePasswordChange} type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button onClick={this.onAuthClick}>Sign In</button>
                </form>
            </div>
            <div class="overlay-container">
                <div class="overlay">
                    <div class="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button class="ghost"onClick={this.onClickRemove} id="signIn">Sign In</button>
                    </div>
                    <div class="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button class="ghost" onClick={this.onClickAdd} id="signUp">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        </div>
);
    
    }
  }