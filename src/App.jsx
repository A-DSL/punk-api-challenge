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

  //fetch
  const fetchBeers = () => {
    return fetch("https://api.punkapi.com/v2/beers").then( (beers) => 
      beers.json()
    ).then( (json) => {
      setBeerList(json);
      setFilteredList(json);
      console.log(beerList);
    })
  }

  //function for updating beer list based on search bar
  const updateBeerSearch = (e) => {
    if (e.target.value == ''){
      setFilteredList(beerList);
    } else{
      setFilteredList(beerList.filter( (beer) => 
        (beer.name.toLowerCase()).includes(e.target.value)
      ));
    }
  } 
  
  //FILTERS:
  //functions that update the filter list based on those with specific properties. pass these functions down to the buttons, use bool states to toggle them on and off.
  const [ABVBool, setABVBool] = useState(false);
  const [classicBool, setClassicBool] = useState(false);
  const [acidityBool, setAcidityBool] = useState(false);
  //ABV Filter
  const ABVFilter = () => {
    if (ABVBool == false){
      setFilteredList(beerList.filter( (beer) => 
        beer.abv > 6.0
      ));
      setABVBool(true);
    } else{
      setFilteredList(beerList);
      setABVBool(false);
    }
  }
  //Classic Filter
  const dateRearranger = (first_brewed) => {
    if (first_brewed.includes("/")){
      const split_brewed = first_brewed.split("/");
      let dateNumber = "";
      for (let i = (split_brewed.length-1); i >= 0; i -= 1){
        dateNumber = dateNumber + split_brewed[i];
      }
      return Number(dateNumber);
    }
    else{
      return 999999;
    }
  }
  const classicFilter = () => {
    if (classicBool == false){
      setFilteredList(beerList.filter( (beer) => 
        dateRearranger(beer.first_brewed) < 201000
      ));
      setClassicBool(true);
    } else{
      setFilteredList(beerList);
      setClassicBool(false);
    }
  }
  //Acidity Filter
  const acidityFilter = () => {
    if (acidityBool == false){
      setFilteredList(beerList.filter( (beer) => 
        beer.ph < 4.0
      ));
      setAcidityBool(true);
    } else{
      setFilteredList(beerList);
      setAcidityBool(false);
    }
  }
  //all filters must A: consider other filters, and B: consider the search function
  //-ABH  -Classic  -pH  -ABH/Classic  -Classic/pH  -ABH/pH  -ABH/Classic/pH, all 7 of these combinations + search divider


  //one time beer fetch at the start
  useEffect(() => {
    fetchBeers();
  }, [])
  //constant filterlist updating (during initial retrieval AND subsequent searches/filters)
  useEffect(() => {

  }, [beerList])



  return <Router>
    <main>
      <Navbar updateBeerSearch={updateBeerSearch} ABVFilter={ABVFilter} classicFilter={classicFilter} acidityFilter={acidityFilter}/>
      <Main filteredList={filteredList} />
    </main>
  </Router>
}

export default App;