
import React from 'react';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-yellow-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold text-gray-800">
              Welkom bij{' '}
              <span className="text-orange-600">Het witte bolletje</span>
            </h1>
            
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                Bij onze exclusieve banketbakkerij combineren we ambachtelijke traditie 
                met moderne verfijning. Elke dag creëren we met passie en precisie de 
                meest verrukkelijke taarten, gebakjes en desserts.
              </p>
              
              <p>
                Onze meesterbanketbakkers werken met de fijnste ingrediënten om u een 
                onvergetelijke culinaire ervaring te bieden.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img
              src="/lovable-uploads/0e6c9691-9ed6-4af6-8c62-159a24ebd1e5.png"
              alt="Verse broden en bakkerij producten"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
