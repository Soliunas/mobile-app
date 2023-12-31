import { Link } from 'react-router-dom';
import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function NotFound() {
    return (
        <div className={style.start}>
            <img className={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>404</h1>
            <p>Chicken was not found</p>
            <Link to='/' className={style.button}>Go home</Link>
        </div>
    )
}