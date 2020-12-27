import React from "react";
import Modal from 'react-bootstrap/Modal'
import AddCocktail from "./AddCocktail"

 
 export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
        <AddCocktail/>           
    </Modal>
  );
}