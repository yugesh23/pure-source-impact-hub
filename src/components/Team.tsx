
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Linkedin, Mail } from "lucide-react";

export const Team = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Lead Researcher & Project Director",
      bio: "Ph.D. in Social Innovation with 15 years of experience in community development and digital platforms.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b672?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Research Design", "Community Engagement", "Platform Strategy"]
    },
    {
      name: "Dr. Michael Chen",
      role: "Technology Research Lead",
      bio: "Computer Science Ph.D. specializing in user experience design and accessibility in social platforms.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["UX Research", "Platform Development", "Data Analytics"]
    },
    {
      name: "Prof. Emily Rodriguez",
      role: "Social Impact Researcher",
      bio: "Professor of Sociology with expertise in digital communities and resource distribution systems.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Social Research", "Impact Assessment", "Community Psychology"]
    },
    {
      name: "David Park",
      role: "Research Associate",
      bio: "Graduate researcher focusing on sustainable development and technology adoption in underserved communities.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Field Research", "Data Collection", "Community Outreach"]
    },
    {
      name: "Dr. Lisa Thompson",
      role: "Policy & Ethics Advisor",
      bio: "Expert in digital ethics and policy development for social innovation platforms.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Digital Ethics", "Policy Development", "Regulatory Compliance"]
    },
    {
      name: "Alex Johnson",
      role: "Community Liaison",
      bio: "Community organizer with 10 years of experience connecting donors with grassroots organizations.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      expertise: ["Community Building", "Stakeholder Relations", "Program Coordination"]
    }
  ];

  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Meet Our Team</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Research Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our interdisciplinary team of researchers, academics, and community advocates 
            is dedicated to creating meaningful social impact through innovative technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {member.bio}
                </p>
                
                <div className="space-y-3 mb-6">
                  <p className="text-sm font-medium text-gray-700">Expertise:</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-center gap-3">
                  <button className="p-2 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors">
                    <Linkedin className="w-4 h-4 text-blue-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                    <Mail className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-emerald-50 to-blue-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Academic Excellence
            </h3>
            <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
              Our team brings together diverse perspectives from leading universities and research institutions, 
              combining academic rigor with real-world experience to drive meaningful social change.
            </p>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-emerald-600">5</div>
                <p className="text-gray-600 text-sm">Ph.D. Researchers</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-blue-600">50+</div>
                <p className="text-gray-600 text-sm">Published Papers</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-purple-600">10</div>
                <p className="text-gray-600 text-sm">Years Experience</p>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-orange-600">3</div>
                <p className="text-gray-600 text-sm">Universities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
