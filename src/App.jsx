import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from './containers/Navbar/Navbar';
import Main from './containers/Main/Main';



//I have no idea what this statement means so I'm just going to assume it's the same thing as defining App
export default class App extends Component {
  render() {
    return <Router>
      <Navbar />
      <Main />
    </Router>
  }
}