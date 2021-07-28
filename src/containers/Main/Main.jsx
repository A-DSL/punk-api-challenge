import React from 'react';
import styles from './Main.module.scss';

import CardList from '../CardList/CardList';

const Main = (props) => {
    return (
        <main className={styles.mainbody}>
            <CardList filteredList={props.filteredList}/>
        </main>
    )
}

export default Main;
