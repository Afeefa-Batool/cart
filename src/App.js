import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes,Route} from "react-router-dom";
import data from "./data";
import "bootstrap/dist/css/bootstrap.min.css";
import Allproducts from "./components/Allproducts";
import Navbar from "./components/Navbar";
// import Home from "./components/Home";
import Cart from "./components/Cart";

function App() {
  const { products } = data;
  //hook for getting the product into cat
  const [cartItems, setCartItems] = useState([]);
  // console.log(cartItems)
  //function for adding the product to the cart
  const onAdd = (product) => {
    //grabing the product on clicking the + button
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      console.log("exist",exist)
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
      console.log("hey",cartItems);
    }
  };
  // function for removing product from add to cart
  const onRemove = (product) => {
    // yani aik product app k cartmy parahowa hy aur uss ko minus krna hy

    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div>
      <BrowserRouter>
        <Navbar productsCount={cartItems.length} />

        <Routes>
          <Route exact path="/" element={<Allproducts products={products} addProducts={onAdd}/>} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path="/cart" element={<Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>}  />

        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
