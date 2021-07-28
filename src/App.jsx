import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";

import beers from './assets/beers';
import Navbar from './containers/Navbar/Navbar';
import Main from './containers/Main/Main';


const App = () => {

  const [bool, changeBool] = useState(false);
  const [theCoolerBeerList, setBeer] = useState([]);

  const fetchBeers = () => {
    return fetch("https://api.punkapi.com/v2/beers").then( (beers) => 
      beers.json()
    ).then( (json) => setBeer(json))
  }
  useEffect( () => {fetchBeers()}, [bool]);

  const [filteredBeerList, filterBeerList] = useState(theCoolerBeerList);
  const [searchBeer, updateSearch] = useState('');

  const updateFilter = (search) => {
    if (search == ''){
      filterBeerList(theCoolerBeerList);
    } else{
      const newList = theCoolerBeerList.filter( (beer) => 
        (beer.name.toLowerCase()).includes(search)
       );
      filterBeerList(newList);
    }
  } 
    
  const updateBeerSearch = (e) => {
    const event = e.target.value;
    updateSearch(event);
    updateFilter(searchBeer);
  }


  return <Router>
    <main>
      <Navbar searchBeer={searchBeer} updateBeerSearch={updateBeerSearch}/>
      <Main filteredList={filteredBeerList}/>
    </main>
  </Router>
}

export default App;