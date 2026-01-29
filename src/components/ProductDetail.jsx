import React, { useState } from 'react';
import './ProductShowcase.css';

const ProductDetail = ({ product, onBack, onAddToCart }) => {
    const [selectedSize, setSelectedSize] = useState(null);

    if (!product) return null;

    return (
        <div className="product-detail-overlay">
            <div className="product-detail-card">
                <button className="btn-close" onClick={onBack}>×</button>

                <div className="detail-media">
                    <div
                        className="detail-image"
                        style={{
                            backgroundImage: `url(${product.imgUrl})`,
                        }}
                    ></div>
                </div>

                <div className="detail-info">
                    <h2 className="detail-title">{product.name}</h2>
                    <div className="detail-price">{product.currency} {product.price}</div>

                    <p className="detail-desc">
                        {product.desc}. Experience premium comfort with our
                        high-quality cotton blend material, designed for both
                        style and durability. Perfect for any season.
                    </p>

                    <div className="size-selector">
                        <span className="label">Select Size:</span>
                        <div className="sizes-grid">
                            {product.details.map((size) => (
                                <button
                                    key={size}
                                    className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                                    onClick={() => setSelectedSize(size)}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="action-row">
                        <button
                            className="btn-add-cart large"
                            disabled={!selectedSize}
                            onClick={() => {
                                if (selectedSize) {
                                    onAddToCart({ ...product, selectedSize });
                                }
                            }}
                        >
                            {selectedSize ? `Add to Cart - ${selectedSize}` : 'Select a Size'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
