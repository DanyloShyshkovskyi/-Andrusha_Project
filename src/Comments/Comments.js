import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./comments.css"

 
 export default function Commennt(props) {
  return (
    <div id="login-container">
    <div class="profile-img"></div>
    <h1>
      Даня
    </h1>
    <div class="description">
     Пиздатая хуйня никогда больше  не возьму рыгал дай боже
    </div>

    <footer>
      <div class="likes">
        <p><i class='fa fa-heart'></i></p>
        <p>1.5K</p>
      </div>
      <div class="projects">
        <p>Projects</p>
        <p>154</p>
      </div>
    </footer>
  </div>
  );
}