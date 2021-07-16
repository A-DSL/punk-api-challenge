import React from 'react';
import styles from './CardList.module.scss';
import beers from '../../assets/beers';
import { useState, useEffect } from "react";

import Card from '../../components/Card/Card';

const CardList = () => {
    return (
        <div>
            <Card beer={beers[0]} />
        </div>
    )
}

export default CardList;
