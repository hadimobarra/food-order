import React from "react";
import MealsHeader from '../../assets/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onclick={props.onShowCart} />
        </header>
        <div className={classes['main-image']} >
            <img src={MealsHeader} alt="Food"/>
        </div>
    </React.Fragment>
};

export default Header;