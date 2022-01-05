import React, {ChangeEvent, useState} from 'react';
import style from './Login.module.css'
import photo from './../common/img/Group 14.svg'
import {Link, Navigate} from "react-router-dom";
import {AppStoreType} from "../bll/store";
import {useSelector} from "react-redux";

const Login = () => {
    const [login, setLogin] = useState("John Doe");
    const [password, setPassword] = useState("1234567");
    const [errorLoginMessage, setErrorLoginMessage] = useState<string | null>(null);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string | null>(null);
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // przy realizacji API
    // const isLoggedIn = useSelector<AppStoreType, boolean>((state) => state.login.isLogined);
    // if (isLoggedIn) {
    //     return <Navigate  to={"/product"} />;
    // }
    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    const setLoginHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };
    const setPasswordHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setPassword(e.currentTarget.value);
    };

    const setLoginError = () => {
        if (login.length < 8 || !login) {
            setErrorLoginMessage("Must be 8 characters or less");
        } else {
            setErrorLoginMessage(null);
        }
    };
    const setPasswordError = () => {
        if (password.length < 7 || password.length < 7 || !password) {
            setErrorPasswordMessage("Password must be more than 7 characters...");
        } else {
            setErrorPasswordMessage(null);
        }
    };

    return (
        <div className={style.authBlock}>
            <div className={style.authForm}>
                <div className={style.loginFonds}>
                    <h3 className={style.h3}>
                        ZALOGUJ SIĘ
                    </h3>
                    <div>
                        <h6 className={style.h6}>Login</h6>
                        <input
                            className={style.inputs}
                            type={"login"}
                            value={login}
                            placeholder={"login"}
                            onChange={setLoginHandle}
                            onBlur={setLoginError}
                        />
                        {errorLoginMessage && <span className={style.error}>{errorLoginMessage}</span>}
                    </div>
                    <div className={style.password}>
                        <h6 className={style.h6}>Hasło</h6>
                        <input
                            className={style.inputs}
                            type={"password"}
                            value={password}
                            placeholder={"password"}
                            onBlur={setPasswordError}
                            onChange={setPasswordHandle}
                        />
                        {errorPasswordMessage && <span className={style.error}>{errorPasswordMessage}</span>}
                    </div>
                    <button className={style.btn}><span>ZALOGUJ SIĘ</span></button>
                    <div className={style.registration}>
                        <p className={style.p}>Nie masz konta?</p>
                        <Link to="/registration" className={style.link}>
                            Zarejestruj się
                        </Link>
                    </div>
                    <img className={style.photo} src={photo} alt="photo"/>
                </div>
            </div>

        </div>
    );
};

export default Login;