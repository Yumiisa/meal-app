import React, {useEffect, useContext} from 'react'
import { myContext } from '../context/Context'


const SearchMeal = () => {
    const {meals}=useContext(myContext)
    if(meals.length < 1 ) {
        return(
            <h2>No meal match the search</h2>
        )
    }

    
  
}

export default SearchMeal