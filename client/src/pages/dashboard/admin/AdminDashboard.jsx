import {
  Building,
  ChevronDown,
  CreditCard,
  FileText,
  MoreHorizontal,
  Plus,
  Search,
  Server,
  Settings,
  Shield,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import WelcomeBanner from "@/components/Dashboard/WelcomeBanner";

export default function AdminDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              Administration
            </h1>
            <p className="text-muted-foreground">
              Manage all schools and administrators
            </p>
          </div>
          <div className="hidden md:grid lg:grid-cols-2 items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="h-8">
                  <Plus className="mr-2 h-3.5 w-3.5" />
                  Create New
                  <ChevronDown className="ml-2 h-3.5 w-3.5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/new-announcement">New Announcement</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/dashboard/new-admission">New Admission</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>Add School</DropdownMenuItem>
                <DropdownMenuItem>Add School Admin</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/dashboard/settings">
              <Button size="sm" className="h-8">
                <Settings className="mr-2 h-4 w-4" />
                System Settings
              </Button>
            </Link>
          </div>
        </div>
        <WelcomeBanner />

        {/* System Overview */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Schools
              </CardTitle>
              <Building className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+2</span>
                <span>added this month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                School Admins
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+5</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Students
              </CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">86,452</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+12.5%</span>
                <span>from last month</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Active Subscriptions
              </CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-amber-500 mr-1">2</span>
                <span>renewals due this month</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tabs Section */}
        {/* <Tabs defaultValue="schools" className="space-y-4">
          <TabsList>
            <TabsTrigger value="schools">Schools</TabsTrigger>
            <TabsTrigger value="admins">School Admins</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="billing">Billing</TabsTrigger>
          </TabsList>

          <TabsContent value="schools" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Registered Schools</CardTitle>
                  <CardDescription>
                    Manage all schools in the system
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <FileText className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add School
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>School Name</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Students</TableHead>
                      <TableHead>Staff</TableHead>
                      <TableHead>Admins</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schools.map((school) => (
                      <TableRow key={school.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={school.logo}
                                alt={school.name}
                              />
                              <AvatarFallback>{school.initials}</AvatarFallback>
                            </Avatar>
                            {school.name}
                          </div>
                        </TableCell>
                        <TableCell>{school.location}</TableCell>
                        <TableCell>{school.students}</TableCell>
                        <TableCell>{school.staff}</TableCell>
                        <TableCell>{school.admins}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              school.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {school.status}
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
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Edit School</DropdownMenuItem>
                              <DropdownMenuItem>Manage Admins</DropdownMenuItem>
                              <DropdownMenuItem>
                                View Analytics
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
                  Showing 5 of 24 schools
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
                  <CardTitle>School Onboarding Status</CardTitle>
                  <CardDescription>
                    Recent school onboarding progress
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {onboardingSchools.map((school, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <h4 className="font-medium">{school.name}</h4>
                              <p className="text-sm text-muted-foreground">
                                {school.location}
                              </p>
                              <div className="mt-2 flex items-center gap-4 text-sm">
                                <span>Started: {school.startDate}</span>
                                <span>Admin: {school.admin}</span>
                              </div>
                            </div>
                            <Badge
                              variant={getOnboardingStatusBadge(school.status)}
                            >
                              {school.status}
                            </Badge>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm">
                              <span>Progress</span>
                              <span>{school.progress}%</span>
                            </div>
                            <Progress
                              value={school.progress}
                              className="h-2 mt-1"
                            />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>School Distribution</CardTitle>
                  <CardDescription>Schools by region and type</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-medium mb-2">By Region</h4>
                      <div className="space-y-2">
                        {schoolsByRegion.map((region) => (
                          <div
                            key={region.name}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: region.color }}
                              ></div>
                              <span className="text-sm">{region.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                {region.count} schools
                              </span>
                              <span className="text-sm font-medium">
                                {region.percentage}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm font-medium mb-2">By Type</h4>
                      <div className="space-y-2">
                        {schoolsByType.map((type) => (
                          <div
                            key={type.name}
                            className="flex items-center justify-between"
                          >
                            <div className="flex items-center gap-2">
                              <div
                                className="h-3 w-3 rounded-full"
                                style={{ backgroundColor: type.color }}
                              ></div>
                              <span className="text-sm">{type.name}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">
                                {type.count} schools
                              </span>
                              <span className="text-sm font-medium">
                                {type.percentage}%
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="admins" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>School Administrators</CardTitle>
                  <CardDescription>
                    Manage school-level administrators
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by School" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Schools</SelectItem>
                      <SelectItem value="dps">Delhi Public School</SelectItem>
                      <SelectItem value="sma">St. Mary's Academy</SelectItem>
                      <SelectItem value="mhs">Modern High School</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Admin
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>School</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {schoolAdmins.map((admin) => (
                      <TableRow key={admin.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage
                                src={admin.avatar}
                                alt={admin.name}
                              />
                              <AvatarFallback>{admin.initials}</AvatarFallback>
                            </Avatar>
                            {admin.name}
                          </div>
                        </TableCell>
                        <TableCell>{admin.email}</TableCell>
                        <TableCell>{admin.school}</TableCell>
                        <TableCell>{admin.role}</TableCell>
                        <TableCell>{admin.lastLogin}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              admin.status === "Active"
                                ? "default"
                                : "secondary"
                            }
                          >
                            {admin.status}
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
                              <DropdownMenuItem>Edit Admin</DropdownMenuItem>
                              <DropdownMenuItem>
                                Reset Password
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Manage Permissions
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
                  Showing 5 of 48 administrators
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
                  <CardTitle>Admin Activity</CardTitle>
                  <CardDescription>
                    Recent administrator activity
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {adminActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Avatar className="mt-1 h-8 w-8">
                          <AvatarImage
                            src={activity.avatar}
                            alt={activity.admin}
                          />
                          <AvatarFallback>{activity.initials}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">
                            {activity.admin}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {activity.action}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Permission Groups</CardTitle>
                  <CardDescription>
                    Manage administrator permission groups
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {permissionGroups.map((group, index) => (
                      <Card key={index}>
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div>
                              <h4 className="font-medium">{group.name}</h4>
                              <p className="text-xs text-muted-foreground">
                                {group.description}
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Badge variant="outline">
                                {group.admins} admins
                              </Badge>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8"
                              >
                                <Settings className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                    <Button variant="outline" className="w-full">
                      <Plus className="mr-2 h-4 w-4" />
                      Create Permission Group
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>System Analytics</CardTitle>
                <CardDescription>
                  Overview of system performance and usage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-4">
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">Active Users</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">24,892</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+18%</span>
                          <span className="text-muted-foreground">
                            from last month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Average Session Time
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">32 min</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+5%</span>
                          <span className="text-muted-foreground">
                            from last month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">System Uptime</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">99.98%</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+0.1%</span>
                          <span className="text-muted-foreground">
                            from last month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Support Tickets
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">42</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">-12%</span>
                          <span className="text-muted-foreground">
                            from last month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Feature Usage</h3>
                    <div className="space-y-4">
                      {featureUsage.map((feature) => (
                        <div key={feature.name} className="space-y-1">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{feature.name}</span>
                            <span>
                              {feature.usageCount} ({feature.percentage}%)
                            </span>
                          </div>
                          <Progress
                            value={feature.percentage}
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
                <Select defaultValue="30">
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Time Period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                    <SelectItem value="365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Billing Overview</CardTitle>
                <CardDescription>
                  Manage subscriptions and billing for all schools
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
                        <div className="text-2xl font-bold">₹1.2 Cr</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+18%</span>
                          <span className="text-muted-foreground">
                            from last year
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Active Subscriptions
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">22</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+2</span>
                          <span className="text-muted-foreground">
                            from last month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Pending Renewals
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-amber-500 mr-1">
                            Due this month
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm">
                          Average Subscription Value
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-2xl font-bold">₹5.4L</div>
                        <div className="mt-2 flex items-center text-xs">
                          <span className="text-green-500 mr-1">+8%</span>
                          <span className="text-muted-foreground">
                            from last year
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Recent Transactions
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice ID</TableHead>
                          <TableHead>School</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Plan</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {billingTransactions.map((transaction) => (
                          <TableRow key={transaction.id}>
                            <TableCell className="font-medium">
                              {transaction.id}
                            </TableCell>
                            <TableCell>{transaction.school}</TableCell>
                            <TableCell>{transaction.date}</TableCell>
                            <TableCell>₹{transaction.amount}</TableCell>
                            <TableCell>{transaction.plan}</TableCell>
                            <TableCell>
                              <Badge
                                variant={getBillingStatusBadge(
                                  transaction.status
                                )}
                              >
                                {transaction.status}
                              </Badge>
                            </TableCell>
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
              <CardFooter className="flex justify-between">
                <Button variant="outline">
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Billing Report
                </Button>
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Create Invoice
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs> */}

        {/* Recent Announcements */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Announcements</CardTitle>
              <CardDescription>
                System-wide announcements and notices
              </CardDescription>
            </div>
            <Button size="sm" asChild>
              <Link to="/new-announcement">
                <Plus className="mr-2 h-4 w-4" />
                New Announcement
              </Link>
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

// Icons
function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

// Helper functions
function getOnboardingStatusBadge(status) {
  switch (status) {
    case "Completed":
      return "default";
    case "In Progress":
      return "secondary";
    case "Pending":
      return "outline";
    default:
      return "outline";
  }
}

function getBillingStatusBadge(status) {
  switch (status) {
    case "Paid":
      return "default";
    case "Pending":
      return "warning";
    case "Failed":
      return "destructive";
    default:
      return "outline";
  }
}

// Sample data
const schools = [
  {
    id: 1,
    name: "Delhi Public School",
    location: "Delhi",
    students: 2845,
    staff: 142,
    admins: 3,
    status: "Active",
    logo: "/placeholder.svg?height=32&width=32",
    initials: "DPS",
  },
  {
    id: 2,
    name: "St. Mary's Academy",
    location: "Mumbai",
    students: 1850,
    staff: 98,
    admins: 2,
    status: "Active",
    logo: "/placeholder.svg?height=32&width=32",
    initials: "SMA",
  },
  {
    id: 3,
    name: "Modern High School",
    location: "Bangalore",
    students: 1620,
    staff: 85,
    admins: 2,
    status: "Active",
    logo: "/placeholder.svg?height=32&width=32",
    initials: "MHS",
  },
  {
    id: 4,
    name: "International School of Excellence",
    location: "Chennai",
    students: 1240,
    staff: 72,
    admins: 2,
    status: "Active",
    logo: "/placeholder.svg?height=32&width=32",
    initials: "ISE",
  },
  {
    id: 5,
    name: "Greenfield Academy",
    location: "Hyderabad",
    students: 980,
    staff: 65,
    admins: 1,
    status: "On Trial",
    logo: "/placeholder.svg?height=32&width=32",
    initials: "GA",
  },
];

const onboardingSchools = [
  {
    name: "City Montessori School",
    location: "Lucknow",
    startDate: "Apr 5, 2023",
    admin: "Rajiv Mehta",
    status: "In Progress",
    progress: 65,
  },
  {
    name: "Presidency School",
    location: "Pune",
    startDate: "Apr 1, 2023",
    admin: "Anita Sharma",
    status: "Pending",
    progress: 20,
  },
  {
    name: "Global International School",
    location: "Gurgaon",
    startDate: "Mar 25, 2023",
    admin: "Vikram Singh",
    status: "Completed",
    progress: 100,
  },
];

const schoolsByRegion = [
  { name: "North India", count: 8, percentage: 33, color: "#4f46e5" },
  { name: "South India", count: 6, percentage: 25, color: "#0ea5e9" },
  { name: "West India", count: 5, percentage: 21, color: "#10b981" },
  { name: "East India", count: 3, percentage: 13, color: "#f59e0b" },
  { name: "Central India", count: 2, percentage: 8, color: "#ef4444" },
];

const schoolsByType = [
  { name: "Private", count: 15, percentage: 63, color: "#4f46e5" },
  { name: "Government", count: 5, percentage: 21, color: "#0ea5e9" },
  { name: "International", count: 3, percentage: 12, color: "#10b981" },
  { name: "Special Education", count: 1, percentage: 4, color: "#f59e0b" },
];

const schoolAdmins = [
  {
    id: 1,
    name: "Dr. Sunita Desai",
    email: "sunita.desai@dps.edu",
    school: "Delhi Public School",
    role: "Principal",
    lastLogin: "Today, 09:45 AM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SD",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@dps.edu",
    school: "Delhi Public School",
    role: "Vice Principal",
    lastLogin: "Today, 08:30 AM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RK",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya.sharma@sma.edu",
    school: "St. Mary's Academy",
    role: "Principal",
    lastLogin: "Yesterday, 05:15 PM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PS",
  },
  {
    id: 4,
    name: "Vikram Mehta",
    email: "vikram.mehta@mhs.edu",
    school: "Modern High School",
    role: "Principal",
    lastLogin: "Yesterday, 03:20 PM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VM",
  },
  {
    id: 5,
    name: "Anita Desai",
    email: "anita.desai@ise.edu",
    school: "International School of Excellence",
    role: "Principal",
    lastLogin: "Apr 8, 2023, 10:45 AM",
    status: "On Leave",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AD",
  },
];

const adminActivities = [
  {
    admin: "Dr. Sunita Desai",
    action: "Added new teacher: Rahul Verma",
    time: "Today, 09:45 AM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "SD",
  },
  {
    admin: "Rajesh Kumar",
    action: "Updated class schedule for Class 10-A",
    time: "Today, 08:30 AM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RK",
  },
  {
    admin: "Priya Sharma",
    action: "Approved 5 new student admissions",
    time: "Yesterday, 05:15 PM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PS",
  },
  {
    admin: "Vikram Mehta",
    action: "Generated term-end report cards",
    time: "Yesterday, 03:20 PM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VM",
  },
];

const permissionGroups = [
  {
    name: "School Principals",
    description: "Full access to school management features",
    admins: 24,
  },
  {
    name: "Vice Principals",
    description: "Access to most school management features",
    admins: 18,
  },
  {
    name: "Administrative Staff",
    description: "Limited access to administrative features",
    admins: 6,
  },
];

const featureUsage = [
  {
    name: "Attendance Management",
    usageCount: "24,892 sessions",
    percentage: 92,
  },
  { name: "Grade Management", usageCount: "18,456 sessions", percentage: 85 },
  { name: "Fee Management", usageCount: "12,345 sessions", percentage: 78 },
  { name: "Communication Tools", usageCount: "9,876 sessions", percentage: 65 },
  { name: "Report Generation", usageCount: "7,654 sessions", percentage: 58 },
];

const billingTransactions = [
  {
    id: "INV-2023-0045",
    school: "Delhi Public School",
    date: "Apr 5, 2023",
    amount: "10,00,000",
    plan: "Enterprise Plan",
    status: "Paid",
  },
  {
    id: "INV-2023-0044",
    school: "St. Mary's Academy",
    date: "Apr 3, 2023",
    amount: "5,00,000",
    plan: "Premium Plan",
    status: "Paid",
  },
  {
    id: "INV-2023-0043",
    school: "Modern High School",
    date: "Apr 1, 2023",
    amount: "2,50,000",
    plan: "Standard Plan",
    status: "Pending",
  },
  {
    id: "INV-2023-0042",
    school: "International School of Excellence",
    date: "Mar 28, 2023",
    amount: "5,00,000",
    plan: "Premium Plan",
    status: "Paid",
  },
  {
    id: "INV-2023-0041",
    school: "Greenfield Academy",
    date: "Mar 25, 2023",
    amount: "0",
    plan: "Trial Plan",
    status: "Free Trial",
  },
];

const announcements = [
  {
    title: "System Maintenance Scheduled",
    date: "Apr 8, 2023",
    content:
      "A system maintenance is scheduled for April 15, 2023, from 2:00 AM to 4:00 AM. The system will be unavailable during this time. Please plan accordingly.",
    postedBy: "System Admin",
    for: "All Schools",
  },
  {
    title: "New Feature Release: Enhanced Reporting",
    date: "Apr 5, 2023",
    content:
      "We are excited to announce the release of our enhanced reporting module. This update includes customizable dashboards, advanced filters, and export options.",
    postedBy: "Product Team",
    for: "All Schools",
  },
  {
    title: "Annual School Registration Renewal",
    date: "Apr 3, 2023",
    content:
      "This is a reminder that annual school registration renewals are due by May 31, 2023. Please ensure all documentation is updated and submitted before the deadline.",
    postedBy: "Admin Team",
    for: "All Schools",
  },
];
