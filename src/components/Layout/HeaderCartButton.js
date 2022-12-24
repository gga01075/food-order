import React, {useContext} from "react";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber,item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      {/* 아이콘 */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      {/* 텍스트 */}
      <span>Your Cart</span>
      {/* 장바구니에 담긴 상품의 총량 */}
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
