
import React, { useState } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  ingredients: string;
  price: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false);

  if (showDetails) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
        <Card className="max-w-md w-full bg-white">
          <CardContent className="p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              {product.name}
            </h3>
            <p className="text-gray-600 mb-4">
              {product.description}
            </p>
            <div className="mb-4">
              <span className="font-semibold text-gray-800">Ingrediënten: </span>
              <span className="text-gray-600">{product.ingredients}</span>
            </div>
            <div className="mb-6">
              <span className="font-semibold text-gray-800">Prijs: </span>
              <span className="text-gray-800 font-bold">{product.price}</span>
            </div>
            <div className="flex gap-3">
              <Button 
                className="flex-1 bg-orange-600 hover:bg-orange-700 text-white"
                onClick={() => console.log('Add to cart:', product.name)}
              >
                Voeg toe aan winkelwagen
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowDetails(false)}
                className="border-gray-300 hover:bg-gray-50"
              >
                Sluiten
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <Card 
      className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={() => setShowDetails(true)}
    >
      <CardContent className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm">
          {product.description}
        </p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
