import React from 'react';
import { Navigation } from '../components/Navigation';
import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';

export function MainLayout() {
    return (
        <div className="app">
            
            <Navigation />

                <main className='min-h-screen h-full'>
                    <Outlet />
                </main>

                <Footer />
        </div>
    );
}