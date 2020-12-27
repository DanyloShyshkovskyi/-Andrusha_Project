
import React, { Component, Suspense,useState,useEffect } from "react";
import MyVerticallyCenteredModal from "./Modal"

function Index(props){


  const [modalShow, setModalShow] = React.useState(false);

  const [showModal, setShowModal] = useState(false);

  

    return (
      <div className="more" style={{position:"relative"}} >
              <a  onClick={() => setModalShow(true)} style={{cursor:"pointer",position: "relative", margin:"auto"}}>Ingridients</a>
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    );
  }



export default Index;