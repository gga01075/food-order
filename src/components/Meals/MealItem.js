import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from './MealItemForm'


const MealItem = props => {

  // 가격 앞에 $를 붙이고 가격은 소수점 이하 2자리까지 표현
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.h3}>{props.name}</h3>{" "}
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm />
      </div>
    </li>
  );
};

export default MealItem;
