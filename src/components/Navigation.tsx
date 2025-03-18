import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();

    // Function to check if a link is active
    const isActive = (path: string) => {
        return location.pathname === path ? 'active-link' : '';
    };

    return (
        <nav>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">DataLayer Example</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li className={isActive('/products')}><Link to="/">Home</Link></li>
                        <li className={isActive('/')}><Link to="/products">Products</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}