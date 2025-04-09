import {
  Calendar,
  CreditCard,
  FileText,
  MessageSquare,
  MoreHorizontal,
  User,
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

export default function ParentDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <WelcomeBanner />

        {/* Children Overview */}
        <div className="grid gap-4 md:grid-cols-7">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>My Children</CardTitle>
              <CardDescription>
                Overview of your children's profiles
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {children.map((child, index) => (
                <div key={index} className="flex items-center gap-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={child.avatar} alt={child.name} />
                    <AvatarFallback>{child.initials}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="text-sm font-medium">{child.name}</p>
                    <p className="text-xs text-muted-foreground">
                      Class {child.class} | Roll No: {child.rollNo}
                    </p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                <User className="mr-2 h-4 w-4" />
                View All Details
              </Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-5">
            <CardHeader>
              <CardTitle>Quick Overview</CardTitle>
              <CardDescription>
                Important updates for your children
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <Calendar className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-medium">Upcoming Events</p>
                      <p className="text-2xl font-bold">3</p>
                      <p className="text-xs text-muted-foreground">
                        Next: Parent-Teacher Meeting
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <FileText className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-medium">Pending Assignments</p>
                      <p className="text-2xl font-bold">2</p>
                      <p className="text-xs text-muted-foreground">
                        Due this week
                      </p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardContent className="p-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <CreditCard className="mb-2 h-8 w-8 text-muted-foreground" />
                      <p className="text-sm font-medium">Fee Status</p>
                      <Badge variant="outline" className="mt-1">
                        Paid for Term 1
                      </Badge>
                      <p className="text-xs text-muted-foreground mt-1">
                        Next due: July 15
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4">
                <h3 className="text-lg font-medium mb-2">
                  Recent Communications
                </h3>
                <div className="space-y-2">
                  {communications.map((communication, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={communication.avatar}
                              alt={communication.from}
                            />
                            <AvatarFallback>
                              {communication.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">
                                {communication.from}
                              </p>
                              <Badge variant="outline">
                                {communication.date}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {communication.subject}
                            </p>
                            <p className="text-sm mt-1">
                              {communication.preview}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        <Tabs defaultValue="academics" className="space-y-4">
          <TabsList>
            <TabsTrigger value="academics">Academics</TabsTrigger>
            <TabsTrigger value="attendance">Attendance</TabsTrigger>
            <TabsTrigger value="fees">Fees & Payments</TabsTrigger>
            <TabsTrigger value="communication">Communication</TabsTrigger>
          </TabsList>

          <TabsContent value="academics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Academic Performance</CardTitle>
                <CardDescription>
                  Your child's performance across subjects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Arjun Singh - Class 10-A
                    </h3>
                    <div className="space-y-4">
                      {subjects.map((subject) => (
                        <div key={subject.name} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{subject.name}</span>
                            <span>
                              {subject.score}/{subject.total} (
                              {Math.round(
                                (subject.score / subject.total) * 100
                              )}
                              %)
                            </span>
                          </div>
                          <Progress
                            value={(subject.score / subject.total) * 100}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Recent Assessments
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Subject</TableHead>
                          <TableHead>Assessment Type</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Score</TableHead>
                          <TableHead>Class Average</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {assessments.map((assessment) => (
                          <TableRow key={assessment.id}>
                            <TableCell className="font-medium">
                              {assessment.subject}
                            </TableCell>
                            <TableCell>{assessment.type}</TableCell>
                            <TableCell>{assessment.date}</TableCell>
                            <TableCell>{assessment.score}</TableCell>
                            <TableCell>{assessment.classAverage}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  View Detailed Report Card
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="attendance" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Attendance Record</CardTitle>
                <CardDescription>
                  Your child's attendance for the current academic year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Arjun Singh - Class 10-A
                    </h3>
                    <div className="grid gap-4 md:grid-cols-4">
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Present Days</p>
                            <p className="text-2xl font-bold">182</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Absent Days</p>
                            <p className="text-2xl font-bold">8</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Late Arrivals</p>
                            <p className="text-2xl font-bold">5</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">
                              Attendance Rate
                            </p>
                            <p className="text-2xl font-bold">95%</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Recent Absences
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Day</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Reason</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {absences.map((absence) => (
                          <TableRow key={absence.date}>
                            <TableCell className="font-medium">
                              {absence.date}
                            </TableCell>
                            <TableCell>{absence.day}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  absence.status === "Absent"
                                    ? "destructive"
                                    : "warning"
                                }
                              >
                                {absence.status}
                              </Badge>
                            </TableCell>
                            <TableCell>{absence.reason}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  View Calendar
                </Button>
                <Button>
                  <FileText className="mr-2 h-4 w-4" />
                  Request Leave
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="fees" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Fees & Payments</CardTitle>
                <CardDescription>
                  Manage your child's school fees and payments
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Payment Summary
                    </h3>
                    <div className="grid gap-4 md:grid-cols-3">
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">
                              Total Annual Fee
                            </p>
                            <p className="text-2xl font-bold">₹85,000</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Paid Amount</p>
                            <p className="text-2xl font-bold">₹45,000</p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">
                              Pending Amount
                            </p>
                            <p className="text-2xl font-bold">₹40,000</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Payment History
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Receipt No.</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {payments.map((payment) => (
                          <TableRow key={payment.receiptNo}>
                            <TableCell className="font-medium">
                              {payment.receiptNo}
                            </TableCell>
                            <TableCell>{payment.date}</TableCell>
                            <TableCell>{payment.description}</TableCell>
                            <TableCell>₹{payment.amount}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  payment.status === "Paid"
                                    ? "default"
                                    : "destructive"
                                }
                              >
                                {payment.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <FileText className="h-4 w-4" />
                                <span className="sr-only">
                                  Download Receipt
                                </span>
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Upcoming Payments
                    </h3>
                    <Card>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium">Term 2 Tuition Fee</p>
                            <p className="text-sm text-muted-foreground">
                              Due Date: July 15, 2023
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium">₹20,000</p>
                            <Badge variant="outline">Upcoming</Badge>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Button className="w-full">Pay Now</Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="communication" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Communication</CardTitle>
                  <CardDescription>
                    Messages and communications with teachers and school
                  </CardDescription>
                </div>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Message
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium">Recent Messages</h3>
                    <Button variant="outline" size="sm">
                      View All
                    </Button>
                  </div>
                  {messages.map((message, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          <Avatar className="h-10 w-10">
                            <AvatarImage
                              src={message.avatar}
                              alt={message.from}
                            />
                            <AvatarFallback>{message.initials}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">{message.from}</p>
                              <Badge variant="outline">{message.date}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {message.subject}
                            </p>
                            <p className="text-sm mt-1">{message.preview}</p>
                            <div className="mt-2 flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                View
                              </Button>
                              <Button size="sm">Reply</Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
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
            <CardTitle>School Announcements</CardTitle>
            <CardDescription>Important updates from the school</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {parentAnnouncements.map((announcement, index) => (
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

// Sample data
const children = [
  {
    name: "Arjun Singh",
    class: "10-A",
    rollNo: "1001",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "AS",
  },
  {
    name: "Meera Singh",
    class: "7-B",
    rollNo: "7045",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MS",
  },
];

const communications = [
  {
    from: "Ms. Priya Sharma",
    subject: "Parent-Teacher Meeting",
    preview:
      "Dear Parent, This is to inform you about the upcoming parent-teacher meeting scheduled for...",
    date: "Today",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PS",
  },
  {
    from: "Principal's Office",
    subject: "Annual Day Celebration",
    preview:
      "Dear Parents, We are pleased to invite you to our Annual Day Celebration which will be held on...",
    date: "Yesterday",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PO",
  },
];

const subjects = [
  { name: "Mathematics", score: 85, total: 100 },
  { name: "Science", score: 92, total: 100 },
  { name: "English", score: 78, total: 100 },
  { name: "Social Studies", score: 88, total: 100 },
  { name: "Hindi", score: 82, total: 100 },
];

const assessments = [
  {
    id: 1,
    subject: "Mathematics",
    type: "Unit Test",
    date: "Apr 5, 2023",
    score: "85/100",
    classAverage: "78/100",
  },
  {
    id: 2,
    subject: "Science",
    type: "Practical",
    date: "Apr 3, 2023",
    score: "92/100",
    classAverage: "80/100",
  },
  {
    id: 3,
    subject: "English",
    type: "Essay",
    date: "Mar 28, 2023",
    score: "78/100",
    classAverage: "75/100",
  },
  {
    id: 4,
    subject: "Social Studies",
    type: "Project",
    date: "Mar 25, 2023",
    score: "88/100",
    classAverage: "82/100",
  },
];

const absences = [
  {
    date: "Apr 5, 2023",
    day: "Wednesday",
    status: "Absent",
    reason: "Medical Leave",
  },
  {
    date: "Mar 20, 2023",
    day: "Monday",
    status: "Absent",
    reason: "Family Function",
  },
  {
    date: "Mar 10, 2023",
    day: "Friday",
    status: "Late",
    reason: "Traffic",
  },
  {
    date: "Feb 15, 2023",
    day: "Wednesday",
    status: "Absent",
    reason: "Fever",
  },
];

const payments = [
  {
    receiptNo: "REC-2023-001",
    date: "Jan 15, 2023",
    description: "Term 1 Tuition Fee",
    amount: "25,000",
    status: "Paid",
  },
  {
    receiptNo: "REC-2023-002",
    date: "Feb 10, 2023",
    description: "Transportation Fee",
    amount: "8,000",
    status: "Paid",
  },
  {
    receiptNo: "REC-2023-003",
    date: "Mar 5, 2023",
    description: "Examination Fee",
    amount: "5,000",
    status: "Paid",
  },
  {
    receiptNo: "REC-2023-004",
    date: "Apr 2, 2023",
    description: "Library Fee",
    amount: "2,000",
    status: "Paid",
  },
];

const messages = [
  {
    from: "Ms. Priya Sharma",
    subject: "Regarding Mathematics Performance",
    preview:
      "Dear Parent, I wanted to discuss Arjun's recent performance in Mathematics. He has shown significant improvement...",
    date: "Apr 8, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "PS",
  },
  {
    from: "Mr. Rajesh Kumar",
    subject: "Science Project Submission",
    preview:
      "Dear Parent, This is to inform you that Arjun has not yet submitted his Science project which was due last week...",
    date: "Apr 5, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "RK",
  },
  {
    from: "Sports Department",
    subject: "Annual Sports Day Participation",
    preview:
      "Dear Parent, We are pleased to inform you that Arjun has been selected to participate in the 100m race...",
    date: "Apr 2, 2023",
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SD",
  },
];

const parentAnnouncements = [
  {
    title: "Parent-Teacher Meeting",
    date: "Apr 8, 2023",
    content:
      "The Parent-Teacher Meeting for Classes 6-10 will be held on April 15, 2023, from 9:00 AM to 12:00 PM. All parents are requested to attend.",
    postedBy: "Principal",
    for: "All Parents",
  },
  {
    title: "Annual Day Celebration",
    date: "Apr 5, 2023",
    content:
      "The Annual Day Celebration will be held on April 25, 2023, at the school auditorium. Parents are cordially invited to attend the event.",
    postedBy: "Cultural Committee",
    for: "All Parents",
  },
  {
    title: "Summer Vacation Notice",
    date: "Apr 2, 2023",
    content:
      "The school will remain closed for summer vacation from May 15, 2023, to June 15, 2023. Classes will resume on June 16, 2023.",
    postedBy: "Administration",
    for: "All Parents",
  },
];
