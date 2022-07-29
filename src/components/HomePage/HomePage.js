import React, {useState, useeffect} from 'react'
import './HomePage.scss'


const HomePage = () => {
  const [searchTerm, setSearchTerm] =useState('')
  return (
    <div className='home'>
      <div className="home-search">
        <input type="text" placeholder="search meal by name..." 
        value={searchTerm} onChange={(e)=>setSearchTerm (e.target.value)} />
        <button>Search Meal</button>
      </div>
      <div className="home-meal">

      </div>
    </div>
  )
}

export default HomePage