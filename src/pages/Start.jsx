import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function Start() {
    return (
        <div className={style.start}>
            <img class Name={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>Welcome</h1>
            <p>Click below to order some chicken</p>
            <a className={style.button} href='/'>Take my money</a>
        </div>
    )
}