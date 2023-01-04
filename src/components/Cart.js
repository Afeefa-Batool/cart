import React from 'react'

// function Cart() {

    function Cart(props) {

  console.log(props)

    const {cartItems, onAdd ,onRemove} = props;
    //function or adding all the products prices
    // const itemPrice = cartItems.reduce((a,c)=>a + c.qty * c.price ,0);
    console.log(cartItems)

    return (
    <div>
        <h1 className='text-center display-3'>Your Cart Items</h1>
        <div className='container'>
        <table class="table table-bordered">
  <thead>
    <tr>
      <th>ID</th>
      <th>Product Name</th>
      <th>Product Price</th>
      <th>Quantity</th>
      <th>Image</th>

      <th scope="col">Add product</th>

      <th scope="col">Remove product</th>

    </tr>
  </thead>
  {
    // console.log(cartItems)
 cartItems.map((item)=>(
  <tbody>
 <tr key={item.id}>
        <td >{item.id}</td>
        <td>{item.name}</td>

        <td>{item.price}</td>
        <td>{item.qty}</td>

        <td className='td-image'> <img src={ item.image } className="img-fluid" alt={item.title} /></td>
       
        <td>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-info btn-sm  btn-default'>+</button>
          </div>
          </td>
          <td>
        <div className='d-flex justify-content-center'>
        <td><button className='btn btn-danger btn-sm text-center'>-</button></td>
          </div>
          </td>
     
      </tr>
  </tbody>
     
    ))
  };
  </table>
        </div>
    </div>
  )
}

export default Cart