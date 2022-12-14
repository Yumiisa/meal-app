import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Categories from './components/categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" exact element={<HomePage />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/random" exact element={<RandomMeal />} />
      </Routes>
      <Footer />
      </Router>
     
      
    </div>
  );
}

export default App;
