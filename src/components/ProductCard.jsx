import React from 'react';
import '../components/ProductShowcase.css';

/**
 * View Component: Product Card
 * Pure presentational component.
 */
const ProductCard = ({ product, onAddToCart, onSelect }) => {
    const { name, desc, details, price, currency, featured, imgUrl } = product;

    return (
        <div
            className={`product-card ${featured ? 'featured' : ''}`}
            onClick={() => onSelect(product.id)}
        >
            {/* Image Area */}
            <div
                className="image-placeholder"
                style={{
                    backgroundImage: `url(${imgUrl})`,
                    backgroundColor: 'transparent',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: featured ? '280px' : '220px',
                    width: '100%',
                    border: 'none'
                }}
            ></div>

            <h3 className="product-title">{name}</h3>
            <p className="product-desc">{desc}</p>

            <div className="product-details">
                <div className="sizes">
                    {details.map((size, index) => (
                        <span key={index}>{size}</span>
                    ))}
                </div>
                <div className="price">{currency} {price}</div>
            </div>

            <button
                className="btn-add-cart"
                onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering card select
                    onAddToCart(product);
                }}
            >
                Add to Cart
            </button>
        </div>
    );
};

export default ProductCard;
