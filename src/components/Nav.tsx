import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import style from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={style.nav}>
            <NavLink to="/login" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                login
            </NavLink>
            <NavLink to="/registration" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                registration
            </NavLink>
            <NavLink to="/forgot" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                forgot
            </NavLink>
            <NavLink to="/" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                home
            </NavLink>
            <NavLink to="/product" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                products
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) =>  isActive ? style.act  :  style.link}>
                contact
            </NavLink>
        </div>
    );
};

export default Nav;