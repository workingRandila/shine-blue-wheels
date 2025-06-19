
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Car, Droplets, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Deluxe Exterior Detail",
    description: "Complete exterior transformation with premium care and protection.",
    inclusions: [
      "Wash & Rinse",
      "Clay Bar Treatment", 
      "Polish",
      "Wax",
      "Tire Shine",
      "Window Cleaning"
    ],
    pricing: {
      sedan: "$80",
      suv: "$90", 
      largeSuv: "$100"
    }
  },
  {
    icon: Sparkles,
    title: "Deluxe Interior Detail",
    description: "Deep interior cleaning and conditioning for a fresh, pristine cabin.",
    inclusions: [
      "Vacuum Seats & Carpets",
      "Shampoo Seats",
      "Shampoo Carpets",
      "Wipe Down Dashboard",
      "Clean Door Panels",
      "Window Cleaning"
    ],
    pricing: {
      sedan: "$80",
      suv: "$90",
      largeSuv: "$100"
    }
  },
  {
    icon: Droplets,
    title: "Full Deluxe Package",
    description: "Complete interior and exterior detailing for the ultimate vehicle transformation.",
    inclusions: [
      "All Exterior Services",
      "All Interior Services",
      "Complete Vehicle Protection"
    ],
    pricing: {
      sedan: "$150",
      suv: "$170",
      largeSuv: "$190"
    }
  },
  {
    icon: Shield,
    title: "Add-On Services",
    description: "Enhanced protection and specialized treatments available upon request.",
    inclusions: [
      "Paint Protection Film",
      "Ceramic Coating",
      "Headlight Restoration",
      "Engine Bay Cleaning"
    ],
    pricing: {
      sedan: "Quote",
      suv: "Quote",
      largeSuv: "Quote"
    }
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Deluxe Detail Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional detailing packages with transparent pricing based on your vehicle size
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-slate-200 bg-white animate-fade-scale"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <service.icon className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-slate-600 text-center text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-800 text-sm">Includes:</h4>
                  <ul className="space-y-1">
                    {service.inclusions.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-xs text-slate-600">
                        <CheckCircle className="h-3 w-3 text-green-500 mr-2 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">Pricing:</h4>
                  <div className="space-y-1 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-600">Sedan:</span>
                      <span className="font-semibold text-blue-600">{service.pricing.sedan}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">SUV:</span>
                      <span className="font-semibold text-blue-600">{service.pricing.suv}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-600">Large SUV/4x4:</span>
                      <span className="font-semibold text-blue-600">{service.pricing.largeSuv}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 text-sm">
            All services include premium products and professional application. Contact us for custom packages and quotes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
