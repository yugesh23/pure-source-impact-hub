
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, ExternalLink, Award } from "lucide-react";

export const DownloadResearch = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800 hover:bg-indigo-200">Academic Publication</Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Download Our Research
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Access our peer-reviewed research published in Taylor & Francis, 
            exploring innovative approaches to digital donation platforms and community empowerment.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-40 bg-white rounded-lg shadow-lg flex items-center justify-center border-2 border-indigo-100">
                    <FileText className="w-16 h-16 text-indigo-600" />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start items-center gap-2 mb-4">
                    <Award className="w-6 h-6 text-indigo-600" />
                    <Badge className="bg-indigo-100 text-indigo-800">Peer-Reviewed</Badge>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    "Pure Source: A Digital Platform for Community Resource Distribution"
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    <strong>Published in:</strong> Taylor & Francis Journal of Social Innovation<br />
                    <strong>Authors:</strong> Dr. Sarah Mitchell, Dr. Michael Chen, Prof. Emily Rodriguez, et al.<br />
                    <strong>Publication Date:</strong> 2024<br />
                    <strong>Pages:</strong> 24 pages
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    <h4 className="font-semibold text-gray-900">Research Highlights:</h4>
                    <ul className="text-gray-700 space-y-2 text-left">
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        Comprehensive analysis of digital donation platform effectiveness
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        Mixed-methods research with 1,000+ participants
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        Framework for sustainable community resource distribution
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 flex-shrink-0"></div>
                        Policy recommendations for digital social innovation
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button 
                      size="lg" 
                      className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg font-semibold flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Download PDF
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold flex items-center gap-2"
                    >
                      <ExternalLink className="w-5 h-5" />
                      View on Taylor & Francis
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-indigo-600 mb-2">500+</div>
                <p className="text-gray-600">Citations Expected</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-emerald-600 mb-2">1,000+</div>
                <p className="text-gray-600">Research Participants</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="text-2xl font-bold text-purple-600 mb-2">24</div>
                <p className="text-gray-600">Months of Research</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Citation Information
            </h3>
            <div className="bg-white p-6 rounded-lg border-l-4 border-indigo-600 text-left">
              <p className="text-sm font-mono text-gray-700">
                Mitchell, S., Chen, M., Rodriguez, E., Park, D., Thompson, L., & Johnson, A. (2024). 
                Pure Source: A Digital Platform for Community Resource Distribution. 
                <em>Journal of Social Innovation</em>, Taylor & Francis. 
                https://doi.org/10.1080/example.2024.123456
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
