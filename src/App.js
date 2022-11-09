import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
    const [cartTotal, setCartTotal] = useState(0);
    const [cart, setCart] = useState([]);

    function addToCart (item) {
        let tempCart = cart;
        tempCart.push(item);
        setCartTotal(Math.round((cartTotal + item.price)*100)/100);
        setCart(cart);
    }

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
        <div className="BakeryItems">
            {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
                <BakeryItem image={item.image} price={item.price}
                            name={item.name} description={item.description}
                            addToCart={() => addToCart(item)}
                />
            ))}
        </div>
      <div >
        <h2>My Cart <br/> Total: ${cartTotal}</h2>
          <div className="cart">
              {cart.map((item, index) => (
                  <CartItem name={item.name} price={item.price}/>
              ))}
          </div>

      </div>
    </div>
  );
}

export default App;
