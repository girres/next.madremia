import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

// Import Toast
import Toast from 'react-hot-toast';

// LocalStorage cart name.
const CART_NAME =
  process.env.NEXT_PUBLIC_CART_LOCAL_STORAGE_NAME || 'cart_boilerplate';

// Find the cart in the LocalStorage at the first time.
const localStorageCart = () => {
  if (typeof window === 'undefined') return [];

  const data = localStorage.getItem(CART_NAME);
  return JSON.parse(data ?? '[]');
};

export const useCommerce = () => {
  // Next router
  const pathname = usePathname();

  // General States
  const [init, setInit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lineItems, setLineItem] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  // AddToCart function. This function will add a product to the cart. The line Items is ac object with the product and quantity.
  // The lineItems is an array of objects.
  const addToCart = (product) => {
    // Set loading state to true.
    setLoading(true);

    // Check if the product is already in the cart.
    const lineItem = lineItems.find((item) => item.id === product.id);

    // If the product is already in the cart, we will update the quantity.
    if (lineItem) {
      // Update the quantity.
      lineItem.quantity = lineItem.quantity + 1;

      // Update the line item.
      updateLineItem(lineItem);

      // Show Message that the product was added to the cart.
      Toast.success('Product added to the cart.');

      // Timeout 3 seconds to simulate the loading state.
      setLoading(false);
      return;
    }

    // Add the product to the cart.
    setLineItem([...lineItems, product]);

    // Show Message that the product was added to the cart.
    Toast.success('Product added to the cart.');

    // TODO:  Create Cookie cart to save the cart in the browser.

    // Timeout 3 seconds to simulate the loading state.
    setLoading(false);
  };

  // Update Line Item
  const updateLineItem = (lineItem) => {
    setLineItem(
      lineItems.map((item) => (item.id === lineItem.id ? lineItem : item))
    );
  };

  // Delete line item from the cart.
  const deleteLineItem = (id) => {
    setLineItem(lineItems.filter((lineItem) => lineItem.id !== id));
  };

  // Delete all cart
  const clearCart = () => {
    setLineItem([]);
  };

  // Close cart windown when route changes.
  function closeOpenElements() {
    setCartOpen(false);
  }

  function totalQuantity() {
    return lineItems.reduce((acc, item) => acc + item.quantity, 0);
  }

  // This is useful when the cart is open and the user navigates to another page.
  // Close cart window when route changes.
  useEffect(() => {
    // Your code to close the cart window goes here
    closeOpenElements();
  }, [pathname]);

  // Persdist the cart in the LocalStorage only when the lineItems change and the init is true.
  // That means, we are in the browser and the cart is loaded.
  useEffect(() => {
    if (init) {
      localStorage.setItem(CART_NAME, JSON.stringify(lineItems));
    }
  }, [lineItems]);

  // Load the cart from the LocalStorage at the first time.
  useEffect(() => {
    let mounted = true;
    if (mounted && !init) {
      setLineItem(() => {
        setInit(true);
        return localStorageCart();
      });
    }
    return () => {
      mounted = false;
    };
  }, []);

  return {
    loading,
    setLoading,
    addToCart,
    deleteLineItem,
    updateLineItem,
    clearCart,
    lineItems,
    // CART
    cartOpen,
    setCartOpen,
    totalItems: lineItems.length,
    totalQuantity,
  };
};
