import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navigation() {
    const location = useLocation();

    // Function to check if a link is active
    const isActive = (path: string) => {
        return location.pathname === path ? 'active-link' : '';
    };

    return (
        <nav className="navbar bg-base-100 shadow-sm w-full">
            <div className="container mx-auto max-w-[1200px] w-full px-4">
                <div className="flex justify-between w-full">
                    <div className="flex-1">
                        <Link className="btn btn-ghost text-xl" to="/">Data Layer & JSONs Trading</Link>
                    </div>
                    <div className="flex-none">
                        <ul className="menu menu-horizontal px-1">
                            <li className={isActive('/products')}><Link to="/">Home</Link></li>
                            <li className={isActive('/')}><Link to="/products">Products</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}