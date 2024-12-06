import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
  <>  

<section className="size-full bg-[url('assets\farm.jpg')]
bg-cover bg-center bg-no-repeat bg-fixed bg-image text-white py-24">

  <div className="container mx-auto text-center">
    <h1 className="text-4xl font-bold mb-4">Farm-Fresh Goodness, Delivered to Your Door.</h1>
    <button className="bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-100 delay-100">
      Join Now
    </button>
  </div>
</section>

 <div className="bg-green-100 min-h-screen flex flex-col items-center text-gray-900">

    <section className="py-16 bg-green-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-12">Welcome to GreenRoots Mart</h2>
    <p className="text-gray-700 mb-8">
      GreenRoots Mart is revolutionizing the agricultural marketplace by fostering direct connections between farmers, consumers, and retailers.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">Fair Prices</h3>
        <p className="text-gray-700 mt-4">
          Farmers receive fair compensation for their products, ensuring a sustainable income.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">Direct Connections</h3>
        <p className="text-gray-700 mt-4">
          Eliminate intermediaries by connecting directly with local farmers and producers.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">Eco-Friendly Products</h3>
        <p className="text-gray-700 mt-4">
          Support eco-friendly practices and choose products that are locally sourced and sustainable.
        </p>
      </div>
    </div>
  </div>
</section>
   
    

   {/* Our Mission Section */}
<div className="max-w-7xl mx-auto p-10  flex flex-col md:flex-row items-center">
  {/* Left Side: Graphic Logo */}
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="\src\assets\our_mission.png"
      alt="Mission Graphic"
      className="max-w-full h-auto rounded-lg"
    />
  </div>

  {/* Right Side: Mission Statement */}
  <div className="w-full md:w-1/2 md:pl-8 bg-green-50 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-green-700">
    <h2 className="text-4xl font-extrabold text-green-800 mb-6 text-center md:text-left">
      Our Mission
    </h2>
    <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed pt-2 pb-10">
    <li>Empower farmers.</li>
      <li>Offer sustainable products to consumers.</li>
      <li>Promote a healthier environment.</li>
      <li>Connect farmers directly to consumers.</li>
      <li>Foster sustainable agricultural practices.</li>
      <li>Support local communities.</li>
      <li>Contribute to environmental sustainability.</li>
    </ul>
  </div>
</div>
 {/* How It Works Section */}
<section className="py-16 bg-green-100">
  <div className="container mx-auto text-center">
    <h2 className="text-3xl font-bold text-green-700 mb-8">How It Works : </h2>
    <p className="text-gray-700 mb-12">
      
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">1.Farmers List Their Products</h3>
        <p className="text-gray-700 mt-4">
        Farmers upload their products, with details and prices, directly onto our platform.
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">2.Fair Transations & Delivery</h3>
        <p className="text-gray-700 mt-4">
         Our secure system ensures fair transations, enabling consumers to support sustainable practices.
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-green-50 p-6 rounded-lg shadow-md hover:shadow-lg">
        <h3 className="text-xl font-semibold text-green-600">Consumers Browse & Purchase </h3>
        <p className="text-gray-700 mt-4">
          Customers explore products, make thier selections, and purchase directly through the platform. 
        </p>
      </div>
    </div>
  </div>
</section>

 {/* Our Mission Section */}
 <div className="max-w-7xl mx-auto p-10  flex flex-col md:flex-row items-center">
  {/* Left Side: Graphic Logo */}
  

  {/* Right Side: Mission Statement */}
  <div className="w-full md:w-1/2 md:pl-8 bg-green-50 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-green-700">
    <h2 className="text-4xl font-extrabold text-green-800 mb-6 text-center md:text-left">
    Our Impact on the Community
    </h2>
    <p className="list-disc list-inside text-lg text-gray-700 leading-relaxed pt-2 pb-10">
    GreenRoots Mart strengthens local economies, improves access to fresh produce, and empowers farmers to
    thrive. By supporting small farmers, we’re building resilient communities and promoting a healthier planet.
      </p>
  
  </div>
  <div className="w-full md:w-1/2 flex justify-center">
    <img
      src="\src\assets\our_community_logo.png"
      alt="Mission Graphic"
      className="max-w-full h-auto rounded-lg"
    />
  </div>
