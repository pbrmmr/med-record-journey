import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  UserPlus, 
  Bed, 
  MapPin, 
  Settings,
  Building2
} from "lucide-react";

const sidebarItems = [
  { path: "/", icon: Home, label: "Home" },
  { path: "/patient-registration", icon: UserPlus, label: "Patient Registration" },
  { path: "/room-assignment", icon: Bed, label: "Room Assignment" },
  { path: "/location-overview", icon: MapPin, label: "Location Overview" },
  { path: "/settings", icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-sidebar-primary rounded-lg">
            <Building2 className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="font-semibold text-sidebar-foreground">Patient Location Tracker</h1>
          </div>
        </div>
      </div>

      <nav className="px-3 space-y-1">
        {sidebarItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="absolute bottom-0 left-0 right-0 w-64 p-6 border-t border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
            <span className="text-xs font-medium text-sidebar-accent-foreground">DJ</span>
          </div>
          <div>
            <p className="text-sm font-medium text-sidebar-foreground">Dr. Sarah Johnson</p>
            <p className="text-xs text-sidebar-foreground/70">Administrator</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;