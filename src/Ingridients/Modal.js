import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import Ingridients from "./Ingridients"

 
 export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      centered
    >
        <Ingridients/>           
    </Modal>
  );
}