import React from 'react';
import styles from './Card.module.scss';
import { useState, useEffect } from "react";

const Card = (props) => {
    const {id, name, tagline, first_brewed, description, image_url, abv, ibu, target_fg, target_og, ebc, srm, ph, attenuation_level, volume, boil_volume, method, ingredients, food_pairing, brewers_tips, contributed_by} = props.beer
    return (
        <div>
            {name}
            {tagline}
        </div>
    )
}

export default Card;
