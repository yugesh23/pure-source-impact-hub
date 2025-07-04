
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, HandHeart, Building, Megaphone } from "lucide-react";

export const GetInvolved = () => {
  const opportunities = [
    {
      icon: HandHeart,
      title: "Individual Volunteer",
      description: "Join our community of volunteers helping with platform moderation, community outreach, and donor relations.",
      commitment: "2-5 hours/week",
      color: "from-pink-400 to-red-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Users,
      title: "Community Ambassador",
      description: "Represent Pure Source in your local community, organize events, and help identify families in need.",
      commitment: "5-10 hours/week",
      color: "from-blue-400 to-indigo-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: Building,
      title: "Corporate Partnership",
      description: "Partner with us as an organization to sponsor donation drives, provide resources, or offer employee volunteer programs.",
      commitment: "Custom arrangements",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Megaphone,
      title: "Advocate & Spread Awareness",
      description: "Help us reach more people by sharing our mission on social media, writing blogs, or speaking at community events.",
      commitment: "Flexible",
      color: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-yellow-100 text-yellow-800 hover:bg-yellow-200">Join Our Mission</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            There are many ways to contribute beyond donations. Join our growing community 
            of volunteers, partners, and advocates making a difference every day.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className={`${opportunity.bgColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-2`}>
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${opportunity.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <opportunity.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{opportunity.title}</h3>
                    <Badge variant="secondary" className="text-xs mb-3">
                      {opportunity.commitment}
                    </Badge>
                  </div>
                </div>
                
                <p className="text-gray-700 leading-relaxed mb-6">
                  {opportunity.description}
                </p>
                
                <Button 
                  className={`w-full bg-gradient-to-r ${opportunity.color} text-white font-semibold hover:shadow-lg transition-all duration-200`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Whether you have 30 minutes or 30 hours to spare, there's a place for you 
              in the Pure Source community. Together, we can create lasting change.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-semibold"
              >
                Apply to Volunteer
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
              >
                Schedule a Call
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">200+</div>
                <p className="text-gray-600">Active Volunteers</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <p className="text-gray-600">Partner Organizations</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">25</div>
                <p className="text-gray-600">Cities Reached</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
