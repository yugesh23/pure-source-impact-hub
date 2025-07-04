
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, Mail, Phone, MapPin, Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    research: [
      { name: "About Our Research", href: "#about" },
      { name: "Download Paper", href: "#research" },
      { name: "Methodology", href: "#about" },
      { name: "Citations", href: "#research" }
    ],
    platform: [
      { name: "Food Donations", href: "#donate" },
      { name: "Education Resources", href: "#donate" },
      { name: "Essential Amenities", href: "#donate" },
      { name: "Impact Stories", href: "#impact" }
    ],
    community: [
      { name: "Volunteer", href: "#" },
      { name: "Partner with Us", href: "#" },
      { name: "Community Guidelines", href: "#" },
      { name: "Success Stories", href: "#impact" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <h3 className="text-2xl font-bold text-emerald-400">Pure Source</h3>
              <Badge variant="secondary" className="bg-emerald-100 text-emerald-800">
                Research Project
              </Badge>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              An innovative online platform facilitating donations of food, educational resources, 
              and essential amenities to underprivileged communities. Published research by Taylor & Francis.
            </p>
            
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail className="w-4 h-4 text-emerald-400" />
                <span>contact@puresource.org</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-4 h-4 text-emerald-400" />
                <span>123 Innovation Drive, Tech City, TC 12345</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Research</h4>
            <ul className="space-y-3">
              {footerLinks.research.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Platform</h4>
            <ul className="space-y-3">
              {footerLinks.platform.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4 text-emerald-400">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="bg-gray-700 mb-8" />

        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-3 text-emerald-400 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              Research Citation
            </h4>
            <div className="bg-gray-700 p-4 rounded border-l-4 border-emerald-400">
              <p className="text-sm font-mono text-gray-200 leading-relaxed">
                Mitchell, S., Chen, M., Rodriguez, E., Park, D., Thompson, L., & Johnson, A. (2024). 
                Pure Source: A Digital Platform for Community Resource Distribution. 
                <em className="text-emerald-300">Journal of Social Innovation</em>, Taylor & Francis. 
                <a 
                  href="#" 
                  className="text-emerald-400 hover:text-emerald-300 underline ml-1"
                >
                  https://doi.org/10.1080/example.2024.123456
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Pure Source Research Project. Made with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current" />
              <span>for community empowerment.</span>
            </div>
            
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors duration-200">
                Academic Use
              </a>
            </div>
          </div>

          <div className="text-center">
            <Badge variant="outline" className="border-emerald-400 text-emerald-400">
              Published in Taylor & Francis • Peer-Reviewed Research • Social Innovation
            </Badge>
          </div>
        </div>
      </div>
    </footer>
  );
};
