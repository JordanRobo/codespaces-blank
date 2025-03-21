import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../lib/products.json';
import type { Product } from '../lib';
import { useDataLayerEvent } from '../lib/useDataLayer';

export function Product() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Find the product by ID from our JSON data
        const foundProduct = productData.find(p => p.id === Number(id));
        setProduct(foundProduct || null);
        setLoading(false);
    }, [id]);

    useDataLayerEvent('product_view', { name: 'Products' });

    if (loading) {
        return <div className="loading">Loading product details...</div>;
    }

    // If product not found, show error
    if (!product) {
        return (
            <div className="product-not-found">
                <h2>Product Not Found</h2>
                <p>Sorry, the product you are looking for does not exist.</p>
                <button onClick={() => navigate('/products')} className="back-button">
                    Back to Products
                </button>
            </div>
        );
    }

    return (
        <div className='flex flex-col mx-auto max-w-[1200px] my-12'>
            <div className="card card-side bg-base-100 shadow-sm">
                <figure>
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product.name}</h2>
                    <div className="badge badge-outline badge-primary">{product.full_price}</div>
                    <p>{product.description}</p>

                    {product.feature.map((feature, index) => (
                                <div className="badge badge-outline badge-accent" key={index}>{feature}</div>
                            ))}
                            
                    <div className="card-actions justify-end">
                    <button onClick={() => navigate('/products')} className="back-button">
                        Back to Products
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}