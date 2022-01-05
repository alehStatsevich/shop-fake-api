import React from 'react';
import {Link} from 'react-router-dom';
import style from "./Nav.module.css"

const Nav = () => {
    return (
        <div className={style.nav}>
            <Link to="/login" className={style.link}>
                login
            </Link>
            <Link to="/registration" className={style.link}>
                registration
            </Link>
            <Link to="/forgot" className={style.link}>
                forgot
            </Link>
            <Link to="/" className={style.link}>
                home
            </Link>
            <Link to="/product" className={style.link}>
                products
            </Link>
            <Link to="/contact" className={style.link}>
                contact
            </Link>
        </div>
    );
};

export default Nav;