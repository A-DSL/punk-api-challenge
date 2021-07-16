import React from 'react';
import styles from './CardList.module.scss';
import beers from '../../assets/beers';
import { useState, useEffect } from "react";

import Card from '../../components/Card/Card';

const CardList = () => {
    return (
        <section className={styles.beerlist}>
            <Card beer={beers[0]} />
            <Card beer={beers[1]} />
            <Card beer={beers[2]} />
        </section>
    )
}

export default CardList;
