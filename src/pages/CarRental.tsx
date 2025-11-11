import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Car } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";
import fleetBentley from "@/assets/fleet-bentley.jpg";
import fleetMercedes from "@/assets/fleet-mercedes.jpg";
import heroCarImage from "@/assets/hero-luxury-car.jpg";

const CarRental = () => {
  const [pickupDate, setPickupDate] = useState<Date>();
  const [returnDate, setReturnDate] = useState<Date>();
  const [selectedVehicle, setSelectedVehicle] = useState("");

  const vehicles = [
    { id: "rolls-royce", name: "Rolls-Royce Phantom", price: "AED 5,000/day", image: heroCarImage },
    { id: "bentley", name: "Bentley Continental GT", price: "AED 3,500/day", image: fleetBentley },
    { id: "mercedes", name: "Mercedes-Benz S-Class", price: "AED 2,000/day", image: fleetMercedes },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Booking request submitted successfully! Our team will contact you shortly.");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-luxury py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Car className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Luxury Car Rental
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Choose from our premium fleet of executive vehicles
          </p>
        </div>
      </div>

      {/* Vehicle Selection */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Select Your Vehicle</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {vehicles.map((vehicle) => (
              <Card 
                key={vehicle.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-luxury ${
                  selectedVehicle === vehicle.id ? 'ring-2 ring-accent shadow-luxury' : 'border-accent/20'
                }`}
                onClick={() => setSelectedVehicle(vehicle.id)}
              >
                <div 
                  className="h-48 bg-cover bg-center rounded-t-lg"
                  style={{ backgroundImage: `url(${vehicle.image})` }}
                />
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{vehicle.name}</h3>
                  <p className="text-accent font-semibold">{vehicle.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="max-w-2xl mx-auto border-accent/20 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Complete Your Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 123 4567" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="pickup">Pickup Location</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select pickup location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dubai-airport">Dubai International Airport</SelectItem>
                      <SelectItem value="burj-khalifa">Burj Khalifa</SelectItem>
                      <SelectItem value="palm-jumeirah">Palm Jumeirah</SelectItem>
                      <SelectItem value="dubai-marina">Dubai Marina</SelectItem>
                      <SelectItem value="custom">Custom Location</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Pickup Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {pickupDate ? format(pickupDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={pickupDate} onSelect={setPickupDate} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label>Return Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {returnDate ? format(returnDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={returnDate} onSelect={setReturnDate} />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="driver">Driver Service</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select driver option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="with-driver">With Professional Driver</SelectItem>
                      <SelectItem value="self-drive">Self Drive</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-luxury">
                  Confirm Booking
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default CarRental;
