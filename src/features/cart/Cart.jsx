import { useSelector, useDispatch } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import Button from './../../ui/Button';
import CartItem from './CartItem';
import { clearCart, getCart } from './cartSlice';
import { getUsername } from '../user/userSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const cart = useSelector(getCart);
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  function handleClear() {
    dispatch(clearCart());
  }

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart.map((item) => (
          // <CartItem item={item} key={item.key} />
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>
        <Button type="secondary" onClick={handleClear}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
