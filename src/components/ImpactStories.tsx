
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export const ImpactStories = () => {
  const [currentStory, setCurrentStory] = useState(0);

  const stories = [
    {
      name: "Maria Rodriguez",
      location: "Phoenix, AZ",
      category: "Food Security",
      story: "Pure Source helped my family during the toughest time. When I lost my job, we didn't know where our next meal would come from. The platform connected us with local donors who provided fresh groceries for months until I got back on my feet.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b672?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "David Chen",
      location: "Austin, TX",
      category: "Education",
      story: "As a single father of three, buying school supplies was always a struggle. Through Pure Source, my children received backpacks, notebooks, and even a laptop. Now my oldest daughter is thriving in her computer science classes.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Sarah Johnson",
      location: "Denver, CO",
      category: "Essential Amenities",
      story: "After losing our home in a fire, Pure Source provided us with clothing, hygiene products, and basic household items. The kindness of strangers through this platform gave us hope when we had none.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "James Williams",
      location: "Seattle, WA",
      category: "Community Impact",
      story: "Pure Source didn't just help me—it transformed our entire neighborhood. The community garden project funded through the platform now feeds 20 families and brings us all together every weekend.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  return (
    <section id="impact" className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real people whose lives have been touched by the Pure Source community. 
            Every donation creates ripples of positive change.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm shadow-2xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img
                    src={stories[currentStory].image}
                    alt={stories[currentStory].name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    <Quote className="w-8 h-8 text-emerald-600" />
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                    "{stories[currentStory].story}"
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      {stories[currentStory].name}
                    </h4>
                    <p className="text-gray-600">{stories[currentStory].location}</p>
                    <div className="inline-block bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">
                      {stories[currentStory].category}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center items-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevStory}
              className="rounded-full border-emerald-200 hover:bg-emerald-50"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            
            <div className="flex gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentStory(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentStory 
                      ? 'bg-emerald-600 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextStory}
              className="rounded-full border-emerald-200 hover:bg-emerald-50"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">18,000+</div>
            <p className="text-gray-700">Lives Impacted</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-emerald-600 mb-2">500+</div>
            <p className="text-gray-700">Active Donors</p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
            <p className="text-gray-700">Satisfaction Rate</p>
          </div>
        </div>
      </div>
    </section>
  );
};
