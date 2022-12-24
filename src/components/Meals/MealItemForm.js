import React, {useContext} from "react";
import classes from "./MealItemForm.module.css";
import CartContext from "../../store/cart-context";
import Input from "../UI/Input";

const MealItemForm = () => {
  const cartCtx = useContext(CartContext);

  const addCart = () => {

  }

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button className={classes.button} onClick={addCart}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
