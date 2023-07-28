import { Link } from 'react-router-dom';
import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function Start() {
    return (
        <div className={style.start}>
            <img class Name={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>Welcome</h1>
            <p>Click below to register and order some chicken</p>
            <Link to='/registration' className={style.button}>Take my money</Link>

        </div>
    )
}