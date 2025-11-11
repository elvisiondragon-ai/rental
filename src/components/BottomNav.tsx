import { Home, Car, Plane, Database, MapPin } from "lucide-react";
import { NavLink } from "@/components/NavLink";

const BottomNav = () => {
  const navItems = [
    { icon: Home, label: "Home", path: "/" },
    { icon: Car, label: "Car Rental", path: "/car-rental" },
    { icon: Plane, label: "Private Jet", path: "/private-jet" },
    { icon: Database, label: "Our Fleet", path: "/fleet" },
    { icon: MapPin, label: "Orders", path: "/orders" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-primary border-t border-accent/20 z-50 shadow-luxury">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-lg transition-all duration-300 text-primary-foreground/70 hover:text-accent"
              activeClassName="text-accent bg-secondary/20"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
