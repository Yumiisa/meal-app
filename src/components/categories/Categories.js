import React,{useEffect,useContext} from 'react'
import { myContext } from '../context/Context'
import { Link } from 'react-router-dom' 
import "./Categories.scss"
const Categories = () => {
  const {fetchCategories,categories}=useContext(myContext)
  useEffect(()=>{
    fetchCategories()
  },[fetchCategories])
  return (
    <div className='categories'>
      <Link to="/random"><li>RandomMeal</li></Link>
      {categories.map((category)=>(
       <div key={category.idCategory}>
        <img src={category.strCategoryThumb} alt="#"/>
        <h4>{category.strCategory}</h4>
        <p>{category.strCategoryDescription.length >250 ? `${category.strCategoryDescription.substring(0,250)}...`:category.strCategoryDescription}</p>
       </div>
       ))}
    </div>
  )
}

export default Categories
