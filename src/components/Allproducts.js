import React from "react";
import { Button, Card } from "react-bootstrap";
import img from "../pics/Banner-1.jpg";

function Allproducts(props) {
  const { products, addProducts } = props;
  return (
    <div className="container">
         <h1 className='text-center display-3'> Welcome To  Ecommerce App</h1>
         <div className="col-lg-12">
         <img src={img} alt="img" className="text-center img-fluid img-responsive"/>

         </div>
      <h1 className="text-center display-1"> List of All Products</h1>
      <div className="row">
        {products.map((prod) => (
                  <div className="col-lg-4 col-md-12 col-sm-12 ml-2 mb-4"> 

          <Card className='card p-0 overflow-hidden h-100 shadow ml-5' style={{ width: "18rem" }}>
            <Card.Img className='img-fluid img-responsive' variant="top" src={prod.image} />

            <Card.Body>
              <Card.Title>{prod.name}</Card.Title>
              <Card.Text>{prod.price}</Card.Text>
              <Button onClick={() => addProducts(prod)} variant="outline-success">
                
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
            </div>
        ))}
      
      </div>
    </div>
  );
}

export default Allproducts;
