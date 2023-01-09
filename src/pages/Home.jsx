import Cards from "../components/Cards"
import { Button } from "react-bootstrap"
import {BsYoutube,BsSpotify,BsFacebook } from "react-icons/bs";
const Home = (props) => {
  return (
    <>
    <div>
    <h1 style={{backgroundColor:"grey",fontSize:"100px",color:"dark",marginTop:"45px"}} className='p-4 text-center shadow '>The Generics</h1>
    <h1 className="text-center pt-5 pb-3" style={{fontFamily: "Metal Mania",fontSize:"70px"}}>Music</h1>
    </div>
    <div  className="container-fluid">
       <div className="container py-4">
         <div className="row">
         {props.products.map((item) => {
    return(
      <Cards
       id={item.id}
       title={item.title}
       img={item.imageUrl}  
       price={item.price}
       quantity={item.quantity}
      /> 
    )
     
   })} 
           
         </div>
         <div className="text-center font-weight-bold class pt-3">
  <Button onClick={props.onShowCart} className="bg-dark p-3 border-primary border border-2 mb-1 shadow" style={{backgroundColor:"#777",color:"#56CCF2",}}><strong>See the cart</strong></Button>
         </div>  
       </div>
    </div>
    <div className="col-lg-12"> 
   <footer className="bg-dark p-1">
   
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
   </div>
    </>
    
  )
}

export default Home 