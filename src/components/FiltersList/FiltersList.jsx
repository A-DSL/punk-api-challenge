import React from 'react';
import styles from './FiltersList.module.scss';


const FiltersList = (props) => {

  //passed down filter functions
  const {ABVFilter, classicFilter, acidityFilter} = props;


  return (
    <div className={styles.filterList}>
      <section>
        <span>High Alcohol (over 6.0% ABH)
          <button className={styles.filterButton} onClick={ABVFilter}></button>
        </span>
      </section>  
      <section>
        <span>Classic Range (brewed pre-2010)
          <button className={styles.filterButton} onClick={classicFilter}></button>
        </span>
      </section>  
      <section>
        <span>High Acidity (less than 4 pH)
          <button className={styles.filterButton} onClick={acidityFilter}></button>
        </span>
      </section>   
    </div>
  )
}

export default FiltersList
