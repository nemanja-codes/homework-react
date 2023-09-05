import React from "react";
import { Link } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";

function MenuBar({ cartNum, isHome, isShop }) {
  return (
    <div className={isHome === 1 ? "menu-bar" : "menu-else"}>
      <Link to="/" className="link-img-fred">
        <img
          src="https://i.pinimg.com/originals/65/63/64/656364729a56be6f0986d8a9e69749c7.png"
          className={isHome === 1 ? "img-fred" : "img-fred-else"}
        />
      </Link>
      {isHome === 1 ? <br /> : <></>}

      <Link to="/" className={isHome === 1 ? "txt-fred" : "txt-fred-else"}>
        Fred Perry
      </Link>
      <div
        className={
          isHome === 1 ? "menu-bar-items-div" : "menu-bar-items-div-else"
        }
      >
        <Link
          to="/shop"
          className="menu-bar-items"
          style={isShop === 1 ? { color: "gold" } : { color: "white" }}
        >
          Shop
        </Link>
        
      </div>
      {isShop === 1 ? (
        <Link to="/cart" className="cart-items">
          <BsCartFill className="icon-cart" />
          <p className="cart-num">{cartNum}</p>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MenuBar;