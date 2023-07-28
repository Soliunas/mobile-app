import { Outlet } from 'react-router-dom';
import style from '../pages/Registration.module.css';

export function AccountLayout() {
    return (
        <div>
            <header>
                ACCOUNT HEADER
            </header>
            <Outlet />
        </div>
    );
}