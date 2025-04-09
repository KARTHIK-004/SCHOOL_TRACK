import {
  Calendar,
  CheckCircle,
  Clock,
  FileText,
  MoreHorizontal,
  PenLine,
  User,
  Users,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";

export default function TeacherDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <WelcomeBanner />

        {/* Teacher Profile Summary */}
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  src="/placeholder.svg?height=56&width=56"
                  alt="Priya Sharma"
                />
                <AvatarFallback>PS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Priya Sharma</CardTitle>
                <CardDescription>
                  Mathematics Teacher | Class 10-A
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Employee ID:</span>
                  <span className="font-medium">EMP-2018-042</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Department:</span>
                  <span className="font-medium">Mathematics</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Classes:</span>
                  <span className="font-medium">10-A, 10-B, 9-A</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Today's Classes:
                  </span>
                  <span className="font-medium">5</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
              <Button size="sm">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-5">
            <CardHeader>
              <CardTitle>Today's Overview</CardTitle>
              <CardDescription>
                Your teaching schedule and tasks for today
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2 md:grid-cols-4">
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <Clock className="mb-2 h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Classes Today</p>
                        <p className="text-2xl font-bold">5</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Assignments</p>
                        <p className="text-2xl font-bold">3</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <Users className="mb-2 h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Students</p>
                        <p className="text-2xl font-bold">125</p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-muted/50">
                    <CardContent className="p-4">
                      <div className="flex flex-col items-center justify-center text-center">
                        <CheckCircle className="mb-2 h-8 w-8 text-muted-foreground" />
                        <p className="text-sm font-medium">Attendance</p>
                        <p className="text-2xl font-bold">96%</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Next Class</h3>
                  <Card className="border-primary/20">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-base font-semibold">
                            Mathematics - Class 10-A
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            10:30 AM - 11:30 AM | Room 101
                          </p>
                        </div>
                        <Badge>Starting in 15 minutes</Badge>
                      </div>
                      <div className="mt-4 flex items-center gap-4">
                        <Button variant="outline" size="sm">
                          <FileText className="mr-2 h-4 w-4" />
                          View Lesson Plan
                        </Button>
                        <Button size="sm">
                          <Users className="mr-2 h-4 w-4" />
                          Take Attendance
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="classes" className="space-y-4">
          <TabsList>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="classes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Monday, April 10, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacherSchedule.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-12 w-12 flex-col items-center justify-center rounded-md bg-muted">
                        <span className="text-sm font-medium">{item.time}</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-base font-medium">
                            {item.subject}
                          </p>
                          <Badge variant={item.current ? "default" : "outline"}>
                            {item.current ? "Current" : item.status}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <span>Class {item.class}</span>
                          <span className="mx-2">•</span>
                          <Clock className="mr-1 h-3 w-3" />
                          <span>
                            {item.startTime} - {item.endTime}
                          </span>
                          <span className="mx-2">•</span>
                          <span>Room {item.room}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <FileText className="mr-2 h-4 w-4" />
                        Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Full Timetable
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Class 10-A Students</CardTitle>
                  <CardDescription>Manage your class students</CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <PenLine className="mr-2 h-4 w-4" />
                    Take Attendance
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Roll No.</TableHead>
                      <TableHead>Attendance</TableHead>
                      <TableHead>Performance</TableHead>
                      <TableHead>Last Assignment</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={student.avatar}
                                alt={student.name}
                              />
                              <AvatarFallback>
                                {student.initials}
                              </AvatarFallback>
                            </Avatar>
                            {student.name}
                          </div>
                        </TableCell>
                        <TableCell>{student.rollNo}</TableCell>
                        <TableCell>{student.attendance}</TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Progress
                              value={student.performance}
                              className="h-2 w-16"
                            />
                            <span>{student.performance}%</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              student.lastAssignmentStatus === "Submitted"
                                ? "default"
                                : "destructive"
                            }
                          >
                            {student.lastAssignmentStatus}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <MoreHorizontal className="h-4 w-4" />
                                <span className="sr-only">Actions</span>
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Profile</DropdownMenuItem>
                              <DropdownMenuItem>
                                Contact Parents
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                View Performance
                              </DropdownMenuItem>
                              <DropdownMenuItem>Add Note</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Assignments</CardTitle>
                  <CardDescription>
                    Manage and grade student assignments
                  </CardDescription>
                </div>
                <Button size="sm">
                  <FileText className="mr-2 h-4 w-4" />
                  Create Assignment
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {teacherAssignments.map((assignment, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {assignment.title}
                          </CardTitle>
                          <Badge
                            variant={getAssignmentStatusBadge(
                              assignment.status
                            )}
                          >
                            {assignment.status}
                          </Badge>
                        </div>
                        <CardDescription>
                          Class {assignment.class} | Due: {assignment.dueDate}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {assignment.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-sm">
                              <span className="text-muted-foreground">
                                Assigned:{" "}
                              </span>
                              <span className="font-medium">
                                {assignment.assignedDate}
                              </span>
                            </div>
                            <div className="text-sm">
                              <span className="text-muted-foreground">
                                Submissions:{" "}
                              </span>
                              <span className="font-medium">
                                {assignment.submissions}/
                                {assignment.totalStudents}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                            <Button size="sm">Grade Submissions</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="resources" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Teaching Resources</CardTitle>
                <CardDescription>
                  Access your lesson plans and teaching materials
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {resources.map((resource, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 pb-2">
                        <CardTitle className="text-base">
                          {resource.title}
                        </CardTitle>
                        <CardDescription>{resource.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Subject:
                            </span>
                            <span className="font-medium">
                              {resource.subject}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Class:
                            </span>
                            <span className="font-medium">
                              {resource.class}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Last Updated:
                            </span>
                            <span className="font-medium">
                              {resource.lastUpdated}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/20 p-2">
                        <Button variant="outline" size="sm" className="w-full">
                          <FileText className="mr-2 h-4 w-4" />
                          View Resource
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Announcements */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Announcements</CardTitle>
            <CardDescription>
              Important updates from the school administration
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {teacherAnnouncements.map((announcement, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{announcement.title}</h3>
                    <Badge variant="outline">{announcement.date}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {announcement.content}
                  </p>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <span>Posted by: {announcement.postedBy}</span>
                    <span className="mx-2">•</span>
                    <span>For: {announcement.for}</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

// Helper functions
function getAssignmentStatusBadge(status) {
  switch (status) {
    case "Active":
      return "default";
    case "Pending":
      return "secondary";
    case "Grading":
      return "warning";
    case "Completed":
      return "outline";
    default:
      return "outline";
  }
}

// Sample data
const teacherSchedule = [
  {
    subject: "Mathematics",
    class: "9-A",
    startTime: "8:30 AM",
    endTime: "9:30 AM",
    time: "8:30",
    room: "101",
    status: "Completed",
    current: false,
  },
  {
    subject: "Mathematics",
    class: "10-B",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    time: "9:30",
    room: "102",
    status: "Current",
    current: true,
  },
  {
    subject: "Break",
    class: "-",
    startTime: "10:30 AM",
    endTime: "11:00 AM",
    time: "10:30",
    room: "-",
    status: "Upcoming",
    current: false,
  },
  {
    subject: "Mathematics",
    class: "10-A",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    time: "11:00",
    room: "101",
    status: "Upcoming",
    current: false,
  },
  {
    subject: "Mathematics",
    class: "9-B",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    time: "12:00",
    room: "103",
    status: "Upcoming",
    current: false,
  },
];

const students = [
  {
    id: 1,
    name: "Arjun Singh",
    rollNo: "1001",
    attendance: "95%",
    performance: 88,
    lastAssignmentStatus: "Submitted",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AS",
  },
  {
    id: 2,
    name: "Meera Patel",
    rollNo: "1002",
    attendance: "92%",
    performance: 92,
    lastAssignmentStatus: "Submitted",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "MP",
  },
  {
    id: 3,
    name: "Rahul Sharma",
    rollNo: "1003",
    attendance: "88%",
    performance: 75,
    lastAssignmentStatus: "Missing",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RS",
  },
  {
    id: 4,
    name: "Priya Gupta",
    rollNo: "1004",
    attendance: "98%",
    performance: 95,
    lastAssignmentStatus: "Submitted",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PG",
  },
  {
    id: 5,
    name: "Amit Kumar",
    rollNo: "1005",
    attendance: "78%",
    performance: 65,
    lastAssignmentStatus: "Missing",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AK",
  },
];

const teacherAssignments = [
  {
    title: "Quadratic Equations Problem Set",
    class: "10-A",
    description: "Problems 1-20 from Chapter 7 on Quadratic Equations.",
    assignedDate: "Apr 5, 2023",
    dueDate: "Apr 12, 2023",
    status: "Active",
    submissions: 32,
    totalStudents: 42,
  },
  {
    title: "Trigonometry Worksheet",
    class: "10-B",
    description: "Worksheet on trigonometric identities and applications.",
    assignedDate: "Apr 3, 2023",
    dueDate: "Apr 10, 2023",
    status: "Grading",
    submissions: 38,
    totalStudents: 40,
  },
  {
    title: "Statistics Project",
    class: "9-A",
    description: "Group project on data collection and statistical analysis.",
    assignedDate: "Mar 25, 2023",
    dueDate: "Apr 8, 2023",
    status: "Completed",
    submissions: 45,
    totalStudents: 45,
  },
];

const resources = [
  {
    title: "Quadratic Equations Lesson Plan",
    type: "Lesson Plan",
    subject: "Mathematics",
    class: "Class 10",
    lastUpdated: "Apr 5, 2023",
  },
  {
    title: "Trigonometry Presentation",
    type: "Presentation",
    subject: "Mathematics",
    class: "Class 10",
    lastUpdated: "Apr 2, 2023",
  },
  {
    title: "Statistics Worksheets",
    type: "Worksheet",
    subject: "Mathematics",
    class: "Class 9",
    lastUpdated: "Mar 28, 2023",
  },
  {
    title: "Algebra Practice Questions",
    type: "Question Bank",
    subject: "Mathematics",
    class: "Class 9-10",
    lastUpdated: "Mar 20, 2023",
  },
  {
    title: "Geometry Visual Aids",
    type: "Teaching Aid",
    subject: "Mathematics",
    class: "Class 9-10",
    lastUpdated: "Mar 15, 2023",
  },
  {
    title: "Mathematics Exam Papers",
    type: "Assessment",
    subject: "Mathematics",
    class: "Class 10",
    lastUpdated: "Mar 10, 2023",
  },
];

const teacherAnnouncements = [
  {
    title: "Staff Meeting",
    date: "Apr 8, 2023",
    content:
      "A staff meeting will be held on April 12, 2023, at 3:30 PM in the conference room. All teaching staff are required to attend.",
    postedBy: "Principal",
    for: "All Teachers",
  },
  {
    title: "Exam Schedule Released",
    date: "Apr 5, 2023",
    content:
      "The final examination schedule for the academic year has been released. Please check your email for invigilation duties.",
    postedBy: "Examination Department",
    for: "All Teachers",
  },
  {
    title: "Professional Development Workshop",
    date: "Apr 2, 2023",
    content:
      "A workshop on 'Innovative Teaching Methods' will be conducted on April 15, 2023. Registration is mandatory for all subject teachers.",
    postedBy: "Academic Coordinator",
    for: "All Teachers",
  },
];
