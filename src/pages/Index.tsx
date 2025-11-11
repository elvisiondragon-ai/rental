import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Car, Plane, Star, Clock, Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import heroCarImage from "@/assets/hero-luxury-car.jpg";
import heroJetImage from "@/assets/hero-private-jet.jpg";

const Index = () => {
  const testimonials = [
    {
      name: "Ahmed Al Maktoum",
      role: "CEO, Tech Corp",
      content: "Exceptional service! The Rolls-Royce was pristine and the driver was incredibly professional.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "Business Executive",
      content: "Private jet charter made our business trip seamless. Will definitely use again.",
      rating: 5,
    },
    {
      name: "Mohammed Hassan",
      role: "Entrepreneur",
      content: "24/7 reliability and luxury combined. UAE Dream Logistic sets the standard.",
      rating: 5,
    },
  ];

  const features = [
    { icon: Clock, title: "24/7 Service", description: "Available anytime, anywhere" },
    { icon: Shield, title: "Fully Insured", description: "Complete protection & safety" },
    { icon: Award, title: "Premium Fleet", description: "Latest luxury vehicles & jets" },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroCarImage})` }}
        />
        
        <div className="relative z-20 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-4 tracking-tight">
            UAE DREAM LOGISTIC
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2">
            Executive Transportation Excellence
          </p>
          <p className="text-lg text-accent font-semibold mb-8">
            Dubai, United Arab Emirates
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/car-rental">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg shadow-luxury">
                <Car className="mr-2 h-5 w-5" />
                Book Luxury Car
              </Button>
            </Link>
            <Link to="/private-jet">
              <Button size="lg" variant="secondary" className="font-semibold px-8 py-6 text-lg">
                <Plane className="mr-2 h-5 w-5" />
                Charter Private Jet
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-accent/20 shadow-card hover:shadow-luxury transition-all duration-300">
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-luxury mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Hot Fleet Highlights */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Fleet</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-accent/20 shadow-card hover:shadow-luxury transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroCarImage})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Rolls-Royce Phantom</h3>
                <p className="text-muted-foreground mb-4">
                  The pinnacle of luxury automotive engineering. Perfect for executive transportation.
                </p>
                <Link to="/car-rental">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-accent/20 shadow-card hover:shadow-luxury transition-all duration-300">
              <div 
                className="h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroJetImage})` }}
              />
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">Gulfstream G650</h3>
                <p className="text-muted-foreground mb-4">
                  Ultra-long-range business jet. Travel in unmatched comfort and speed.
                </p>
                <Link to="/private-jet">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                    Request Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Client Testimonials</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-accent/20 shadow-card">
                <CardContent className="pt-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-4 italic">"{testimonial.content}"</p>
                  <div className="border-t border-accent/20 pt-4">
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Index;
