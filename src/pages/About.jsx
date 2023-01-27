import React from 'react'
import { useContext } from 'react'
import './About.css'
import { BsYoutube,BsFacebook,BsSpotify } from 'react-icons/bs'
import CartContext from '../Store/cart-context'
function About() {
  const authCtx = useContext(CartContext)
 console.log('from about page',authCtx.isLoggedIn)
  return (
    <React.Fragment>
    <div className='row' >
    
      <h1 style={{backgroundColor:"grey",fontSize:"100px",color:"dark",marginTop:"45px"}} className='p-4 text-center shadow '>The Generics</h1>
      <div>
        <h2 className='text-center'>About</h2>
      </div>

    <section>
      <div>
      <div className='col-xl-12 text-center'>
        <img className='img' src='https://prasadyash2411.github.io/ecom-website/img/Band%20Members.png' alt='band pic'/>
         <p className='p'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione vitae quasi beatae tenetur nesciunt, repellat ullam delectus vel facilis at voluptate numquam voluptatum asperiores quisquam modi dignissimos ipsam, saepe esse?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores quae commodi nisi aspernatur illo, veritatis fugiat veniam repellendus dolorum earum, eum quo sint iure, facilis corporis nemo laudantium velit quidem!
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus nihil ad sit, repellendus dicta vitae, aliquid accusantium eius ea veritatis pariatur provident ipsum atque esse aut velit optio inventore nam?
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi asperiores voluptates officiis deserunt iusto. Laudantium explicabo corrupti libero fuga voluptatibus, impedit autem odit labore atque possimus aliquam assumenda pariatur magni.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat doloribus dolor vel optio similique molestias maiores omnis at autem perferendis odio, sequi adipisci ducimus a repellat deleniti, voluptatum alias quo?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit deserunt cumque nemo illum quam velit, voluptate sed numquam tempore ea magni ratione dicta sint eos aliquid doloribus voluptatem iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores veritatis esse fuga tempore dicta consectetur. Veniam fugiat, quibusdam consequatur sed repellat ea cupiditate ipsa! Quisquam amet reiciendis quo quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam fuga quisquam nesciunt quis, praesentium, excepturi, ipsam odit vero commodi maxime alias. Modi maxime odio nemo aspernatur voluptas ex aut?Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas reprehenderit deserunt cumque nemo illum quam velit, voluptate sed numquam tempore ea magni ratione dicta sint eos aliquid doloribus voluptatem iusto.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi asperiores veritatis esse fuga tempore dicta consectetur. Veniam fugiat, quibusdam consequatur sed repellat ea cupiditate ipsa! Quisquam amet reiciendis quo quia.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis ullam fuga quisquam n
         </p>
       </div>
    
      </div>
      </section>

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
 
       </React.Fragment>

  )
}

export default About