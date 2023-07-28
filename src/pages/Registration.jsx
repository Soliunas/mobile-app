import { Link } from 'react-router-dom';
import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function Registration() {
    return (
        <div className={style.start}>
            <img className={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>Sign up</h1>
            <form>

            </form>
            <p>Or sign in with...</p>
            <div>
                <button></button>
                <button></button>
                <button></button>
            </div>
            <Link to='/' className={style.button}>Go home</Link>
        </div>
    )
}