import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        }) 
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
        // We don't care about the element, so we name it '_'. But the index is important, so we name it 'i'.
        // The spread operator with Array method, e.g. ...Array(3) creates an array with 3 empty items. Here, we use it to then map to the number of ingredients in each key, because we need to create a new BurgerIngredient component for each ingredient quantity.
    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}

export default burger; 