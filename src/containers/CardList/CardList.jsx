import React from 'react';
import { useState, useEffect } from 'react';
import styles from './CardList.module.scss';

import Card from '../../components/Card/Card';

const CardList = (props) => {

    const filteredList = props.filteredList;
    const [beerListDisplay, setListDisplay] = useState([]);

    //use effect re-renders component whenever list filter is updated.
    useEffect(() => {
        if (filteredList == ""){
            setListDisplay([]);
        }
        else{
            setListDisplay(filteredList.map( (beer, index) => {
                return <Card key={index + "beer"} beer={beer} />
            }))
        }
    }, [filteredList])

    return (
        <section className={styles.beerlist}>
            {beerListDisplay}
        </section>
    )
}

export default CardList;
