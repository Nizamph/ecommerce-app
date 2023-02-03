import  React , {useContext} from 'react'
import CartContext from '../Store/cart-context';
import { Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
function Cards(props) {

  const cartCtx = useContext(CartContext)


  const addItemToCart = (event) => {
     event.preventDefault()
      cartCtx.addItem({
        id:props.id,
        title:props.title,
        imageUrl:props.img,
        price:props.price,
        quantity:props.quantity
      })
  }

  return (
    <>
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6 col-xxl-2 mb-5'>
       <Card className='h-2  shadow border-dark border border-2 ms-5' style={{width:"380px",}} >
       <Card.Title className='text-center pt-3'>
               {props.title}
        </Card.Title>
        <Link to={`/ProductList/${props.id}`} >
          <Card.Img src={props.img} className='img-top img-fluid'></Card.Img>
          </Link>
          <Card.Body>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <div>
              {`$${props.price}`}
            </div>
            <div>
            <Button onClick={addItemToCart} variant='dark' className='border-primary border border-2'>Add to cart</Button>
            </div>
            </div>
          </Card.Body>
       </Card>
    </div>
    </>
  
  );
}

export default Cards;