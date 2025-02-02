"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

type CartItem = {
  id: number;
  title: string;
  imageUrl: string;
  price: number;
  quantity: number;
};

const Checkout = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState<string>("credit_card");

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = JSON.parse(localStorage.getItem("checkoutCart") || "[]");
    setCartItems(storedCart);
  }, []);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-lg mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Left: Checkout Form */}
      <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-700">Full Name</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full p-2 border rounded-md"
              placeholder="johndoe@example.com"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700">Phone Number</label>
            <input
              type="tel"
              className="w-full p-2 border rounded-md"
              placeholder="+1 234 567 890"
              required
            />
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-700">Address</label>
            <input
              type="text"
              className="w-full p-2 border rounded-md"
              placeholder="123 Main St, Apartment 4B"
              required
            />
          </div>

          {/* City & ZIP Code */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700">City</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="New York"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700">ZIP Code</label>
              <input
                type="text"
                className="w-full p-2 border rounded-md"
                placeholder="10001"
                required
              />
            </div>
          </div>

          {/* Payment Method */}
          <div>
            <label className="block text-gray-700">Payment Method</label>
            <select
              className="w-full p-2 border rounded-md"
              required
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit_card">Credit/Debit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash_on_delivery">Cash on Delivery</option>
            </select>
          </div>

          {/* Show Bank Details Only for Credit/Debit Card */}
          {paymentMethod === "credit_card" && (
            <div className="bg-gray-100 p-4 rounded-md">
              <h3 className="text-lg font-semibold mb-2">Bank Details</h3>
              <div className="space-y-3">
                {/* Card Number */}
                <div>
                  <label className="block text-gray-700">Card Number</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="1234 5678 9012 3456"
                    required
                  />
                </div>

                {/* Expiry & CVV */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700">CVV</label>
                    <input
                      type="password"
                      className="w-full p-2 border rounded-md"
                      placeholder="***"
                      required
                    />
                  </div>
                </div>

                {/* Card Holder Name */}
                <div>
                  <label className="block text-gray-700">
                    Card Holder Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00B5A5] text-white p-3 rounded-md font-semibold"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right: Order Summary */}
      <div className="bg-white p-6 rounded-lg shadow-md h-fit">
        <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-72 overflow-y-auto">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={60}
                    height={60}
                    className="rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="text-gray-600">
                      {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
