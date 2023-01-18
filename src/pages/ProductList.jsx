import React from 'react'
import { Container } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './ProductList.css'
const ProductList = () => {
  const param = useParams()
  console.log(param)
  return (
  <>
 

  <Container >
  <Route path="/ProductList/m1">
   <section className='product-box'>
    <div className='ms-2'>
    <h2>Album 1- THE SOUL</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Nostrum ratione, culpa magnam accusamus recusandae obcaecati tenetur dolores? Iste aspernatur dolorum quos deserunt officia, beatae voluptas reprehenderit, veritatis voluptatum, eveniet libero.</p>
       </div>
   <div className='images-pr'>
   <img src='/images/m1-1.png' alt=''></img>
   <img src='/images/m1-1.png' alt=''></img>
   <img src='/images/m1-1.png' alt=''></img>
   <img src='/images/m1-1.png' alt=''></img>
   </div>
   <button className='text-white bg-dark rounded border pt-3 pb-3 ' style={{marginLeft:"100px",marginTop:"40px",paddingRight:"60px",paddingLeft:"60px"}}>Order Now</button>
   </section>
</Route>
<Route path="/ProductList/m2">
   <section className='product-box'>
   <div className='ms-2'>
    <h2>Album 2- THE RAIN</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Nostrum ratione, culpa magnam accusamus recusandae obcaecati tenetur dolores? Iste aspernatur dolorum quos deserunt officia, beatae voluptas reprehenderit, veritatis voluptatum, eveniet libero.</p>
       </div>
   <div className='images-pr'>
   <img src='/images/m2-1.png' alt=''></img>
   <img src='/images/m2-2.png' alt=''></img>
   <img src='/images/m2-3.png' alt=''></img>
   <img src='/images/m2-4.png' alt=''></img>
   </div>
   <button className='text-white bg-dark rounded border pt-3 pb-3 ' style={{marginLeft:"100px",marginTop:"40px",paddingRight:"60px",paddingLeft:"60px"}}>Order Now</button>
   </section>
</Route>
<Route path="/ProductList/m3">
   <section className='product-box'>
   <div className='ms-2'>
    <h2>Album 3- HAPPINESS PILLS</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Nostrum ratione, culpa magnam accusamus recusandae obcaecati tenetur dolores? Iste aspernatur dolorum quos deserunt officia, beatae voluptas reprehenderit, veritatis voluptatum, eveniet libero.</p>
       </div>
   <div className='images-pr'>
   <img src='/images/m3-1.png' alt=''></img>
   <img src='/images/m3-2.png' alt=''></img>
   <img src='/images/m3-3.png' alt=''></img>
   <img src='/images/m3-4.png' alt=''></img>
   </div>
   <button className='text-white bg-dark rounded border pt-3 pb-3 ' style={{marginLeft:"100px",marginTop:"40px",paddingRight:"60px",paddingLeft:"60px"}}>Order Now</button>
   </section>
</Route>
<Route path="/ProductList/m4">
   <section className='product-box'>
   <div className='ms-2'>
    <h2>Album 4- PERSUIT OF HAPPINESS</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Nostrum ratione, culpa magnam accusamus recusandae obcaecati tenetur dolores? Iste aspernatur dolorum quos deserunt officia, beatae voluptas reprehenderit, veritatis voluptatum, eveniet libero.</p>
       </div>
   <div className='images-pr'>
   <img src='/images/m4-1.png' alt=''></img>
   <img src='/images/m4-2.png' alt=''></img>
   <img src='/images/m4-3.png' alt=''></img>
   <img src='/images/m4-4.png' alt=''></img>
   </div>
   <button className='text-white bg-dark rounded border pt-3 pb-3 ' style={{marginLeft:"100px",marginTop:"40px",paddingRight:"60px",paddingLeft:"60px"}}>Order Now</button>
   </section>
</Route>
</Container>
  </>
  )
}

export default ProductList
