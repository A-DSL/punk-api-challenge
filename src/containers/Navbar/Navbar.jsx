import React from 'react';
import styles from './Navbar.module.scss';
import SearchBox from '../../components/SearchBox/SearchBox';

const Navbar = (props) => {

    return (
        <div className={styles.navigation}>
            <SearchBox updateBeerSearch={props.updateBeerSearch}/>
        </div>
    )
}

export default Navbar;
