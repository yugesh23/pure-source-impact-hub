
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Eye, Sprout } from "lucide-react";

export const MissionVision = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Mission & Vision
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Driven by compassion and powered by innovation, we're building a world 
            where no one goes without basic necessities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To create an accessible, transparent, and efficient platform that connects 
                generous hearts with communities in need, ensuring essential resources reach 
                those who need them most while fostering dignity and empowerment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-10 h-10 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where technology bridges social gaps, where every individual has 
                access to food, education, and basic amenities, and where communities 
                thrive through collective support and sustainable resource sharing.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sprout className="w-10 h-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Sustainability</h3>
              <p className="text-gray-700 leading-relaxed">
                We believe in long-term solutions that empower communities to become 
                self-sufficient while maintaining a network of support that adapts to 
                changing needs and creates lasting positive impact for future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Community Empowerment at the Core
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Pure Source isn't just about donations—it's about building bridges of understanding, 
              creating networks of support, and fostering a culture where giving and receiving 
              happen with mutual respect and dignity. Every interaction on our platform is 
              designed to strengthen communities and create lasting positive change.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
