import React, {useEffect, useContext} from 'react'
import { myContext } from '../context/Context'
import "./RandomMeal.scss"

const RandomMeal = () => {
  const {fetchRandomMeal,randomMeal}=useContext(myContext);
  useEffect(() => {
  fetchRandomMeal()
  },[fetchRandomMeal])
  return (
    <div className="random">
    {randomMeal.map((meal)=>(
      <div key={meal.idMeal} className="random-grid">
        <div className="random-grid-control">
          <img src={meal.strMealThumb} alt="#"/>
          <button onClick={()=>fetchRandomMeal()}>Generate another meal</button>
        </div>
        <div className="random-grid-instruction">
          <h4>Instructions</h4>
          <p>{meal.strInstructions}</p>
        </div>
      </div>
    ))}
    </div>
  )
}

export default RandomMeal
