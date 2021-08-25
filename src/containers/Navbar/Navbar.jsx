import React from 'react';
import styles from './Navbar.module.scss';
import SearchBox from '../../components/SearchBox/SearchBox';
import FiltersList from '../../components/FiltersList/FiltersList';

const Navbar = (props) => {

    const {ABVFilter, classicFilter, acidityFilter, ABVBool, classicBool, acidityBool} = props;

    return (
        <div className={styles.navigation}>
            <h1>PUNK API</h1>
            <section className={styles.navigation__features}>
              <SearchBox updateBeerSearch={props.updateBeerSearch}/>
              <FiltersList ABVFilter={ABVFilter} classicFilter={classicFilter} acidityFilter={acidityFilter} ABVBool={ABVBool} classicBool={classicBool} acidityBool={acidityBool}/>
            </section>
        </div>
    )
}

export default Navbar;
