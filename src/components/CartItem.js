import bakeryData from "../assets/bakery-data.json";
import BakeryItem from "./BakeryItem";

function CartItem (props) {
    return(
        <div className="cartItem">
            <p>Item: {props.name}</p>
            <p>Quantity: {props.price}</p>
        </div>
    )
}
export default CartItem