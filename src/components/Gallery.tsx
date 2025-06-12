
import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=500&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=500&h=300&fit=crop",
    title: "Luxury Sedan Detail"
  },
  {
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=500&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=300&fit=crop",
    title: "Sports Car Restoration"
  },
  {
    before: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=500&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=500&h=300&fit=crop",
    title: "SUV Complete Detail"
  },
  {
    before: "https://images.unsplash.com/photo-1556800872-948331bbaa6a?w=500&h=300&fit=crop",
    after: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=300&fit=crop",
    title: "Classic Car Polish"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See the incredible transformations we achieve with every vehicle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {galleryImages.map((image, index) => (
            <Card 
              key={image.title} 
              className="overflow-hidden hover:shadow-2xl transition-all duration-500 border-slate-200 animate-fade-scale"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative">
                <h3 className="text-xl font-semibold text-center py-4 bg-slate-900 text-white">
                  {image.title}
                </h3>
                <div className="grid grid-cols-2">
                  <div className="relative group">
                    <img 
                      src={image.before} 
                      alt="Before detailing" 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      BEFORE
                    </div>
                  </div>
                  <div className="relative group">
                    <img 
                      src={image.after} 
                      alt="After detailing" 
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      AFTER
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
