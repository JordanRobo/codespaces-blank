import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Import layout
import { MainLayout } from './layouts/MainLayout';

// Import pages
import { Home } from './pages/Home';
import { Products } from './pages/Products';
import { Product } from './pages/Product';

// Import data layer utilities
import { initializeDataLayer } from './lib/data-layer';

export function App() {
  useEffect(() => {
    // Initialize the data layer
    initializeDataLayer();
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