</div>
{/*video div*/}
<div
      className="bg-green-50 p-6 rounded-lg mb-8 shadow-md mt-6 mx-auto w-full h-max"
      style={{
        color: "#333",
        maxWidth: "96%", // Make it take up more width of the page
      }}
    >
       <h2 className="text-4xl font-extrabold text-center text-green-800 mb-6">
    Our Value Proposition
  </h2>
  <p className="text-xl text-center text-gray-800 mb-8 leading-relaxed">
  GreenRoots Mart accommodates direct transactions between buyers and sellers.
   All intermediate supply chain stages are covered by GreenRoots Mart and our partnership network.
  </p>
      <div className="relative w-full overflow-hidden rounded-lg" style={{height:"599px"}}>
       <div
  className="relative w-full overflow-hidden rounded-lg"
>
  <video
    className="w-full h-full object-cover"
    src="src/assets/our _solution_videoframe.mp4"
    title="GreenRoots Mart Video"
    autoPlay
    muted
    loop
    style={{
      width: "100%",
      height: "100%",
      objectFit: "cover",
    }}
  ></video>
</div>

      </div>
    </div>





     {/*
      <div className="max-w-4xl p-8 bg-white rounded-lg shadow-lg mt-10">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Impact on the Community</h2>
        <p className="text-lg text-gray-700 mb-4">
          GreenRoots Mart strengthens local economies, improves access to fresh produce, and empowers farmers to
          thrive. By supporting small farmers, we’re building resilient communities and promoting a healthier planet.
        </p>
      </div>
      */}

<section className="py-16 bg-green-50">
  <div className="container mx-auto">
    <h2 className="text-4xl font-extrabold text-center text-green-800 mb-12">Our Services</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Card 1 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 delay-50 text-center">
        <img
          src="src\assets\Trancperancy_green_logo.png"
          alt="Feature 1"
          className="w-16 h-16 mx-auto mb-4 rounded-full border border-green-300"
        />
        <h3 className="text-xl font-semibold text-green-600">Transparency</h3>
        <p className="text-gray-700 mt-2">
        Direct transactions between farmers and industry/retail
        </p>
      </div>
      {/* Card 2 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 delay-50 text-center">
        <img
          src="src\assets\user-friendly_logo.png"
          alt="Feature 2"
          className="w-16 h-16 mx-auto mb-4 rounded-full border border-green-300"
        />
        <h3 className="text-xl font-semibold text-green-600">User Firendly</h3>
        <p className="text-gray-700 mt-2">
        Reduce costs to buyers without losing reliability
        </p>
      </div>
      {/* Card 3 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 delay-50 text-center">
        <img
          src="src\assets\fairtrade_green_logo.png"
          alt="Feature 3"
          className="w-16 h-16 mx-auto mb-4 rounded-full border border-green-300"
        />
        <h3 className="text-xl font-semibold text-green-600">Fair Trade</h3>
        <p className="text-gray-700 mt-2">
        Redistribution of value in food supply chain
        </p>
      </div>
      {/* Card 4 */}
      <div className="bg-white p-6 rounded-lg shadow-md hover:bg-green-100 delay-50 text-center">
        <img
          src="src\assets\user_tracebiliy_logo.png"
          alt="Feature 4"
          className="w-16 h-16 mx-auto mb-4 rounded-full border border-green-300"
        />
        <h3 className="text-xl font-semibold text-green-600">Food Traceablity</h3>
        <p className="text-gray-700 mt-2">
        Crop reliability through supply chain traceability
        (coming soon)
        </p>
      </div>
    </div>
  </div>
</section>



      {/* Testimonials Section */}
      <div className="max-w-full ml-16 mr-16 p-8 bg-green-50 rounded-lg shadow-lg mt-10 mb-10">
        <h2 className="text-3xl font-bold text-green-800 text-center mb-6">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg">
            <p className="text-gray-700">
              "GreenRoots Mart has changed the way I shop for groceries. I feel good knowing I’m supporting local
              farmers and sustainable practices!"
            </p>
            <p className="text-sm font-semibold text-green-600 mt-2">- Prasun Kushwaha.</p>
          </div>
          <div className="bg-green-100 p-4 rounded-lg shadow-md hover:shadow-lg">
            <p className="text-gray-700">
              "As a farmer, I’m finally able to sell my products directly to consumers, and it’s been an amazing
              experience. Thank you, GreenRoots Mart!"
            </p>
            <p className="text-sm font-semibold text-green-600 mt-2">- Aryan Goel.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default HomePage;
