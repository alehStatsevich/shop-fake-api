import React, {ChangeEvent, useState} from 'react';
import style from "./Login.module.css";
import photo from "../common/img/Group 14.svg";
import error from "../common/img/Union 3.svg";
import ok from "../common/img/Symbol 148 – 1.svg"

const Registration = () => {
    const [login, setLogin] = useState("John Doe");
    const [email, setEmail] = useState("11111@gmail.com");
    const [password, setPassword] = useState("1234567");
    const [errorLoginMessage, setErrorLoginMessage] = useState<string | null>(null);
    const [errorEmailMessage, setErrorEmailMessage] = useState<string | null>(null);
    const [errorPasswordMessage, setErrorPasswordMessage] = useState<string | null>(null);


    const setLoginHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setLogin(e.currentTarget.value);
    };
    const setEmailHandle = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.currentTarget.value);
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
    const setEmailError = () => {
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{1,4}$/i.test(email)) {
            setErrorEmailMessage("Invalid email address");
        } else {
            setErrorEmailMessage(null);
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
                        REJESTRACJA
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
                        {errorLoginMessage ? <img src={error} className={style.errorLogin} alt="error"/>:
                            <img src={ok} className={style.errorLogin} alt="ok"/>}
                        {/*{errorLoginMessage && <span className={style.error}>{errorLoginMessage}</span>}*/}
                    </div>
                    <div className={style.password}>
                        <h6 className={style.h6}>E-mail</h6>
                        <input
                            className={style.inputs}
                            type={"email"}
                            value={email}
                            placeholder={"email"}
                            onChange={setEmailHandle}
                            onBlur={setEmailError}
                        />
                        {errorEmailMessage ? <img src={error} className={style.errorEmail} alt="error"/> :
                            <img src={ok} className={style.errorEmail} alt="ok"/>}
                        {/*{errorEmailMessage && <span className={style.error}>{errorEmailMessage}</span>}*/}
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
                        {errorPasswordMessage ? <img src={error} className={style.errorPassword} alt="error"/> :
                            <img src={ok} className={style.errorPassword} alt="ok"/>}
                        {/*{errorPasswordMessage && <span className={style.error}>{errorPasswordMessage}</span>}*/}
                    </div>
                    <button className={style.btn}><span>ZAREJESTRUJ SIĘ</span></button>
                    <img className={style.photo} src={photo} alt="photo"/>
                </div>
            </div>

        </div>
    );
}

export default Registration;