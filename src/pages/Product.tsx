import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import productData from '../lib/products.json';

// Define the Product type for TypeScript
interface Product {
    id: number;
    name: string;
    description: string;
    price: string;
    features: string[];
    image: string;
}

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
        <div className="product-detail">
            <h2>{product.name}</h2>

            <div className="product-info">
                <div className="product-image-container">
                    <img src={product.image} alt={product.name} className="product-detail-image" />
                </div>

                <p className="description">{product.description}</p>
                <p className="price">Price: {product.price}</p>

                <div className="features">
                    <h3>Features:</h3>
                    <ul>
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="navigation-buttons">
                <button onClick={() => navigate('/products')} className="back-button">
                    Back to Products
                </button>
            </div>
        </div>
    );
}