import { Link } from 'react-router-dom';
import style from './Registration.module.css';
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
                <button>Facebook</button>
                <button>Google</button>
                <button>Instagram</button>
                <button>Twitter</button>
            </div>
            <p>Already have an account? <Link to='/login'>Log in</Link></p>
            <Link to='/' className={style.button}>Go home</Link>
        </div>
    )
}