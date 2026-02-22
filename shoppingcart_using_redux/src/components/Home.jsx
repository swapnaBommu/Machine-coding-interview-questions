import React from 'react'
import productsData from '../data/products';
import ProductCard from './ProductCard';
import { useSelector } from 'react-redux';
import Cart from './cart';

const Home = () => {

  const showCart = useSelector(state => state.showCart);
  const cart = useSelector(state => state.cart);

  return (

    <div className='product_wrapper'>

      {productsData.map((item) => {

        // Find qty from cart
        const cartItem = cart.find(
          (c) => c.id === item.id
        );

        return (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={cartItem ? cartItem.qty : 0}
          />
        );

      })}

      {showCart && <Cart />}

    </div>
  )
}

export default Home;