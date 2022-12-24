import React from "react";
import classes from "./HeaderCartButton.module.css";

import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* 아이콘 */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* 텍스트 */}
      <span>Your Cart</span>
      {/* 장바구니에 담긴 상품의 총량 */}
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
