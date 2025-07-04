
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Target } from "lucide-react";

export const AboutResearch = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">Published Research</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Our Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our groundbreaking research, published in Taylor & Francis, explores innovative 
            approaches to community resource distribution and social impact.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Research Objectives</h3>
              <p className="text-gray-600">
                To develop a sustainable, technology-driven platform that efficiently connects 
                donors with underprivileged communities in need of essential resources.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Methodology</h3>
              <p className="text-gray-600">
                Mixed-methods research combining quantitative analysis of donation patterns 
                with qualitative community impact assessments and user experience studies.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Real-World Impact</h3>
              <p className="text-gray-600">
                Our research demonstrates significant improvements in resource allocation 
                efficiency and community engagement through digital donation platforms.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Published in Taylor & Francis
            </h3>
            <p className="text-lg text-gray-700 mb-8">
              Our comprehensive study on digital donation platforms and community empowerment 
              has been peer-reviewed and published in a prestigious academic journal, 
              validating our approach to bridging social gaps through technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="secondary" className="text-sm">Peer-Reviewed</Badge>
              <Badge variant="secondary" className="text-sm">Social Innovation</Badge>
              <Badge variant="secondary" className="text-sm">Digital Platforms</Badge>
              <Badge variant="secondary" className="text-sm">Community Impact</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
