import React from 'react';
import Nav from "./Nav";
import style from "./Header.module.css"

const Header = () => {
    return (
        <div className={style.headerBlock}>
            <Nav/>
        </div>
    );
};

export default Header;