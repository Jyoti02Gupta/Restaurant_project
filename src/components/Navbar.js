import React, { useRef } from 'react'
import Logo from "../assets/images/logo.png";
import { cart } from '../Data';
const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();
    const searchHandler = () => {
        // console.log("abcd");
        // console.log(searchRef.current);
        searchRef.current.classList.toggle("active");
        cartRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    };  
  
    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        navbarRef.current.classList.remove("active");
    }
    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    }
  return (
    <>
        <header className='header'>
            <a href='#' className='logo'>
                <img src={Logo} alt="" />
            </a>
            <nav className='navbar' ref={navbarRef}>
                <a href='#'>Home</a>
                <a href='#about'>About</a>
                <a href='#menu'>Menu</a>
                <a href='#products'>Products</a>
                <a href='#review'>Review</a>
                <a href='#products'>Products</a>
                <a href='#blogs'>Blogs</a>
            </nav>
            <div className='icons'>
                <div className='fas fa-search' onClick={searchHandler}></div>
                <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
            </div>
            <div className='search-form' ref={searchRef}>
                <input type='Search' placeholder='Search here...' id='serach-box'/>
                <label htmlFor='search-box' className='fas fa-search'></label>
            </div>
            <div className="cart-items-container" ref={cartRef}>
                {cart.map((item, index) => (
                    <div className="cart-item" key={index * Math.random()}>
                    <span className="fas fa-times"></span>
                    <img src={item.img} alt="" />
                    <div className="content">
                        <h3>cart item 01</h3>
                        <div className="price">$15.99/-</div>
                    </div>
                    </div>
                ))}
                <a href="#" className="btn">
                    checkout now
                </a>
            </div>
        </header>
    </>
  )
}

export default Navbar