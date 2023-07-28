import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function NotFound() {
    return (
        <div className={style.start}>
            <img class Name={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>404</h1>
            <p>Chicken was not found</p>
            <a className={style.button} href='/'>Go home</a>
        </div>
    )
}