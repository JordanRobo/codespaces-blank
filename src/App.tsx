import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';

// Import layout
import { MainLayout } from './layouts/MainLayout';

// Import pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Product } from './pages/Product';

export function App() {

  useEffect(() => {
    window.adobeDataLayer = window.adobeDataLayer || [];
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<Product />} />

          {/* Redirect for any unknown paths */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;