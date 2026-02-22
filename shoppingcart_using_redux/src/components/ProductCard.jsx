import React from 'react'
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/actions';

const ProductCard = ({ name, price, id,qty }) => {

  const dispatch = useDispatch();

  return (
    <div className="card">

      <h3 className="product-name">Name : {name}</h3>

      <p className="price">Price: ₹ {price}</p>
      <div>Qty : {qty}</div>

      <div className="btn-container">

        <button
          className="add-btn"
          onClick={() => dispatch(addItem({id,name,price}))}
        >
          Add
        </button>

        <button
          className="remove-btn"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>

      </div>

    </div>
  )
}

export default ProductCard;