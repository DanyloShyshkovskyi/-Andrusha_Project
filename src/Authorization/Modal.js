import React from "react";
import Modal from 'react-bootstrap/Modal'
import "./style.css"
import Autho from "./Style"

 
 export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      centered
    >
        <Autho/>           
    </Modal>
  );
}