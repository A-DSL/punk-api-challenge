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

  //base list
  const [beerList, setBeerList] = useState([]);
  //list which will filter base list
  const [filteredList, setFilteredList] = useState("");

  const fetchBeers = () => {
    return fetch("https://api.punkapi.com/v2/beers").then( (beers) => 
      beers.json()
    ).then( (json) => {
      setBeerList(json);
      setFilteredList(json);
      console.log(beerList);
    })
  }

  const updateBeerSearch = (e) => {
    if (e.target.value == ''){
      setFilteredList(beerList);
    } else{
      setFilteredList(beerList.filter( (beer) => 
        (beer.name.toLowerCase()).includes(e.target.value)
      ));
    }
  } 
  

  //one time beer fetch at the start
  useEffect(() => {
    fetchBeers();
  }, [])
  //constant filterlist updating (during initial retrieval AND subsequent searches/filters)
  useEffect(() => {

  }, [beerList])



  return <Router>
    <main>
      <Navbar updateBeerSearch={updateBeerSearch}/>
      <Main filteredList={filteredList} />
    </main>
  </Router>
}

export default App;