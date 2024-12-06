import React, { useState } from 'react';

const CartPage = () => {
  // Dummy cart items (some data from BrowseProduct)
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      price: '₹60 / kg',
      description: 'Fresh, locally grown organic tomatoes.',
      quantity: 2,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Farm Fresh Eggs',
      price: '₹120 / dozen',
      description: 'Organic, free-range eggs directly from the farm.',
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Potatoes',
      price: '₹30 / kg',
      description: 'Quality potatoes sourced directly from local farms.',
      quantity: 3,
      imageUrl: 'https://via.placeholder.com/150',
    },
  ]);

  // Function to remove an item from the cart
  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Function to calculate total price
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const pricePerUnit = parseInt(item.price.match(/\d+/)[0]); // Extract price as number
      return total + pricePerUnit * item.quantity;
    }, 0);
  };

  return (
    <div className="bg-green-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">Your Cart</h1>

      {/* Cart Items */}
      {cartItems.length > 0 ? (
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cartItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
              <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold text-green-700">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
              <p className="text-gray-700 mt-2">{item.description}</p>
              <p className="text-gray-700 mt-2">
                Quantity: <span className="font-semibold">{item.quantity}</span>
              </p>
              <button
                onClick={() => removeItem(item.id)}
                className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Remove from Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">Your cart is empty.</p>
      )}

      {/* Total Price */}
      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-green-700">Cart Summary</h2>
          <p className="text-lg text-gray-700 mt-4">
            Total Items: <span className="font-semibold">{cartItems.length}</span>
          </p>
          <p className="text-lg text-gray-700 mt-2">
            Total Price: <span className="font-semibold">₹{calculateTotal()}</span>
          </p>
          <button className="mt-4 w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;
