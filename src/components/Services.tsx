
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Car, Droplets, Shield } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Exterior Detailing",
    description: "Complete exterior wash, clay bar treatment, wax, and tire shine for a showroom finish.",
    price: "From $80"
  },
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces with premium products.",
    price: "From $70"
  },
  {
    icon: Shield,
    title: "Paint Protection",
    description: "Ceramic coating and paint protection film to keep your vehicle looking new for years.",
    price: "From $150"
  },
  {
    icon: Droplets,
    title: "Full Service",
    description: "Complete interior and exterior detailing package for the ultimate vehicle transformation.",
    price: "From $140"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Professional detailing services tailored to keep your vehicle in pristine condition
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
                <CardDescription className="text-blue-600 font-semibold text-lg">
                  {service.price}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
