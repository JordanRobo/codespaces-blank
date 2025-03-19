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

        let data = {
            "event": "product_listing-view",
            "default": {
                "page": {
                    "type": "product",
                    "action": "listing-view",
                    "list_name": "products"
                }
            },
        }

        if (window.adobeDataLayer) {
            window.adobeDataLayer.push(data)
        }
    }, []);

    if (loading) {
        return <div className="loading">Loading products...</div>;
    }

    return (
        <div className='flex flex-col mx-auto max-w-[1200px] my-12'>
            <div>
                <h2 className="text-4xl font-bold mb-12 text-center">Our Products</h2>
            </div>
            
            <div className="grid place-items-center grid-cols-3 gap-4">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}