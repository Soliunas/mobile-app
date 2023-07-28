import style from './Start.module.css';
import logo from '../assets/img/logo.png';


export function Start() {
    return (
        <div className={style.start}>
            <img src={logo} alt='KFC' />
            <h1>Welcome</h1>
            <p>Click below to order some chicken</p>
            <a href='/'>Take my money!</a>
        </div>
    )
}