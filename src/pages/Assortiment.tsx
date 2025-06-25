
import React from 'react';
import Navigation from '../components/Navigation';
import ProductCard from '../components/ProductCard';

const Assortiment = () => {
  const products = [
    {
      id: 1,
      name: "Frambozen Opera-taartje",
      description: "Luchtige lagen van amandelbiscuit, frambozencrème en ganache.",
      image: "/lovable-uploads/dcabecbf-494e-41a8-940f-ac6ef03cfda6.png",
      ingredients: "Amandelbiscuit, frambozen, room, chocolade, suiker",
      price: "€ 4.25"
    },
    {
      id: 2,
      name: "Citroen-meringue tartelette",
      description: "Knapperige bodem met frisse citroencrème en gebrande Italiaanse meringue.",
      image: "/lovable-uploads/f8d11ed7-e3e6-44da-a9d9-28d0088fbb67.png",
      ingredients: "Tartedeeg, citroenen, eieren, boter, suiker, meringue",
      price: "€ 3.95"
    },
    {
      id: 3,
      name: "Mille-feuille Vanille Bourbon",
      description: "Bladerdeeg met rijke vanillecrème en poedersuiker.",
      image: "/lovable-uploads/f8d11ed7-e3e6-44da-a9d9-28d0088fbb67.png",
      ingredients: "Bladerdeeg, vanille bourbon, room, eieren, suiker",
      price: "€ 4.75"
    }
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Ons Exclusieve Assortiment
          </h1>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Assortiment;
