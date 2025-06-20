
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/704b144f-cea5-421d-9702-5d046d56c98d.png')`
        }}
      ></div>
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-slate-800/80"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10 flex-1 flex flex-col items-center justify-center">
        <div className="text-center max-w-4xl mx-auto animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-blue-200 bg-clip-text text-transparent">
            Premium Auto Detailing
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-200 leading-relaxed">
            Transform your vehicle with our professional detailing services. 
            Expert care, stunning results, guaranteed satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-6 text-lg"
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-50 to-transparent"></div>
    </section>
  );
};

export default Hero;
