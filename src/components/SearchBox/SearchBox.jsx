import React from 'react';
import styles from './SearchBox.module.scss';

const SearchBox = (props) => {


    return (
        <div className={styles.searchBox}>
            <p>Search by Name:</p>
            <input type="text" value={props.searchBeer} onChange={props.updateBeerSearch}></input>
        </div>
    )
}


export default SearchBox;
