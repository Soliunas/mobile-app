import { Link, Outlet } from 'react-router-dom';
import style from '../pages/Registration.module.css';
import { useEffect, useState } from 'react';
import logo from '../assets/img/logo.png';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { BsTwitter } from "react-icons/bs";

export function AuthLayout() {
    const [click, setClick] = useState(() => JSON.parse(localStorage.getItem('logo')) || 0);

    useEffect(() => {
        localStorage.setItem('logo', JSON.stringify(click));
    }, [click]);

    function updateCount() {
        setClick(click + 1);
    }

    return (
        <div className={style.start}>
            <div className={style.logo}>
                <img onClick={updateCount} src={logo} alt="KFC" />
                <p>{click}</p>
            </div>
            <Outlet />
            <div className={style.links}>
                <button><BsFacebook size='50px'/></button>
                <button><SiGmail size='50px'/></button>
                <button><BsInstagram size='50px'/></button>
                <button><BsTwitter size='50px'/></button>
            </div>
        </div>
    );
}