import React, { Component, Suspense,useState,useEffect } from "react";
import MyVerticallyCenteredModal from "./Modal"

function Comments(props){


  const [modalShow, setModalShow] = React.useState(false);

  const [showModal, setShowModal] = useState(false);

  

    return (
      <div className="" style={{position:"relative",zIndex:7}} >
              <a  onClick={() => setModalShow(true)} style={{cursor:"pointer",position: "relative", margin:"auto"}}>Comments</a>
              <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      </div>
    );
  }



export default Comments;