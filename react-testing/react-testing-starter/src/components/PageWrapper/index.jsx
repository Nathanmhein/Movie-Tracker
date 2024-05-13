import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const PageWrapper = () => {
    return <main>
            <header>
                <nav>
                    <NavLink to="/">Clicker</NavLink>
                    <NavLink to="/getter">Getter</NavLink>
                    <NavLink to="/darkmode">Dark Mode</NavLink>
                </nav>
            </header>
            <article>
                <Outlet />
            </article>
           </main>
}

export default PageWrapper;