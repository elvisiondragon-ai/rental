import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon, Plane } from "lucide-react";
import { format } from "date-fns";
import { toast } from "sonner";
import BottomNav from "@/components/BottomNav";
import heroJetImage from "@/assets/hero-private-jet.jpg";

const PrivateJet = () => {
  const [departureDate, setDepartureDate] = useState<Date>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Charter request submitted! Our aviation team will contact you with a quote within 2 hours.");
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="relative h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero z-10" />
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroJetImage})` }}
        />
        <div className="relative z-20 h-full flex flex-col items-center justify-center px-4">
          <Plane className="w-16 h-16 mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 text-center">
            Private Jet Charter
          </h1>
          <p className="text-xl text-primary-foreground/90 text-center">
            Request a quote for your exclusive aviation experience
          </p>
        </div>
      </div>

      {/* RFQ Form */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="border-accent/20 shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl">Request For Quotation (RFQ)</CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and our aviation specialists will provide you with a competitive quote
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input id="company" placeholder="Company Name" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" type="tel" placeholder="+971 50 123 4567" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">Departure Airport</Label>
                    <Input id="from" placeholder="Dubai (DXB)" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Arrival Airport</Label>
                    <Input id="to" placeholder="London (LHR)" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Departure Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal">
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {departureDate ? format(departureDate, "PPP") : "Select date"}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar mode="single" selected={departureDate} onSelect={setDepartureDate} />
                      </PopoverContent>
                    </Popover>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Departure Time</Label>
                    <Input id="time" type="time" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Number of Passengers</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select passengers" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-4">1-4 Passengers</SelectItem>
                        <SelectItem value="5-8">5-8 Passengers</SelectItem>
                        <SelectItem value="9-12">9-12 Passengers</SelectItem>
                        <SelectItem value="13+">13+ Passengers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="trip-type">Trip Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select trip type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="one-way">One Way</SelectItem>
                        <SelectItem value="round-trip">Round Trip</SelectItem>
                        <SelectItem value="multi-leg">Multi-Leg</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="aircraft">Preferred Aircraft Type (Optional)</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select aircraft type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light Jet (4-7 pax)</SelectItem>
                      <SelectItem value="midsize">Midsize Jet (7-9 pax)</SelectItem>
                      <SelectItem value="super-midsize">Super Midsize (8-10 pax)</SelectItem>
                      <SelectItem value="heavy">Heavy Jet (10-16 pax)</SelectItem>
                      <SelectItem value="ultra-long">Ultra Long Range (12-18 pax)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Special Requirements or Notes</Label>
                  <Textarea 
                    id="requirements" 
                    placeholder="Any special requests, catering preferences, ground transportation needs, etc."
                    className="min-h-24"
                  />
                </div>

                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">What happens next?</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Our team will review your request within 2 hours</li>
                    <li>• You'll receive a detailed quote with aircraft options</li>
                    <li>• We'll coordinate all flight details and arrangements</li>
                    <li>• Enjoy your premium aviation experience</li>
                  </ul>
                </div>

                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg shadow-luxury">
                  Submit Charter Request
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

export default PrivateJet;
