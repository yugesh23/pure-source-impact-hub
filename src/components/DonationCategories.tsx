
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Utensils, GraduationCap, Home } from "lucide-react";

export const DonationCategories = () => {
  const categories = [
    {
      icon: Utensils,
      title: "Food & Nutrition",
      description: "Help provide nutritious meals and food security to families in need.",
      color: "from-orange-400 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      stats: "10,000+ meals provided"
    },
    {
      icon: GraduationCap,
      title: "Education Resources",
      description: "Support learning with books, supplies, and educational materials.",
      color: "from-blue-400 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      stats: "5,000+ students supported"
    },
    {
      icon: Home,
      title: "Essential Amenities",
      description: "Provide basic necessities like clothing, hygiene products, and shelter.",
      color: "from-emerald-400 to-teal-500",
      bgColor: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      stats: "3,000+ families helped"
    }
  ];

  return (
    <section id="donate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-emerald-100 text-emerald-800 hover:bg-emerald-200">Make a Difference</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Donation Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose how you'd like to make an impact. Every contribution, no matter the size, 
            creates meaningful change in someone's life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card key={index} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${category.bgColor}`}>
              <CardContent className="p-8">
                <div className={`w-16 h-16 ${category.iconBg} rounded-full flex items-center justify-center mb-6`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{category.title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">{category.description}</p>
                
                <Badge variant="secondary" className="mb-6 text-sm">
                  {category.stats}
                </Badge>
                
                <div className="space-y-3">
                  <Button 
                    className={`w-full bg-gradient-to-r ${category.color} text-white font-semibold py-3 hover:shadow-lg transition-all duration-200`}
                  >
                    Donate Now
                  </Button>
                  <Button 
                    variant="outline" 
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
                  >
                    Learn More
                  </Button>
                </div>
              </CardContent>
              
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full -translate-y-16 translate-x-16`}></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Why Your Donation Matters
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-emerald-600">100%</div>
                <p className="text-gray-600">Transparent allocation</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <p className="text-gray-600">Platform availability</p>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-orange-600">Direct</div>
                <p className="text-gray-600">Community impact</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
