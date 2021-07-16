import React from 'react';
import styles from './CardList.module.scss';
import beers from '../../assets/beers';
import { useState, useEffect } from "react";

import Card from '../../components/Card/Card';

const CardList = () => {
    return (
        <div>
            <Card beer={beers[0]} />
            <Card beer={beers[1]} />
            <Card beer={beers[2]} />
        </div>
    )
}

export default CardList;
