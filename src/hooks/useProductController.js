import { useState } from 'react';
import { productsData } from '../data/productData';

/**
 * Controller Hook (ViewModel)
 * Handles business logic, state management, and event handlers.
 */
export const useProductController = () => {
    const [cart, setCart] = useState([]);
    const [products, setProducts] = useState(productsData);
    const [activeProduct, setActiveProduct] = useState(null); // 'null' means list view

    const addToCart = (product) => {
        setCart((prev) => [...prev, product]);

        // Determine color based on product type for basic feedback
        const colorName = product.featured ? 'Blue' : 'White';

        // We could trigger a toast here, but for now we'll return a status
        console.log(`Added ${colorName} Hoodie to cart. Total items: ${cart.length + 1}`);
        alert(`Added ${product.name} (${colorName}) to cart!`);
    };

    const selectProduct = (id) => {
        // Logic to perhaps make a clicked product 'featured' dynamically (list view interaction)
        setProducts(products.map(p => ({
            ...p,
            featured: p.id === id
        })));
    };

    const openDetail = (product) => {
        setActiveProduct(product);
    };

    const closeDetail = () => {
        setActiveProduct(null);
    };

    return {
        products,
        cart,
        addToCart,
        selectProduct,
        openDetail,
        closeDetail,
        activeProduct,
        cartCount: cart.length
    };
};
