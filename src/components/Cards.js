
import { Card,Button } from 'react-bootstrap';
function Cards(props) {
  return (
    <>
    <div className='col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-6 col-xxl-2 mb-5'>
       <Card className='h-98 shadow border-dark border border-2' style={{}}>
       <Card.Title className='text-center pt-3'>
               {props.title}
        </Card.Title>
          <Card.Img src={props.img} className='img-top img-fluid'></Card.Img>
          <Card.Body>
            <Card.Text>
              {`$${props.price}`}
            </Card.Text>
            <Button variant='dark' className='border-primary border border-2'>Add to cart</Button>
          </Card.Body>
       </Card>
    </div>
    </>

  );
}

export default Cards;