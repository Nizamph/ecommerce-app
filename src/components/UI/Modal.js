import React, { Fragment } from "react"
import ReactDOM from "react-dom"
import classes from './Modal.module.css'


 

const ModalOne = (props) => {
  return(
    <div className={classes.modal}>
       <div className={classes.content}>
          {props.children}
       </div>
    </div>
  )
} 



const ModalOverlay = (props) => {
     
  return(
    <Fragment>
   {ReactDOM.createPortal(
        <ModalOne>{props.children}</ModalOne>, document.getElementById("overlay")
      )}  
  </Fragment>
  )
  
}

export default ModalOverlay;