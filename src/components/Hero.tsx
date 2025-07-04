
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-50 via-blue-50 to-teal-50">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Bridging Hope
            <span className="block text-emerald-600">with Resources</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Pure Source is an innovative online platform facilitating donations of food, 
            educational resources, and essential amenities to underprivileged communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold transition-all duration-200 hover:scale-105"
            >
              Start Donating Today
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold transition-all duration-200"
            >
              Learn About Our Research
            </Button>
          </div>
          
          <div className="flex justify-center">
            <ArrowDown className="w-8 h-8 text-emerald-600 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
