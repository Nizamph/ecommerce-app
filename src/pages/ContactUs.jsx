import React from 'react'
import { useRef } from 'react'
import { Form, Container,Button } from 'react-bootstrap'
import './ContactUs.css'
import { BsYoutube,BsFacebook,BsSpotify } from 'react-icons/bs'
const ContactUs = (props) => {
     
  let emailInputRef = useRef()
  let userNameInputRef = useRef()
  let phoneInputRef = useRef()

  const contactListHandler = (event) => {
    event.preventDefault()
    const enteredUserName = userNameInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;
    const enteredPhone = phoneInputRef.current.value;

    const enteredContactList = {
      enteredUserName,
      enteredEmail,
      enteredPhone
    }
   props.onContactList(enteredContactList)
   
   userNameInputRef.current.value=''
   emailInputRef.current.value=''
   phoneInputRef.current.value=''
  }


  return (
    <React.Fragment>
    <Container className='container-contact'>
  <form className='form-contact' onSubmit={contactListHandler}>
  <h1 className='contact-heading'>Contact Us</h1>
  <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" ref={userNameInputRef} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  ref={emailInputRef}/>
      </Form.Group>
       <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" ref={phoneInputRef}/>
      </Form.Group>
      <Button variant="dark" type="submit">
        Submit
      </Button>
</form>
      </Container>
        
               <footer className="bg-dark  pt-1 mt-5" >
   
   <div className="text-center ">
    
         
         <h1 className="text-white" style={{fontFamily:"monospace"}} ><strong>The Generics</strong></h1>
         
        
        
      
       <div className="me-5">
       <a href="https://www.youtube.com/" style={{fontSize:"20px"}} >
        <BsYoutube className="text-danger ms-5 fa-4x" />
        </a>
        
        
        <a href="https://www.facebook.com/">
        <BsFacebook className="text-white ms-5" style={{fontSize:"20px"}}/>
        </a>
      
      
        <a href="https://www.spotify.com/">
        <BsSpotify className="text-success ms-5" style={{fontSize:"20px"}}/>
        </a>
       </div>
    
   </div>
     
  </footer>
  </React.Fragment>   
  )
}

export default ContactUs