import React from "react";
import Modal from 'react-bootstrap/Modal'
import SimpleSlider from "./Slider"

 
 export default function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="xl"
      centered
    >
        <div className="Comment">
        <SimpleSlider/>

        </div>
    </Modal>
  );
}