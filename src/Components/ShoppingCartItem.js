import { currencyFormatter } from "../Assets/Scripts/CurrencyFormatter";
import { useShoppingCart } from "../Contexts/ShoppingCartContext";

const ShoppingCartItem = ({ item }) => {
  const { incrementQuantity, decrementQuantity, removeItem } =
    useShoppingCart();
  return (
    <div className='shoppingcart-item'>
      <div className='item-img'>
        <img src={item.product.imageName} alt={item.product.name} />
      </div>
      <div className='item-info'>
        <div className='item-infoName'>{item.product.name}</div>
        <div className='item-infoQuantity'>
          <button onClick={() => decrementQuantity(item)}>-</button>
          <div className='quantity'>{item.quantity}</div>
          <button onClick={() => incrementQuantity(item)}>+</button>
        </div>
      </div>
      <div className='item-price'>
        <div>{currencyFormatter(item.product.price * item.quantity)}</div>
        <button
          className='trash'
          onClick={() => removeItem(item.articleNumber)}
        >
          <i class='fa-solid fa-trash'></i>
        </button>
      </div>
    </div>
  );
};
export default ShoppingCartItem;
