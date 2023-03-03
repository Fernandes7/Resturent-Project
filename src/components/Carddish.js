import React from 'react'
import "./Special.css";
function Carddish(props) {
  return (
    <div>
        <li className='special center' onClick={()=>props.showpopup(props.meal.strMeal)}>
            <img src={props.meal.strMealThumb} alt="me"></img>
            <h2>{props.meal.strCategory}</h2>
        </li>
    </div>
  )
}

export default Carddish