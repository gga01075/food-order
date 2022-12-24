import React, { Fragment } from 'react'
import classes from './Header.module.css'

import HeaderCartButton from './HeaderCartButton'

//이미지 import => 확장자까지 써줄것
import mealsImage from '../../assets/meals.jpg'

const Header = props => {

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        {/* 장바구니 여는 버튼 */}
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      {/* 
      module.css에서 사용하는 클래스명에 -이 있다면 점표기법은 사용할 수 없다.
      따라서, 대괄호와 백틱을 사용하여 줄 수 있다. 
       */}
      <div className={classes[`main-image`]}>
        <img src={mealsImage} alt="A table of delicious food!" />
      </div>
    </Fragment>
  );
}

export default Header