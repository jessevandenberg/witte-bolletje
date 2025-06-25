
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    bericht: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast.success('Uw bericht is verzonden!');
    setFormData({ naam: '', email: '', bericht: '' });
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Neem Contact Op
          </h1>
        </div>
        
        <div className="max-w-md mx-auto">
          <Card className="bg-white shadow-lg border border-gray-200">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="naam" className="text-gray-700 font-medium">
                    Naam
                  </Label>
                  <Input
                    id="naam"
                    name="naam"
                    type="text"
                    value={formData.naam}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    E-mailadres
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="bericht" className="text-gray-700 font-medium">
                    Bericht
                  </Label>
                  <Textarea
                    id="bericht"
                    name="bericht"
                    rows={5}
                    value={formData.bericht}
                    onChange={handleInputChange}
                    className="mt-1 border-gray-300 focus:border-orange-500 focus:ring-orange-500 resize-none"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-2"
                >
                  Verstuur Bericht
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Contact;
