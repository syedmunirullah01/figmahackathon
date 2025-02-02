"use client";

import { useCart } from "../../context/CartContext";
import Link from "next/link";
import Image from "next/image";
import { FaTrashAlt } from "react-icons/fa";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    localStorage.setItem("checkoutCart", JSON.stringify(cartItems));
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-[20px] md:text-[22px] font-medium pl-3 mb-6">
            Bag
          </h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-orange-200 rounded">
                    <Image
                      src={item.imageUrl}
                      alt={item.title}
                      width={150}
                      height={150}
                    />
                  </div>
                  <div>
                    <h3 className="text-[14px] md:text-[16px] font-normal text-[#272343] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[12px] md:text-[15px] font-normal text-[#757575]">
                      Quantity: {item.quantity}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 md:gap-3">
                  <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                    MRP:{" "}
                  </p>
                  <p className="text-[14px] md:text-[16px] font-normal text-[#111111]">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Delete Icon */}
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => removeFromCart(item.id)}
                >
                  <FaTrashAlt size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        <div>
          <h2 className="text-xl md:text-2xl font-bold mb-6">Summary</h2>
          <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
            <div className="flex justify-between mb-4">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg font-semibold">${totalPrice.toFixed(2)}</p>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-lg">Estimated Delivery & Handling</p>
              <p className="text-lg font-semibold text-green-500">Free</p>
            </div>
            <hr className="mb-4" />
            <div className="flex justify-between mb-6">
              <p className="text-xl font-bold">Total</p>
              <p className="text-xl font-bold">${totalPrice.toFixed(2)}</p>
            </div>
            <Link href="/checkout">
              <button
                className="w-full md:w-[270px] h-[60px] rounded-[30px] text-white bg-[#029FAE]"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
