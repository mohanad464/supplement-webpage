import { useCart } from '../context/Auth/Cart/CartContext';
import React from 'react';

// Define the props interface
interface CartButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function CartButton({ onClick }: CartButtonProps) {
  const { cartItems } = useCart();
  
  // Calculate total number of items in the cart
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <button
      onClick={onClick}
      className="relative block rounded-md px-5 py-2.5 text-sm bg-cart font-medium transition hover:bg-secondary"
      aria-label="Cart"
    >
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 bg-purple-400 text-white text-xs rounded-full">
          {itemCount}
        </span>
      )}
      🛒
    </button>
  );
}
