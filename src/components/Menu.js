import React from 'react'
// import { menu } from '../Data'
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from '../features/cartSlice';
export default function Menu() {
  const items = useSelector((state) => state.allCart.items);
  const dispatch = useDispatch();
// const Menu = () => {
  return (
    <>
        <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>

        <div className="box-container">
          {items.map((item, index) => (
            <div className="box" key={index * Math.random()}>
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
              <div className="price">
              ₹{item.Price} <span>₹{item.offerprice}</span>
              </div>
              <button className="btn" onClick={() => dispatch(addToCart(item))}>
                add to cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  )
// }
}

