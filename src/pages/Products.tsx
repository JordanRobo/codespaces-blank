import React, { useState, useEffect } from 'react';
import productData from '../lib/products.json';
import { Product } from '../lib';
import { ProductCard } from '../components/ProductCard';

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Load the product data
        setProducts(productData);
        setLoading(false);
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className="products-page">
            <h2 className="text-2xl font-bold mb-6">Our Products</h2>

            <div className="products-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}