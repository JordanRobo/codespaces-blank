import React from 'react';
import { Navigation } from '../components/Navigation';
import { Outlet } from 'react-router-dom';

export function MainLayout() {
    return (
        <div className="app">
            
            <Navigation />

            <main className="content">
                <Outlet />
            </main>
        </div>
    );
}