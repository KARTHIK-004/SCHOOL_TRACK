import { Calendar, Clock, FileText, User } from "lucide-react";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <WelcomeBanner />

        {/* Student Profile Summary */}
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-2">
            <CardHeader className="flex flex-row items-center gap-4 space-y-0">
              <Avatar className="h-14 w-14">
                <AvatarImage
                  src="/placeholder.svg?height=56&width=56"
                  alt="Arjun Singh"
                />
                <AvatarFallback>AS</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Arjun Singh</CardTitle>
                <CardDescription>Class 10-A | Roll No: 1001</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Admission No:</span>
                  <span className="font-medium">ADM-2020-1001</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Class Teacher:</span>
                  <span className="font-medium">Ms. Priya Sharma</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">House:</span>
                  <span className="font-medium">Blue House</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Attendance:</span>
                  <span className="font-medium">95%</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm">
                <User className="mr-2 h-4 w-4" />
                View Profile
              </Button>
              <Button size="sm">
                <FileText className="mr-2 h-4 w-4" />
                Report Card
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-5">
            <CardHeader>
              <CardTitle>Academic Progress</CardTitle>
              <CardDescription>
                Your current academic performance across subjects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {subjects.map((subject) => (
                  <div key={subject.name} className="space-y-1">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{subject.name}</span>
                      <span>
                        {subject.score}/{subject.total} (
                        {Math.round((subject.score / subject.total) * 100)}%)
                      </span>
                    </div>
                    <Progress
                      value={(subject.score / subject.total) * 100}
                      className="h-2"
                    />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="timetable" className="space-y-4">
          <TabsList>
            <TabsTrigger value="timetable">Timetable</TabsTrigger>
            <TabsTrigger value="assignments">Assignments</TabsTrigger>
            <TabsTrigger value="exams">Exams</TabsTrigger>
            <TabsTrigger value="activities">Activities</TabsTrigger>
          </TabsList>

          <TabsContent value="timetable" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Today's Schedule</CardTitle>
                <CardDescription>Monday, April 10, 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {schedule.map((item, index) => (
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
                          <Clock className="mr-1 h-3 w-3" />
                          <span>
                            {item.startTime} - {item.endTime}
                          </span>
                          <span className="mx-2">•</span>
                          <span>Room {item.room}</span>
                          <span className="mx-2">•</span>
                          <span>{item.teacher}</span>
                        </div>
                      </div>
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

          <TabsContent value="assignments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Pending Assignments</CardTitle>
                <CardDescription>
                  Assignments that need to be completed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {assignments.map((assignment, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">
                            {assignment.title}
                          </CardTitle>
                          <Badge
                            variant={getAssignmentBadgeVariant(
                              assignment.daysLeft
                            )}
                          >
                            {assignment.daysLeft === 0
                              ? "Due Today"
                              : assignment.daysLeft < 0
                              ? `Overdue by ${Math.abs(
                                  assignment.daysLeft
                                )} days`
                              : `Due in ${assignment.daysLeft} days`}
                          </Badge>
                        </div>
                        <CardDescription>{assignment.subject}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="text-sm text-muted-foreground">
                          {assignment.description}
                        </p>
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Assigned: {assignment.assignedDate}
                          </span>
                          <span className="text-muted-foreground">
                            Due: {assignment.dueDate}
                          </span>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/20 flex justify-end gap-2 p-2">
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                        <Button size="sm">Submit Assignment</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exams" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Examinations</CardTitle>
                <CardDescription>
                  Schedule for upcoming tests and examinations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {exams.map((exam, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex h-16 w-16 flex-col items-center justify-center rounded-md bg-muted">
                        <span className="text-sm font-medium">
                          {exam.month}
                        </span>
                        <span className="text-2xl font-bold">{exam.day}</span>
                      </div>
                      <div className="flex-1 space-y-1">
                        <p className="text-base font-medium">{exam.subject}</p>
                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
                          <span className="flex items-center">
                            <Clock className="mr-1 h-3 w-3" />
                            {exam.time}
                          </span>
                          <span>•</span>
                          <span>Duration: {exam.duration}</span>
                          <span>•</span>
                          <span>Room: {exam.room}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {exam.syllabus}
                        </p>
                      </div>
                      <Badge variant={getExamBadgeVariant(exam.daysLeft)}>
                        {exam.daysLeft === 0
                          ? "Today"
                          : `In ${exam.daysLeft} days`}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Complete Exam Schedule
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="activities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Extracurricular Activities</CardTitle>
                <CardDescription>
                  Your clubs, sports, and other activities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {activities.map((activity, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-muted/50 pb-2">
                        <CardTitle className="text-base">
                          {activity.name}
                        </CardTitle>
                        <CardDescription>{activity.type}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Schedule:
                            </span>
                            <span className="font-medium">
                              {activity.schedule}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Location:
                            </span>
                            <span className="font-medium">
                              {activity.location}
                            </span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-muted-foreground">
                              Instructor:
                            </span>
                            <span className="font-medium">
                              {activity.instructor}
                            </span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="bg-muted/20 p-2">
                        <Button variant="outline" size="sm" className="w-full">
                          View Details
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
              Important updates from your school
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {announcements.map((announcement, index) => (
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
function getAssignmentBadgeVariant(daysLeft) {
  if (daysLeft < 0) return "destructive";
  if (daysLeft === 0) return "warning";
  if (daysLeft <= 2) return "secondary";
  return "outline";
}

function getExamBadgeVariant(daysLeft) {
  if (daysLeft === 0) return "default";
  if (daysLeft <= 3) return "warning";
  if (daysLeft <= 7) return "secondary";
  return "outline";
}

// Sample data
const subjects = [
  { name: "Mathematics", score: 85, total: 100 },
  { name: "Science", score: 92, total: 100 },
  { name: "English", score: 78, total: 100 },
  { name: "Social Studies", score: 88, total: 100 },
  { name: "Hindi", score: 82, total: 100 },
];

const schedule = [
  {
    subject: "Assembly",
    startTime: "8:00 AM",
    endTime: "8:30 AM",
    time: "8:00",
    room: "Ground",
    teacher: "All Teachers",
    status: "Completed",
    current: false,
  },
  {
    subject: "Mathematics",
    startTime: "8:30 AM",
    endTime: "9:30 AM",
    time: "8:30",
    room: "101",
    teacher: "Mr. Sharma",
    status: "Completed",
    current: false,
  },
  {
    subject: "Science",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    time: "9:30",
    room: "Lab 2",
    teacher: "Ms. Gupta",
    status: "Current",
    current: true,
  },
  {
    subject: "Break",
    startTime: "10:30 AM",
    endTime: "11:00 AM",
    time: "10:30",
    room: "Canteen",
    teacher: "-",
    status: "Upcoming",
    current: false,
  },
  {
    subject: "English",
    startTime: "11:00 AM",
    endTime: "12:00 PM",
    time: "11:00",
    room: "101",
    teacher: "Mr. Patel",
    status: "Upcoming",
    current: false,
  },
  {
    subject: "Social Studies",
    startTime: "12:00 PM",
    endTime: "1:00 PM",
    time: "12:00",
    room: "101",
    teacher: "Ms. Desai",
    status: "Upcoming",
    current: false,
  },
];

const assignments = [
  {
    title: "Mathematics Problem Set",
    subject: "Mathematics",
    description:
      "Complete problems 1-20 from Chapter 7 on Quadratic Equations.",
    assignedDate: "Apr 5, 2023",
    dueDate: "Apr 12, 2023",
    daysLeft: 2,
  },
  {
    title: "Science Lab Report",
    subject: "Science",
    description:
      "Write a lab report on the experiment conducted on plant photosynthesis.",
    assignedDate: "Apr 3, 2023",
    dueDate: "Apr 10, 2023",
    daysLeft: 0,
  },
  {
    title: "English Essay",
    subject: "English",
    description:
      "Write a 500-word essay on the theme of resilience in the novel 'To Kill a Mockingbird'.",
    assignedDate: "Apr 1, 2023",
    dueDate: "Apr 8, 2023",
    daysLeft: -2,
  },
];

const exams = [
  {
    subject: "Mathematics",
    date: "April 15, 2023",
    month: "Apr",
    day: "15",
    time: "9:00 AM - 11:00 AM",
    duration: "2 hours",
    room: "Exam Hall 1",
    syllabus: "Chapters 5-8: Quadratic Equations, Trigonometry, Statistics",
    daysLeft: 5,
  },
  {
    subject: "Science",
    date: "April 18, 2023",
    month: "Apr",
    day: "18",
    time: "9:00 AM - 11:00 AM",
    duration: "2 hours",
    room: "Exam Hall 1",
    syllabus: "Chapters 6-9: Light, Electricity, Magnetism, Chemical Reactions",
    daysLeft: 8,
  },
  {
    subject: "English",
    date: "April 20, 2023",
    month: "Apr",
    day: "20",
    time: "9:00 AM - 11:00 AM",
    duration: "2 hours",
    room: "Exam Hall 2",
    syllabus: "Literature: Chapters 4-7, Grammar: Tenses, Reported Speech",
    daysLeft: 10,
  },
];

const activities = [
  {
    name: "Science Club",
    type: "Academic Club",
    schedule: "Tuesdays, 3:30 PM - 5:00 PM",
    location: "Science Lab 3",
    instructor: "Dr. Mehta",
  },
  {
    name: "Cricket Team",
    type: "Sports",
    schedule: "Mon, Wed, Fri, 4:00 PM - 6:00 PM",
    location: "School Ground",
    instructor: "Coach Singh",
  },
  {
    name: "Debate Club",
    type: "Academic Club",
    schedule: "Thursdays, 3:30 PM - 5:00 PM",
    location: "Auditorium",
    instructor: "Ms. Sharma",
  },
];

const announcements = [
  {
    title: "Annual Science Exhibition",
    date: "Apr 8, 2023",
    content:
      "The Annual Science Exhibition will be held on April 15, 2023. All students are encouraged to participate and showcase their scientific projects.",
    postedBy: "Principal",
    for: "All Students",
  },
  {
    title: "Parent-Teacher Meeting",
    date: "Apr 5, 2023",
    content:
      "The Parent-Teacher Meeting for Class 10 will be held on April 12, 2023, from 4:00 PM to 6:00 PM. All parents are requested to attend.",
    postedBy: "Class Teacher",
    for: "Class 10",
  },
  {
    title: "Holiday Notice",
    date: "Apr 2, 2023",
    content:
      "The school will remain closed on April 14, 2023, on account of Dr. Ambedkar Jayanti.",
    postedBy: "Administration",
    for: "All Students",
  },
];
