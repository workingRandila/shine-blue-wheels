
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useState } from "react";

const galleryImages = [
  {
    before: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&h=400&fit=crop",
    title: "Luxury Sedan Detail"
  },
  {
    before: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=400&fit=crop",
    title: "Sports Car Restoration"  
  },
  {
    before: "https://images.unsplash.com/photo-1486496572940-2bb2341fdbdf?w=800&h=400&fit=crop",
    after: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&h=400&fit=crop",
    title: "SUV Complete Detail"
  },
  {
    before: "https://images.unsplash.com/photo-1556800872-948331bbaa6a?w=800&h=400&fit=crop",  
    after: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&h=400&fit=crop",
    title: "Classic Car Polish"
  }
];

const BeforeAfterSlider = ({ before, after, title }: { before: string; after: string; title: string }) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg cursor-col-resize" onMouseMove={handleSliderMove}>
      {/* Before Image */}
      <img 
        src={before} 
        alt={`${title} - Before`}
        className="absolute inset-0 w-full h-full object-cover"
      />
      
      {/* After Image with clip */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img 
          src={after} 
          alt={`${title} - After`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-4 h-4 border-l-2 border-r-2 border-gray-400"></div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        BEFORE
      </div>
      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
        AFTER
      </div>
    </div>
  );
};

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

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {galleryImages.map((image, index) => (
                <CarouselItem key={image.title}>
                  <Card className="overflow-hidden border-slate-200 bg-white">
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-center mb-6 text-slate-900">
                        {image.title}
                      </h3>
                      <BeforeAfterSlider 
                        before={image.before}
                        after={image.after}
                        title={image.title}
                      />
                      <p className="text-center text-slate-600 mt-4 text-sm">
                        Drag the slider to see the transformation
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
