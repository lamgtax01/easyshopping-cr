import "./CartCard.css";
import { useCartContext } from "../context/CartContext";

export const CartCard = ({product}) => {
  const { removeFromCart } = useCartContext();
  const {name, price, image} = product;

  // function handleRemoveFromCart () {
  //   removeFromCart(product);
  //   console.log(product)
  // }

  return (
      <div className="cartCard">
        <img src={image} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
      </div>
  )
}
