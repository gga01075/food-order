import React, { Fragment } from 'react'
import MealsSummary from './MealsSummary'
import AvailableMeals from './AvailableMeals'

// 음식 목록, 요약 텍스트 렌더링
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
    </Fragment>
  );
}

export default Meals
