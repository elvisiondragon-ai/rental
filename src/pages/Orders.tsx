import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, MapPin, Clock, Car, Plane, CheckCircle, AlertCircle } from "lucide-react";
import BottomNav from "@/components/BottomNav";

const Orders = () => {
  const activeOrders = [
    {
      id: "CAR-2024-001",
      type: "car",
      vehicle: "Rolls-Royce Phantom",
      status: "Driver En Route",
      statusType: "active",
      pickup: "Dubai Marina",
      date: "Today, 3:00 PM",
      driver: "Mohammed Ali",
      driverPhone: "+971 50 123 4567",
      eta: "15 minutes"
    },
    {
      id: "JET-2024-003",
      type: "jet",
      vehicle: "Gulfstream G650",
      status: "Confirmed",
      statusType: "confirmed",
      route: "Dubai (DXB) → London (LHR)",
      date: "Tomorrow, 10:00 AM",
      passengers: "8",
      flightTime: "7h 30m"
    }
  ];

  const completedOrders = [
    {
      id: "CAR-2024-000",
      type: "car",
      vehicle: "Bentley Continental GT",
      status: "Completed",
      statusType: "completed",
      date: "Dec 15, 2024",
      amount: "AED 3,500"
    },
    {
      id: "JET-2024-002",
      type: "jet",
      vehicle: "Bombardier Global 7500",
      status: "Completed",
      statusType: "completed",
      date: "Dec 10, 2024",
      route: "Dubai → Paris",
      amount: "Contact for Quote"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-accent text-accent-foreground";
      case "confirmed": return "bg-secondary text-secondary-foreground";
      case "completed": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <div className="bg-gradient-luxury py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-accent" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            My Orders
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Track your bookings and view trip history
          </p>
        </div>
      </div>

      {/* Orders Dashboard */}
      <section className="py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="active" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="active">Active Bookings</TabsTrigger>
              <TabsTrigger value="history">Trip History</TabsTrigger>
            </TabsList>

            <TabsContent value="active">
              {activeOrders.length === 0 ? (
                <Card className="border-accent/20">
                  <CardContent className="py-12 text-center">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No active bookings</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-6">
                  {activeOrders.map((order) => (
                    <Card key={order.id} className="border-accent/20 shadow-card">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="flex items-center gap-2 mb-2">
                              {order.type === "car" ? (
                                <Car className="w-5 h-5 text-accent" />
                              ) : (
                                <Plane className="w-5 h-5 text-accent" />
                              )}
                              {order.vehicle}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">Order ID: {order.id}</p>
                          </div>
                          <Badge className={getStatusColor(order.statusType)}>
                            {order.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {order.type === "car" ? (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 mt-1 text-accent" />
                                  <div>
                                    <p className="text-sm font-semibold">Pickup Location</p>
                                    <p className="text-sm text-muted-foreground">{order.pickup}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Clock className="w-4 h-4 mt-1 text-accent" />
                                  <div>
                                    <p className="text-sm font-semibold">Schedule</p>
                                    <p className="text-sm text-muted-foreground">{order.date}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div>
                                  <p className="text-sm font-semibold">Driver</p>
                                  <p className="text-sm text-muted-foreground">{order.driver}</p>
                                  <p className="text-sm text-accent">{order.driverPhone}</p>
                                </div>
                                {order.eta && (
                                  <div className="bg-accent/10 p-3 rounded-lg">
                                    <p className="text-sm font-semibold text-accent">ETA: {order.eta}</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        ) : (
                          <>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                  <MapPin className="w-4 h-4 mt-1 text-accent" />
                                  <div>
                                    <p className="text-sm font-semibold">Route</p>
                                    <p className="text-sm text-muted-foreground">{order.route}</p>
                                  </div>
                                </div>
                                <div className="flex items-start gap-2">
                                  <Clock className="w-4 h-4 mt-1 text-accent" />
                                  <div>
                                    <p className="text-sm font-semibold">Departure</p>
                                    <p className="text-sm text-muted-foreground">{order.date}</p>
                                  </div>
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div>
                                  <p className="text-sm font-semibold">Passengers</p>
                                  <p className="text-sm text-muted-foreground">{order.passengers} passengers</p>
                                </div>
                                <div>
                                  <p className="text-sm font-semibold">Flight Duration</p>
                                  <p className="text-sm text-muted-foreground">{order.flightTime}</p>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                        <div className="flex gap-3 pt-4">
                          <Button variant="outline" className="flex-1">
                            Contact Support
                          </Button>
                          <Button variant="outline" className="flex-1">
                            View Details
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>

            <TabsContent value="history">
              {completedOrders.length === 0 ? (
                <Card className="border-accent/20">
                  <CardContent className="py-12 text-center">
                    <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-muted-foreground">No completed trips yet</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {completedOrders.map((order) => (
                    <Card key={order.id} className="border-accent/20 shadow-card">
                      <CardContent className="py-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-4">
                            {order.type === "car" ? (
                              <Car className="w-8 h-8 text-accent" />
                            ) : (
                              <Plane className="w-8 h-8 text-accent" />
                            )}
                            <div>
                              <p className="font-semibold">{order.vehicle}</p>
                              <p className="text-sm text-muted-foreground">
                                {order.route || order.date}
                              </p>
                              <Badge variant="outline" className="mt-1">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                {order.status}
                              </Badge>
                            </div>
                          </div>
                          <div className="text-right space-y-2">
                            <p className="font-semibold text-accent">{order.amount}</p>
                            <Button variant="outline" size="sm">
                              <Download className="w-4 h-4 mr-2" />
                              Invoice
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <BottomNav />
    </div>
  );
};

export default Orders;
