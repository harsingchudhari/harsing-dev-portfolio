import React from 'react';
import ProductCard from './ProductCard';
import ProductDetail from './ProductDetail';
import { useProductController } from '../hooks/useProductController';
import './ProductShowcase.css';

/**
 * Main View Container
 * Connects the View (ProductCard) with the Controller (useProductController).
 */
const ProductShowcase = ({ onBack }) => {
    // Use the Controller to get data and logic
    const { products, addToCart, openDetail, closeDetail, activeProduct, cartCount } = useProductController();

    return (
        <div className="showcase-wrapper">
            {/* HUD / Cart Indicator */}
            <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                background: 'white',
                padding: '10px 20px',
                borderRadius: '20px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                fontWeight: 'bold',
                color: '#333',
                zIndex: 10
            }}>
                Cart: {cartCount} items
            </div>

            <div className="showcase-container">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        onAddToCart={addToCart}
                        onSelect={() => openDetail(product)}
                    />
                ))}
            </div>

            {/* Detail Overlay */}
            {activeProduct && (
                <ProductDetail
                    product={activeProduct}
                    onBack={closeDetail}
                    onAddToCart={(p) => {
                        addToCart(p);
                        closeDetail();
                    }}
                />
            )}

            {/* Navigation Helper */}
            <button
                onClick={onBack}
                style={{
                    position: 'fixed',
                    top: '20px',
                    left: '20px',
                    padding: '10px 20px',
                    background: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    zIndex: 100
                }}
            >
                ← Back to Auth
            </button>
        </div>
    );
};

export default ProductShowcase;
