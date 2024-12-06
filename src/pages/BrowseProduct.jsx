import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
const BrowseProduct = () => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Organic Tomatoes', price: '₹60 / kg', description: 'Fresh, locally grown organic tomatoes.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Farm Fresh Eggs', price: '₹120 / dozen', description: 'Organic, free-range eggs directly from the farm.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Fresh Lettuce', price: '₹40 / head', description: 'Crisp, green lettuce harvested with care.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 4, name: 'Potatoes', price: '₹30 / kg', description: 'Quality potatoes sourced directly from local farms.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 5, name: 'Onions', price: '₹45 / kg', description: 'Fresh onions perfect for any meal.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 6, name: 'Green Peppers', price: '₹70 / kg', description: 'Locally grown green peppers with a fresh taste.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 7, name: 'Carrots', price: '₹50 / kg', description: 'Crunchy and fresh carrots, ideal for salads.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 8, name: 'Cauliflower', price: '₹60 / head', description: 'Organically grown cauliflower for healthy meals.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 9, name: 'Spinach', price: '₹40 / bunch', description: 'Fresh spinach rich in nutrients.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 10, name: 'Cucumbers', price: '₹35 / kg', description: 'Cool and refreshing cucumbers from local farms.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 11, name: 'Strawberries', price: '₹150 / box', description: 'Juicy and sweet strawberries picked fresh.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 12, name: 'Blueberries', price: '₹200 / box', description: 'Antioxidant-rich blueberries for your health.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 13, name: 'Mangoes', price: '₹80 / kg', description: 'Tropical mangoes full of flavor.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 14, name: 'Watermelons', price: '₹25 / kg', description: 'Large, refreshing watermelons perfect for summer.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 15, name: 'Sweet Corn', price: '₹40 / piece', description: 'Fresh sweet corn perfect for grilling.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 16, name: 'Bananas', price: '₹30 / dozen', description: 'Sweet and ripe bananas rich in potassium.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 17, name: 'Pineapples', price: '₹90 / piece', description: 'Juicy pineapples with a tropical taste.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 18, name: 'Pumpkins', price: '₹25 / kg', description: 'Fresh pumpkins for soups and pies.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 19, name: 'Bell Peppers', price: '₹60 / kg', description: 'A mix of colorful bell peppers for all cuisines.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 20, name: 'Zucchini', price: '₹50 / kg', description: 'Fresh zucchini perfect for stir-fries.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 21, name: 'Apples', price: '₹120 / kg', description: 'Crisp and fresh apples from local orchards.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 22, name: 'Beetroots', price: '₹40 / kg', description: 'Nutritious and fresh beetroots.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 23, name: 'Radishes', price: '₹30 / bunch', description: 'Fresh radishes with a peppery flavor.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 24, name: 'Cherries', price: '₹300 / kg', description: 'Sweet and juicy cherries.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 25, name: 'Grapes', price: '₹60 / kg', description: 'Seedless green and black grapes.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 26, name: 'Pears', price: '₹70 / kg', description: 'Sweet and succulent pears.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 27, name: 'Cabbage', price: '₹30 / head', description: 'Fresh cabbage perfect for coleslaw.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 28, name: 'Garlic', price: '₹100 / kg', description: 'Aromatic and fresh garlic for your kitchen.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 29, name: 'Ginger', price: '₹80 / kg', description: 'Spicy and fresh ginger for cooking and teas.', imageUrl: 'https://via.placeholder.com/150' },
    { id: 30, name: 'Turmeric', price: '₹150 / kg', description: 'Organic turmeric root for natural flavor.', imageUrl: 'https://via.placeholder.com/150' },
  ]);

  
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [cartCount, setCartCount] = useState(0); // State to manage the cart count

  useEffect(() => {
    // Filter products based on the search term
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(results);
  }, [searchTerm, products]);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1); // Increment the cart count when a product is added
  };

  return (
    <div className="bg-green-100 min-h-screen p-8">
      {/* Cart Button */}
      <Link to="/cart">
      <div className="flex justify-end items-center mb-6">
        <button className="relative bg-green-600 text-white px-4 py-2 rounded-lg flex items-center shadow-md hover:bg-green-700 transition">
        <FaShoppingCart />
          Cart
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {cartCount}
            </span>
          )}
        </button>
      </div></Link>

      {/* Page Title */}
      <h1 className="text-3xl font-bold text-green-700 text-center mb-8">Browse Products</h1>

      {/* Search Bar */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search products by name..."
          className="w-3/4 p-3 rounded-lg border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Product Grid */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold text-green-700">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <p className="text-gray-700 mt-2">{product.description}</p>
            <button
              onClick={handleAddToCart} // Add to cart event handler
              className="mt-4 w-full bg-green-300 text-white py-2 rounded-md hover:bg-green-600 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-600 col-span-full">
            No products found. Try searching with a different name.
          </p>
        )}
      </div>
    </div>
  );
};

export default BrowseProduct;