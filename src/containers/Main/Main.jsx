import React from 'react';
import styles from './Main.module.scss';
import beers from '../../assets/beers';
import { useState, useEffect } from "react";

import Card from '../../components/Card/Card';

const Main = () => {
    return (
        <div>
            <Card beer={beers[0]} />
        </div>
    )
}

export default Main;
