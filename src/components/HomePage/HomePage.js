import React, {useState, useCallback,useContext} from 'react'
import { myContext } from '../context/Context'
import './HomePage.scss'


const HomePage = () => {
  const [searchTerm, setSearchTerm] =useState('')
  const {fetchHomePageMeals,meals}= useContext(myContext)
  const fetchMealsHandler=useCallback(()=>{
 fetchHomePageMeals(searchTerm)
  },[searchTerm,fetchHomePageMeals])
  return (
    <div className='home'>
      <div className="home-search">
        <input type="text" placeholder="search meal by name..." 
        value={searchTerm} onChange={(e)=>setSearchTerm (e.target.value)} />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className="home-meal">
        {meals ?meals.map(meal=>(
          <div className='home-meals-grid' key={meal.idMeal}>
            <img src={meal.strMealThumb}alt="#"/>
            <h4>{meal.strMeal}</h4>

          </div>
        )):(<h2>No Meal Found! Try Another Search</h2>)}
      </div>
    </div>
  )
}

export default HomePage