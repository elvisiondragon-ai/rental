import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Car, Plane, Users, Gauge, Fuel } from "lucide-react";
import { Link } from "react-router-dom";
import BottomNav from "@/components/BottomNav";
import heroCarImage from "@/assets/hero-luxury-car.jpg";
import fleetBentley from "@/assets/fleet-bentley.jpg";
import fleetMercedes from "@/assets/fleet-mercedes.jpg";
import heroJetImage from "@/assets/hero-private-jet.jpg";

const Fleet = () => {
  const luxuryCars = [
    {
      name: "Rolls-Royce Phantom",
      category: "Ultra Luxury Sedan",
      image: heroCarImage,
      specs: { passengers: "4+1", power: "563 HP", fuel: "Premium" },
      features: ["Starlight Headliner", "Champagne Cooler", "Rear Entertainment", "Massage Seats"],
      price: "AED 5,000/day"
    },
    {
      name: "Bentley Continental GT",
      category: "Luxury Grand Tourer",
      image: fleetBentley,
      specs: { passengers: "4", power: "626 HP", fuel: "Premium" },
      features: ["Twin-Turbo W12", "Diamond Quilted Leather", "Rotating Display", "Adaptive Cruise"],
      price: "AED 3,500/day"
    },
    {
      name: "Mercedes-Benz S-Class",
      category: "Executive Sedan",
      image: fleetMercedes,
      specs: { passengers: "5", power: "496 HP", fuel: "Premium" },
      features: ["MBUX System", "Air Suspension", "Burmester Audio", "Executive Rear Seats"],
      price: "AED 2,000/day"
    },
  ];

  const privateJets = [
    {
      name: "Gulfstream G650",
      category: "Ultra Long Range",
      image: heroJetImage,
      specs: { passengers: "18", range: "7,000 nm", speed: "Mach 0.925" },
      features: ["Full Galley", "Bedroom Suite", "Stand-up Cabin", "Ka-band WiFi"],
      price: "Quote on Request"
    },
    {
      name: "Bombardier Global 7500",
      category: "Ultra Long Range",
      image: heroJetImage,
      specs: { passengers: "19", range: "7,700 nm", speed: "Mach 0.925" },
      features: ["Four Living Spaces", "Master Suite", "Full Kitchen", "4K Entertainment"],
      price: "Quote on Request"
    },
  ];

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-luxury py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Our Premium Fleet
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Explore our curated collection of luxury vehicles and private jets
          </p>
        </div>
      </div>

      {/* Fleet Catalog */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="cars" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="cars" className="flex items-center gap-2">
                <Car className="w-4 h-4" />
                Luxury Cars
              </TabsTrigger>
              <TabsTrigger value="jets" className="flex items-center gap-2">
                <Plane className="w-4 h-4" />
                Private Jets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cars">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {luxuryCars.map((car, index) => (
                  <Card key={index} className="overflow-hidden border-accent/20 shadow-card hover:shadow-luxury transition-all duration-300">
                    <div 
                      className="h-56 bg-cover bg-center"
                      style={{ backgroundImage: `url(${car.image})` }}
                    />
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="mb-2">{car.category}</Badge>
                        <h3 className="text-2xl font-bold">{car.name}</h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-accent/20">
                        <div className="text-center">
                          <Users className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Passengers</p>
                          <p className="text-sm font-semibold">{car.specs.passengers}</p>
                        </div>
                        <div className="text-center">
                          <Gauge className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Power</p>
                          <p className="text-sm font-semibold">{car.specs.power}</p>
                        </div>
                        <div className="text-center">
                          <Fuel className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Fuel</p>
                          <p className="text-sm font-semibold">{car.specs.fuel}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {car.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-accent">{car.price}</span>
                      </div>

                      <Link to="/car-rental">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          Book This Vehicle
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="jets">
              <div className="grid md:grid-cols-2 gap-6">
                {privateJets.map((jet, index) => (
                  <Card key={index} className="overflow-hidden border-accent/20 shadow-card hover:shadow-luxury transition-all duration-300">
                    <div 
                      className="h-64 bg-cover bg-center"
                      style={{ backgroundImage: `url(${jet.image})` }}
                    />
                    <CardContent className="p-6">
                      <div className="mb-3">
                        <Badge variant="secondary" className="mb-2">{jet.category}</Badge>
                        <h3 className="text-2xl font-bold">{jet.name}</h3>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-4 py-3 border-y border-accent/20">
                        <div className="text-center">
                          <Users className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Capacity</p>
                          <p className="text-sm font-semibold">{jet.specs.passengers}</p>
                        </div>
                        <div className="text-center">
                          <Gauge className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Range</p>
                          <p className="text-sm font-semibold">{jet.specs.range}</p>
                        </div>
                        <div className="text-center">
                          <Plane className="w-4 h-4 mx-auto mb-1 text-accent" />
                          <p className="text-xs text-muted-foreground">Speed</p>
                          <p className="text-sm font-semibold">{jet.specs.speed}</p>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Features:</p>
                        <div className="flex flex-wrap gap-1">
                          {jet.features.map((feature, i) => (
                            <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <span className="text-lg font-bold text-accent">{jet.price}</span>
                      </div>

                      <Link to="/private-jet">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                          Request Charter Quote
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Fleet;
