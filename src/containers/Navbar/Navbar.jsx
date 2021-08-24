import React from 'react';
import styles from './Navbar.module.scss';
import SearchBox from '../../components/SearchBox/SearchBox';
import FiltersList from '../../components/FiltersList/FiltersList';

const Navbar = (props) => {

    const {ABVFilter, classicFilter, acidityFilter} = props;

    return (
        <div className={styles.navigation}>
            <SearchBox updateBeerSearch={props.updateBeerSearch}/>
            <FiltersList ABVFilter={ABVFilter} classicFilter={classicFilter} acidityFilter={acidityFilter}/>
        </div>
    )
}

export default Navbar;
