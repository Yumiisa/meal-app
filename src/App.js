import React from 'react';
import Navbar from './components/NavBar/Navbar';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom"
import Categories from './components/categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
      <Footer />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/categories" exact element={<Categories />} />
        <Route path="/random" exact element={<RandomMeal />} />
      </Routes>
      </Router>
     
      
    </div>
  );
}

export default App;
