import React from 'react';
import styles from './FiltersList.module.scss';


const FiltersList = (props) => {

  //passed down filter functions (includes passed down bool states for button toggling)
  const {ABVFilter, classicFilter, acidityFilter, ABVBool, classicBool, acidityBool} = props;
  const buttonStyle = [styles.filterButton, styles.toggledButton];


  return (
    <div className={styles.filterList}>
      <section>
        <span>High Alcohol (over 6.0% ABH)
          <button className={ABVBool ? buttonStyle.join(" ") : styles.filterButton} onClick={ABVFilter}></button>
        </span>
      </section>  
      <section>
        <span>Classic Range (brewed pre-2010)
          <button className={classicBool ? buttonStyle.join(" ") : styles.filterButton} onClick={classicFilter}></button>
        </span>
      </section>  
      <section>
        <span>High Acidity (less than 4 pH)
          <button className={acidityBool ? buttonStyle.join(" ") : styles.filterButton} onClick={acidityFilter}></button>
        </span>
      </section>   
    </div>
  )
}

export default FiltersList
