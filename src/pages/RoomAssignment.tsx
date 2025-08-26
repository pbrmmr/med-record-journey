import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, ArrowRight, Bed, Users } from "lucide-react";

const availableRooms = [
  { number: "101", department: "Emergency Department" },
  { number: "205", department: "General Ward" },
  { number: "301", department: "ICU" },
];

const occupiedRooms = [
  {
    room: "102",
    patient: "John Smith",
    department: "Emergency Department",
    admitted: "Jan 15, 2025",
  },
  {
    room: "206",
    patient: "Maria Garcia", 
    department: "General Ward",
    admitted: "Jan 14, 2025",
  },
  {
    room: "302",
    patient: "Robert Johnson",
    department: "ICU",
    admitted: "Jan 13, 2025",
  },
];

const recentAssignments = [
  {
    patient: "Sarah Wilson",
    room: "103",
    department: "Emergency Department",
    time: "2 hours ago",
  },
  {
    patient: "Michael Brown",
    room: "301", 
    department: "ICU",
    time: "4 hours ago",
  },
];

const RoomAssignment = () => {
  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-foreground">Room Assignment</h1>
          <p className="text-muted-foreground">Assign patients to available rooms and manage room occupancy</p>
        </div>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          New Assignment
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search by patient name or ID..." 
            className="pl-10"
          />
        </div>
        <select className="px-3 py-2 border border-input rounded-md bg-background text-foreground">
          <option>All Departments</option>
          <option>Emergency Department</option>
          <option>General Ward</option>
          <option>ICU</option>
          <option>Cardiology</option>
        </select>
        <select className="px-3 py-2 border border-input rounded-md bg-background text-foreground">
          <option>All Rooms</option>
          <option>Available Only</option>
          <option>Occupied Only</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Bed className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">Available Rooms (12)</h3>
          </div>
          <div className="space-y-3">
            {availableRooms.map((room, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <p className="font-medium text-foreground">Room {room.number}</p>
                  <p className="text-sm text-muted-foreground">{room.department}</p>
                </div>
                <Button size="sm" variant="default">
                  Assign
                </Button>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-2 mb-4">
            <Users className="h-5 w-5 text-muted-foreground" />
            <h3 className="text-lg font-semibold text-foreground">Occupied Rooms (8)</h3>
          </div>
          <div className="space-y-3">
            {occupiedRooms.map((room, index) => (
              <div key={index} className="p-3 bg-muted rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
                      <span className="text-xs font-medium text-sidebar-accent-foreground">
                        {room.patient.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{room.patient} - Room {room.room}</p>
                      <p className="text-sm text-muted-foreground">{room.department} • Admitted: {room.admitted}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    Transfer
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <Card className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <ArrowRight className="h-5 w-5 text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">Recent Room Assignments</h3>
        </div>
        <div className="space-y-3">
          {recentAssignments.map((assignment, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-sidebar-accent rounded-full flex items-center justify-center">
                  <span className="text-xs font-medium text-sidebar-accent-foreground">
                    {assignment.patient.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{assignment.patient} assigned to Room {assignment.room}</p>
                  <p className="text-sm text-muted-foreground">{assignment.department} • {assignment.time}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground">{assignment.time}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default RoomAssignment;