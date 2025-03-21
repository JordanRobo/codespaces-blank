import React, { useState, useEffect } from 'react';
import productData from '../lib/products.json';
import { Product } from '../lib';
import { ProductCard } from '../components/ProductCard';
import { useDataLayerEvent } from '../lib/useDataLayer';
import { cleanValue } from '@/lib/data-layer';

export function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const list_name = window.location.pathname.split('/').filter(Boolean).pop();

    useEffect(() => {
        // Load the product data
        setProducts(productData);
        setLoading(false);
    }, []);

    useDataLayerEvent('product_listing-view', {
        default: {
            page: {
                type: "product",
                action: "listing-view",
                path: window.location.pathname,
                title: cleanValue(document.title),
                url: window.location.href,
                list_name
            }
        },
        product: [{
            name: "Name of Product"
        }]
    });

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