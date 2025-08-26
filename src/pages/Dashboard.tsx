import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, UserPlus, Clock } from "lucide-react";

const statsData = [
  { label: "Total Patients", value: "1,247", icon: Users },
  { label: "New Today", value: "23", icon: UserPlus },
  { label: "Pending Assignment", value: "8", icon: Clock },
];

const recentRegistrations = [
  {
    name: "John Smith",
    id: "PT-2025-001",
    department: "Emergency",
    time: "2 mins ago",
  },
  {
    name: "Maria Garcia",
    id: "PT-2025-002", 
    department: "Cardiology",
    time: "15 mins ago",
  },
  {
    name: "David Wilson",
    id: "PT-2025-003",
    department: "Orthopedics", 
    time: "32 mins ago",
  },
];

const Dashboard = () => {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold text-foreground mb-2">Patient Registration</h1>
        <p className="text-muted-foreground">Register new patients and manage their information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statsData.map((stat) => (
          <Card key={stat.label} className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground mt-1">{stat.value}</p>
              </div>
              <div className="p-3 bg-muted rounded-lg">
                <stat.icon className="h-5 w-5 text-muted-foreground" />
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-6">New Patient Registration</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">First Name</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  placeholder="Enter first name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Last Name</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                  placeholder="Enter last name"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Date of Birth</label>
                <input 
                  type="date" 
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Patient ID</label>
                <input 
                  type="text" 
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-muted-foreground"
                  placeholder="Auto-generated"
                  disabled
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Contact Number</label>
              <input 
                type="tel" 
                className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Enter contact number"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Emergency Contact</label>
              <input 
                type="tel" 
                className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground"
                placeholder="Enter emergency contact"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Department</label>
              <select className="w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-foreground">
                <option>Select Department</option>
                <option>Emergency</option>
                <option>Cardiology</option>
                <option>Orthopedics</option>
                <option>ICU</option>
                <option>General Ward</option>
              </select>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-foreground">Recent Registrations</h3>
          </div>
          <div className="space-y-4">
            {recentRegistrations.map((patient, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                <div className="w-10 h-10 bg-sidebar-accent rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-sidebar-accent-foreground">
                    {patient.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-foreground">{patient.name}</p>
                  <p className="text-sm text-muted-foreground">ID: {patient.id}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-foreground">{patient.department}</p>
                  <p className="text-xs text-muted-foreground">{patient.time}</p>
                </div>
              </div>
            ))}
            <Button variant="outline" className="w-full mt-4">
              View All Patients
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;