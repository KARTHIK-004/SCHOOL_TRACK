import {
  Bell,
  BookOpen,
  Calendar,
  ChevronDown,
  CreditCard,
  Download,
  FileText,
  LibraryIcon,
  MoreHorizontal,
  PieChart,
  Plus,
  Search,
  Settings,
  TestTubeIcon,
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
import { Input } from "@/components/ui/input";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SchoolAdminDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              School Administration
            </h1>
            <p className="text-muted-foreground">
              Delhi Public School, Sector 45
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="current">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Academic Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">2023-2024 (Current)</SelectItem>
                <SelectItem value="previous">2022-2023</SelectItem>
                <SelectItem value="next">2024-2025 (Upcoming)</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm" className="h-8">
              <Download className="mr-2 h-3.5 w-3.5" />
              Export
            </Button>
            <Button size="sm" className="h-8">
              <Settings className="mr-2 h-3.5 w-3.5" />
              Settings
            </Button>
          </div>
        </div>

        {/* School Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,845</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+3.2%</span>
                <span>from last year</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Teaching Staff
              </CardTitle>
              <User className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">142</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+5</span>
                <span>new hires this term</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Fee Collection
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">₹1.8Cr</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-amber-500 mr-1">92%</span>
                <span>of target collected</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Overall Attendance
              </CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">94.8%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+1.2%</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Performance Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Academic Performance Overview</CardTitle>
            <CardDescription>
              School-wide performance metrics for the current academic year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Average Pass Rate</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">92.4%</div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">+2.1%</span>
                      <span className="text-muted-foreground">
                        from last year
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Students Scoring 90%+
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">428</div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">+15%</span>
                      <span className="text-muted-foreground">
                        from last year
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Competitive Exam Selections
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">78</div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">+8</span>
                      <span className="text-muted-foreground">
                        from last year
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">
                      Extracurricular Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">124</div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">+32</span>
                      <span className="text-muted-foreground">
                        from last year
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">
                  Class-wise Performance
                </h3>
                <div className="space-y-4">
                  {classPerformance.map((classData) => (
                    <div key={classData.class} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">
                          Class {classData.class}
                        </span>
                        <span>
                          {classData.avgScore}% Average ({classData.passRate}%
                          Pass Rate)
                        </span>
                      </div>
                      <Progress value={classData.avgScore} className="h-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="staff" className="space-y-4">
          <TabsList>
            <TabsTrigger value="staff">Staff Management</TabsTrigger>
            <TabsTrigger value="students">Student Management</TabsTrigger>
            <TabsTrigger value="finances">Financial Overview</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
          </TabsList>

          <TabsContent value="staff" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Teaching Staff</CardTitle>
                  <CardDescription>
                    Manage your school's teaching staff
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Teacher
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Classes</TableHead>
                      <TableHead>Experience</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {teachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={teacher.avatar}
                                alt={teacher.name}
                              />
                              <AvatarFallback>
                                {teacher.initials}
                              </AvatarFallback>
                            </Avatar>
                            {teacher.name}
                          </div>
                        </TableCell>
                        <TableCell>{teacher.department}</TableCell>
                        <TableCell>{teacher.classes}</TableCell>
                        <TableCell>{teacher.experience} years</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              teacher.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {teacher.status}
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
                              <DropdownMenuItem>Edit Details</DropdownMenuItem>
                              <DropdownMenuItem>
                                Assign Classes
                              </DropdownMenuItem>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem className="text-destructive">
                                Deactivate
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter className="flex justify-between">
                <div className="text-sm text-muted-foreground">
                  Showing 5 of 142 teachers
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" disabled>
                    Previous
                  </Button>
                  <Button variant="outline" size="sm">
                    Next
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Department Overview</CardTitle>
                  <CardDescription>
                    Staff distribution by department
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div
                        key={dept.name}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <div
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: dept.color }}
                          ></div>
                          <span className="font-medium">{dept.name}</span>
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-sm text-muted-foreground">
                            {dept.count} teachers
                          </span>
                          <span className="text-sm font-medium">
                            {dept.percentage}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Staff Attendance</CardTitle>
                  <CardDescription>
                    Today's staff attendance overview
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <p className="text-sm font-medium">Present</p>
                          <p className="text-2xl font-bold">134</p>
                          <p className="text-xs text-muted-foreground">
                            94.4% of total
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <p className="text-sm font-medium">Absent</p>
                          <p className="text-2xl font-bold">8</p>
                          <p className="text-xs text-muted-foreground">
                            5.6% of total
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Absent Staff</h4>
                    <div className="space-y-2">
                      {absentStaff.map((staff, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between text-sm"
                        >
                          <span>{staff.name}</span>
                          <Badge variant="outline">{staff.reason}</Badge>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="students" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Student Enrollment</CardTitle>
                  <CardDescription>
                    Overview of student enrollment by class
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    New Admission
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <p className="text-sm font-medium">Primary Section</p>
                          <p className="text-2xl font-bold">1,245</p>
                          <p className="text-xs text-muted-foreground">
                            Classes 1-5
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <p className="text-sm font-medium">Middle Section</p>
                          <p className="text-2xl font-bold">980</p>
                          <p className="text-xs text-muted-foreground">
                            Classes 6-8
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <p className="text-sm font-medium">
                            Secondary Section
                          </p>
                          <p className="text-2xl font-bold">620</p>
                          <p className="text-xs text-muted-foreground">
                            Classes 9-12
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Class-wise Enrollment
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Class</TableHead>
                          <TableHead>Total Students</TableHead>
                          <TableHead>Boys</TableHead>
                          <TableHead>Girls</TableHead>
                          <TableHead>Sections</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {classEnrollment.map((classData) => (
                          <TableRow key={classData.class}>
                            <TableCell className="font-medium">
                              Class {classData.class}
                            </TableCell>
                            <TableCell>{classData.total}</TableCell>
                            <TableCell>{classData.boys}</TableCell>
                            <TableCell>{classData.girls}</TableCell>
                            <TableCell>{classData.sections}</TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                View Details
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Student Attendance</CardTitle>
                  <CardDescription>Today's attendance overview</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-4">
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Present</p>
                            <p className="text-2xl font-bold">2,698</p>
                            <p className="text-xs text-muted-foreground">
                              94.8% of total
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">Absent</p>
                            <p className="text-2xl font-bold">147</p>
                            <p className="text-xs text-muted-foreground">
                              5.2% of total
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="bg-muted/50">
                        <CardContent className="p-4">
                          <div className="flex flex-col items-center justify-center text-center">
                            <p className="text-sm font-medium">On Leave</p>
                            <p className="text-2xl font-bold">42</p>
                            <p className="text-xs text-muted-foreground">
                              1.5% of total
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Classes with Low Attendance
                      </h4>
                      <div className="space-y-2">
                        {lowAttendanceClasses.map((classData, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm">
                              Class {classData.class}
                            </span>
                            <div className="flex items-center gap-2">
                              <Progress
                                value={classData.attendance}
                                className="h-2 w-20"
                              />
                              <span className="text-sm font-medium">
                                {classData.attendance}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Admissions</CardTitle>
                  <CardDescription>
                    New students admitted in the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAdmissions.map((student, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2">
                          <Avatar className="h-8 w-8">
                            <AvatarImage
                              src={student.avatar}
                              alt={student.name}
                            />
                            <AvatarFallback>{student.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-medium">
                              {student.name}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Class {student.class}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm">{student.admissionDate}</p>
                          <Badge variant="outline">
                            {student.admissionType}
                          </Badge>
                        </div>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full">
                      View All New Admissions
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="finances" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
                <CardDescription>
                  School finances for the current academic year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Total Revenue</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">₹4.2 Cr</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+12%</span>
                          <span className="text-muted-foreground">
                            from last year
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Total Expenses
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">₹3.1 Cr</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-amber-500 mr-1">+8%</span>
                          <span className="text-muted-foreground">
                            from last year
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Outstanding Fees
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">₹42.5 L</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-red-500 mr-1">8%</span>
                          <span className="text-muted-foreground">
                            of total fees
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Scholarship Disbursed
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">₹18.6 L</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+15%</span>
                          <span className="text-muted-foreground">
                            from last year
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Revenue Breakdown
                    </h3>
                    <div className="space-y-4">
                      {revenueBreakdown.map((item) => (
                        <div key={item.category} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{item.category}</span>
                            <span>
                              ₹{item.amount} ({item.percentage}%)
                            </span>
                          </div>
                          <Progress value={item.percentage} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Recent Transactions
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Description</TableHead>
                          <TableHead>Category</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {financialTransactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">
                              {transaction.id}
                            </TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>{transaction.description}</TableCell>
                            <TableCell>{transaction.category}</TableCell>
                            <TableCell
                              className={
                                transaction.type === "income"
                                  ? "text-green-600"
                                  : "text-red-600"
                              }
                            >
                              {transaction.type === "income" ? "+" : "-"}₹
                              {transaction.amount}
                            </TableCell>
                            <TableCell>
                              <Badge
                                variant={getTransactionStatusBadge(
                                  transaction.status
                                )}
                              >
                                {transaction.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Financial Report
                </Button>
                <Button>
                  <PieChart className="mr-2 h-4 w-4" />
                  View Detailed Analytics
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="facilities" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Facilities Management</CardTitle>
                <CardDescription>
                  Overview of school facilities and infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <BookOpen className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Classrooms</p>
                          <p className="text-2xl font-bold">85</p>
                          <p className="text-xs text-muted-foreground">
                            5 under maintenance
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <TestTubeIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Laboratories</p>
                          <p className="text-2xl font-bold">12</p>
                          <p className="text-xs text-muted-foreground">
                            Physics, Chemistry, Biology, Computer
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <LibraryIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Library</p>
                          <p className="text-2xl font-bold">1</p>
                          <p className="text-xs text-muted-foreground">
                            25,000+ books
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Maintenance Requests
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Request ID</TableHead>
                          <TableHead>Facility</TableHead>
                          <TableHead>Issue</TableHead>
                          <TableHead>Reported By</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {maintenanceRequests.map((request) => (
                          <TableRow key={request.id}>
                            <TableCell className="font-medium">
                              {request.id}
                            </TableCell>
                            <TableCell>{request.facility}</TableCell>
                            <TableCell>{request.issue}</TableCell>
                            <TableCell>{request.reportedBy}</TableCell>
                            <TableCell>{request.date}</TableCell>
                            <TableCell>
                              <Badge
                                variant={getMaintenanceStatusBadge(
                                  request.status
                                )}
                              >
                                {request.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                Update
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Upcoming Infrastructure Projects
                    </h3>
                    <div className="space-y-4">
                      {infrastructureProjects.map((project, index) => (
                        <Card key={index}>
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">{project.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {project.description}
                                </p>
                                <div className="mt-2 flex items-center gap-4 text-sm">
                                  <span>Budget: ₹{project.budget}</span>
                                  <span>Timeline: {project.timeline}</span>
                                </div>
                              </div>
                              <Badge
                                variant={
                                  project.status === "In Progress"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {project.status}
                              </Badge>
                            </div>
                            <div className="mt-4">
                              <div className="flex items-center justify-between text-sm">
                                <span>Progress</span>
                                <span>{project.progress}%</span>
                              </div>
                              <Progress
                                value={project.progress}
                                className="h-2 mt-1"
                              />
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Announcements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>
                School-wide announcements and notices
              </CardDescription>
            </div>
            <Button size="sm">
              <Plus className="mr-2 h-4 w-4" />
              New Announcement
            </Button>
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
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <span>Posted by: {announcement.postedBy}</span>
                      <span className="mx-2">•</span>
                      <span>For: {announcement.for}</span>
                    </div>
                    <Button variant="ghost" size="sm">
                      Edit
                    </Button>
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
function getTransactionStatusBadge(status) {
  switch (status) {
    case "Completed":
      return "default";
    case "Pending":
      return "secondary";
    case "Failed":
      return "destructive";
    default:
      return "outline";
  }
}

function getMaintenanceStatusBadge(status) {
  switch (status) {
    case "Completed":
      return "default";
    case "In Progress":
      return "secondary";
    case "Pending":
      return "warning";
    case "Urgent":
      return "destructive";
    default:
      return "outline";
  }
}

// Sample data
const classPerformance = [
  { class: "12", avgScore: 88, passRate: 98 },
  { class: "11", avgScore: 85, passRate: 97 },
  { class: "10", avgScore: 82, passRate: 95 },
  { class: "9", avgScore: 80, passRate: 94 },
  { class: "8", avgScore: 84, passRate: 96 },
];

const teachers = [
  {
    id: 1,
    name: "Priya Sharma",
    department: "Mathematics",
    classes: "10-A, 10-B, 9-A",
    experience: 12,
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PS",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    department: "Science",
    classes: "10-A, 10-B, 9-B",
    experience: 15,
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RK",
  },
  {
    id: 3,
    name: "Anita Desai",
    department: "English",
    classes: "10-A, 10-B, 9-A, 9-B",
    experience: 10,
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AD",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    department: "Social Studies",
    classes: "10-A, 10-B, 9-A, 9-B",
    experience: 8,
    status: "On Leave",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VM",
  },
  {
    id: 5,
    name: "Sunita Patel",
    department: "Hindi",
    classes: "10-A, 10-B, 9-A, 9-B",
    experience: 14,
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SP",
  },
];

const departments = [
  { name: "Mathematics", count: 24, percentage: 17, color: "#4f46e5" },
  { name: "Science", count: 32, percentage: 23, color: "#0ea5e9" },
  { name: "Languages", count: 28, percentage: 20, color: "#10b981" },
  { name: "Social Studies", count: 18, percentage: 13, color: "#f59e0b" },
  { name: "Arts & Music", count: 15, percentage: 10, color: "#ef4444" },
  { name: "Physical Education", count: 12, percentage: 8, color: "#8b5cf6" },
  { name: "Computer Science", count: 13, percentage: 9, color: "#ec4899" },
];

const absentStaff = [
  { name: "Vikram Mehta", reason: "Medical Leave" },
  { name: "Anjali Singh", reason: "Personal Leave" },
  { name: "Rahul Verma", reason: "Official Duty" },
  { name: "Deepak Sharma", reason: "Medical Leave" },
];

const classEnrollment = [
  { class: "12", total: 180, boys: 95, girls: 85, sections: "A, B, C" },
  { class: "11", total: 195, boys: 100, girls: 95, sections: "A, B, C" },
  { class: "10", total: 245, boys: 130, girls: 115, sections: "A, B, C, D" },
  { class: "9", total: 240, boys: 125, girls: 115, sections: "A, B, C, D" },
  { class: "8", total: 210, boys: 110, girls: 100, sections: "A, B, C, D" },
];

const lowAttendanceClasses = [
  { class: "11-B", attendance: 82 },
  { class: "9-C", attendance: 85 },
  { class: "8-D", attendance: 86 },
];

const recentAdmissions = [
  {
    name: "Aryan Gupta",
    class: "9-A",
    admissionDate: "Apr 5, 2023",
    admissionType: "New",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AG",
  },
  {
    name: "Riya Sharma",
    class: "7-B",
    admissionDate: "Apr 3, 2023",
    admissionType: "Transfer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RS",
  },
  {
    name: "Aditya Singh",
    class: "10-C",
    admissionDate: "Apr 1, 2023",
    admissionType: "New",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AS",
  },
  {
    name: "Neha Patel",
    class: "6-A",
    admissionDate: "Mar 28, 2023",
    admissionType: "Transfer",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "NP",
  },
];

const revenueBreakdown = [
  { category: "Tuition Fees", amount: "3.2 Cr", percentage: 76 },
  { category: "Transportation Fees", amount: "45 L", percentage: 11 },
  { category: "Examination Fees", amount: "25 L", percentage: 6 },
  { category: "Miscellaneous Fees", amount: "18 L", percentage: 4 },
  { category: "Donations", amount: "12 L", percentage: 3 },
];

const financialTransactions = [
  {
    id: "TRX-001245",
    date: "Apr 10, 2023",
    description: "Fee Collection - Class 10",
    category: "Tuition Fees",
    amount: "4,25,000",
    type: "income",
    status: "Completed",
  },
  {
    id: "TRX-001246",
    date: "Apr 8, 2023",
    description: "Staff Salary - March 2023",
    category: "Salaries",
    amount: "32,45,000",
    type: "expense",
    status: "Completed",
  },
  {
    id: "TRX-001247",
    date: "Apr 5, 2023",
    description: "Laboratory Equipment Purchase",
    category: "Infrastructure",
    amount: "3,85,000",
    type: "expense",
    status: "Completed",
  },
  {
    id: "TRX-001248",
    date: "Apr 3, 2023",
    description: "Transportation Fee Collection",
    category: "Transportation",
    amount: "2,45,000",
    type: "income",
    status: "Completed",
  },
  {
    id: "TRX-001249",
    date: "Apr 1, 2023",
    description: "Utility Bills Payment",
    category: "Utilities",
    amount: "1,25,000",
    type: "expense",
    status: "Pending",
  },
];

const maintenanceRequests = [
  {
    id: "MR-0123",
    facility: "Computer Lab 2",
    issue: "Air Conditioning not working",
    reportedBy: "Rajesh Kumar",
    date: "Apr 8, 2023",
    status: "In Progress",
  },
  {
    id: "MR-0124",
    facility: "Classroom 10-B",
    issue: "Projector display issues",
    reportedBy: "Priya Sharma",
    date: "Apr 7, 2023",
    status: "Pending",
  },
  {
    id: "MR-0125",
    facility: "Boys Washroom - Ground Floor",
    issue: "Water leakage",
    reportedBy: "Vikram Mehta",
    date: "Apr 5, 2023",
    status: "Urgent",
  },
  {
    id: "MR-0126",
    facility: "Library",
    issue: "Bookshelf repair needed",
    reportedBy: "Anita Desai",
    date: "Apr 3, 2023",
    status: "Completed",
  },
];

const infrastructureProjects = [
  {
    name: "New Science Block Construction",
    description:
      "Construction of a new science block with 6 laboratories and 12 classrooms",
    budget: "2.5 Cr",
    timeline: "Jan 2023 - Dec 2023",
    status: "In Progress",
    progress: 45,
  },
  {
    name: "Sports Complex Renovation",
    description:
      "Renovation of the existing sports complex including indoor stadium and swimming pool",
    budget: "1.2 Cr",
    timeline: "Mar 2023 - Aug 2023",
    status: "In Progress",
    progress: 30,
  },
  {
    name: "Smart Classroom Implementation",
    description:
      "Converting all classrooms to smart classrooms with interactive boards and projectors",
    budget: "85 L",
    timeline: "Apr 2023 - Jul 2023",
    status: "Planning",
    progress: 10,
  },
];

const announcements = [
  {
    title: "Annual Day Celebration",
    date: "Apr 8, 2023",
    content:
      "The Annual Day Celebration will be held on April 25, 2023, at the school auditorium. All department heads are requested to prepare their students for cultural performances.",
    postedBy: "Principal",
    for: "All Staff and Students",
  },
  {
    title: "Staff Meeting",
    date: "Apr 5, 2023",
    content:
      "A staff meeting will be held on April 12, 2023, at 3:30 PM in the conference room. All teaching and non-teaching staff are required to attend.",
    postedBy: "Vice Principal",
    for: "All Staff",
  },
  {
    title: "Examination Schedule Released",
    date: "Apr 3, 2023",
    content:
      "The final examination schedule for the academic year has been released. Please check the academic calendar for details.",
    postedBy: "Examination Department",
    for: "All Staff and Students",
  },
];
