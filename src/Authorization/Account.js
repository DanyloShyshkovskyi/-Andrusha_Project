
import React, { Component, Suspense,useState,useEffect } from "react";
import MyVerticallyCenteredModal from "./Modal"

function Account(props){


  const [modalShow, setModalShow] = React.useState(false);

  const [showModal, setShowModal] = useState(false);

  

    return (
      <div className="caart" style={{position:"relative"}} >
              <p  onClick={() => setModalShow(true)} style={{cursor:"pointer",position: "relative", margin:"auto"}}>My Account</p>
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    );
  }



export default Account;