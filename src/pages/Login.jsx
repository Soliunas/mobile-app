import { Link } from 'react-router-dom';
import style from './Registration.module.css';
import logo from '../assets/img/logo.png';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

export function Login() {
    return (
        <div className={style.start}>
            <img className={style.logo} src={logo} alt='KFC' />
            <h1 className={style.h1}>Sign in</h1>
            <form className={style.form}>
                <p>Login form</p>
            </form>
            <p>Or sign up with...</p>
            <div className={style.links}>
                <button><BsFacebook size='50px'/></button>
                <button><SiGmail size='50px'/></button>
                <button><BsInstagram size='50px'/></button>
                <button><BsTwitter size='50px'/></button>
            </div>
            <p>Do not have an account? <Link to='/Registration'>Register</Link></p>
            <Link to='/' className={style.button}>Go home</Link>
        </div>
    )
}