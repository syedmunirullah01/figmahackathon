import { createContext } from "react";

interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartContextType {
  cartCount: number;
  // incrementCart: () => void;
  // decrementCart: () => void;
  addToCart: (item: CartItem) => void; // Function to add an item to the cart
  removeFromCart: (id: string) => void; // Function to remove an item from the cart
  clearCart: () => void; // Function to clear the cart
  cartItems: CartItem[];
  updateCartItem: (id: string, quantity: number) => void;
}

// Create the context
const CartContext = createContext<CartContextType | undefined>(undefined);
export default CartContext;
