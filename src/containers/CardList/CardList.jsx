import React from 'react';
import styles from './CardList.module.scss';

import Card from '../../components/Card/Card';

const CardList = (props) => {
    const beerList = props.filteredList.map( (beer) => {
        return <Card beer={beer} />
    })

    return (
        <section className={styles.beerlist}>
            {beerList}
        </section>
    )
}

export default CardList;
