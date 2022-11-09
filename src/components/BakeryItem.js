// TODO: create a component that displays a single bakery item

function BakeryItem (props) {
    return (
        <div className="BakeryItem">
            <img className="BakeryItemImage" src={"../" + props.image} alt={"hi:D"}/>
            <h2>{props.name}</h2>
            <h4>{props.price}</h4>
            <p>{props.description}</p>
            <button onClick={props.addToCart}>Add to Cart</button>
        </div>
    )
}
export default BakeryItem