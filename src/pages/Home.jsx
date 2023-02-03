import React from 'react'
import { BsYoutube,BsSpotify,BsFacebook } from 'react-icons/bs'
import { Container } from 'react-bootstrap'
import './Home.css'
const  Home = () => {
  return (
   <div>
    <header className='header'>
    
      <h1 style={{fontSize:"100px",color:"dark",marginTop:"45px"}} className='p-4 text-center '>The Generics</h1>
        <button className='play-music'>Get Our Latest Album</button>
        <button className="play-button">►</button>
    </header>
    
    <Container className=' col-12' style={{padding:"80px"}}>
    <section>
    <h2 className='text-center pb-4 ' style={{fontFamily:"serif"}}>TOURS</h2>
            <div className="tour-item ">
                <span className="tour-date">JUL16</span>
                <span className="tour-place">DETROIT, MI</span>
                <span className="tour-spec-place">DTE ENERGY MUSIC THEATRE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL19</span>
                <span className="tour-place">
TORONTO,ON</span>
                <span className="tour-spec-place">BUDWEISER STAGE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 22</span>
                <span className="tour-place">BRISTOW, VA</span>
                <span className="tour-spec-place">
JIGGY LUBE LIVE</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">JUL 29</span>
                <span className="tour-place">PHOENIX, AZ</span>
                <span className="tour-spec-place">AK-CHIN PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 2</span>
                <span className="tour-place">
LAS VEGAS, NV</span>
                <span className="tour-spec-place">
T-MOBILE ARENA</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
            <div className="tour-item">
                <span className="tour-date">AUG 7</span>
                <span className="tour-place">CONCORD, CA</span>
                <span className="tour-spec-place">CONCORD PAVILION</span>
                <button className="buy-btn">BUY TICKETS</button>
            </div>
    </section>
    </Container>
    <footer className="bg-dark p-1" >
   
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
   
  )
}

export default Home