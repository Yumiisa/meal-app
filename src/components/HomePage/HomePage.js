import React, {useState, useCallback,useContext} from 'react'
import { myContext } from '../context/Context'
import { Link } from 'react-router-dom'
import "./HomePage.scss"
import SearchMeal from '../searchMeal/SearchMeal';


const HomePage = () => {
  const [searchTerm, setSearchTerm] =useState('')
  const {fetchHomePageMeals,meals}= useContext(myContext)
  
  const fetchMealsHandler=useCallback(()=>{
 fetchHomePageMeals(searchTerm)
  },[searchTerm,fetchHomePageMeals])
  
  return (

    <div className='home'>
      <Link to="/categories"><li>Categories</li></Link>
        
      <div className="home-search">
        <input type="text" placeholder="search meal by name..." 
        value={searchTerm} onChange={(e)=>setSearchTerm (e.target.value)} />
        <button onClick={fetchMealsHandler}>Search Meal</button>
      </div>
      <div className="home-grid" >
        {meals?  (meals.map(meal=>(
          <div className='home-meal' key={meal.idMeal}>
            <img src={meal.strMealThumb} alt="#"/>
            <h4>{meal.strMeal}</h4>

          </div>
        ))):(<h2>{<SearchMeal/>}</h2>)}
      </div>
     
    </div>
  )
}

export default HomePage