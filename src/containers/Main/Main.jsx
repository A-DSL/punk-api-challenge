import React from 'react';
import styles from './Main.module.scss';
import beers from '../../assets/beers';
import { useState, useEffect } from "react";

import CardList from '../CardList/CardList';

const Main = () => {
    return (
        <div>
            <CardList />
        </div>
    )
}

export default Main;
