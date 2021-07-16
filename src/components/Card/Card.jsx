import React from 'react';
import styles from './Card.module.scss';
import { useState, useEffect } from "react";

const Card = (props) => {
    const {id, name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level, volume, boil_volume, method, ingredients, food_pairing, brewers_tips, contributed_by} = props.beer
    return (
    <section className={styles.card}>
        <div className={styles.cardleft}>
            <img src={image_url} alt="Image not working." className={styles.cardleft__image}/>
            <div className={styles.filterdetails}>
                <span className={styles.filterdetails__block}>
                    <p>ABV</p>
                    <p>{abv}</p>
                </span>
                <span className={styles.filterdetails__block}>
                    <p>IBU</p>
                    <p>{ibu}</p>
                </span>
                <span className={styles.filterdetails__block}>
                    <p>EBC</p>
                    <p>{ebc}</p>
                </span>
                <span className={styles.filterdetails__block}>
                    <p>pH</p>
                    <p>{ph}</p>
                </span>
                <span className={styles.filterdetails__block}>
                    <p>Attenuation</p>
                    <p>{attenuation_level}</p>
                </span>
            </div>
        </div>

         <div className={styles.cardright}>
            <div className={styles.cardright__title}>
                <h4>{name}</h4>
                <p>{tagline}</p>
            </div>
            <div className={styles.cardright__info}>
                <p>{description}</p>
                <p>First brewed: {first_brewed}</p>
                <p>Brewing Tips: {brewers_tips}</p>
            </div>
        </div>
    
</section>
)
}

export default Card;
