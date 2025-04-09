import {
  Bell,
  Building,
  CheckIcon,
  CreditCard,
  Download,
  FileCheck,
  FileText,
  Globe,
  HelpCircle,
  LockIcon,
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

export default function SystemAdminDashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Main Content */}
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              System Administration
            </h1>
            <p className="text-muted-foreground">
              Manage all schools and system settings
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-8">
              <Download className="mr-2 h-3.5 w-3.5" />
              Export
            </Button>
            <Button size="sm" className="h-8">
              <Settings className="mr-2 h-3.5 w-3.5" />
              System Settings
            </Button>
          </div>
        </div>

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
                <span>added this year</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
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
                System Uptime
              </CardTitle>
              <Server className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">99.98%</div>
              <div className="flex items-center text-xs text-muted-foreground">
                <span className="text-green-500 mr-1">+0.1%</span>
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

        {/* System Health */}
        <Card>
          <CardHeader>
            <CardTitle>System Health</CardTitle>
            <CardDescription>
              Current status of system components and services
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Database</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="text-lg font-bold">Operational</div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">100%</span>
                      <span className="text-muted-foreground">
                        uptime in last 30 days
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">API Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="text-lg font-bold">Operational</div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">99.9%</span>
                      <span className="text-muted-foreground">
                        uptime in last 30 days
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Storage</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="text-lg font-bold">Operational</div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">100%</span>
                      <span className="text-muted-foreground">
                        uptime in last 30 days
                      </span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-muted/50">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm">Authentication</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center">
                      <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="text-lg font-bold">Operational</div>
                    </div>
                    <div className="mt-2 flex items-center text-xs">
                      <span className="text-green-500 mr-1">99.95%</span>
                      <span className="text-muted-foreground">
                        uptime in last 30 days
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-4">System Resources</h3>
                <div className="space-y-4">
                  {systemResources.map((resource) => (
                    <div key={resource.name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{resource.name}</span>
                        <span>
                          {resource.used} / {resource.total} (
                          {Math.round((resource.used / resource.total) * 100)}%)
                        </span>
                      </div>
                      <Progress
                        value={(resource.used / resource.total) * 100}
                        className="h-2"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs Section */}
        <Tabs defaultValue="schools" className="space-y-4">
          <TabsList>
            <TabsTrigger value="schools">Schools Management</TabsTrigger>
            <TabsTrigger value="users">User Management</TabsTrigger>
            <TabsTrigger value="billing">Billing & Subscriptions</TabsTrigger>
            <TabsTrigger value="security">Security & Compliance</TabsTrigger>
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
                      <TableHead>Subscription</TableHead>
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
                        <TableCell>{school.subscription}</TableCell>
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
                              <DropdownMenuItem>
                                Manage Subscription
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

          <TabsContent value="users" className="space-y-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>System Users</CardTitle>
                  <CardDescription>
                    Manage system-level users and permissions
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filter by Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Roles</SelectItem>
                      <SelectItem value="admin">System Admins</SelectItem>
                      <SelectItem value="support">Support Staff</SelectItem>
                      <SelectItem value="manager">Account Managers</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Last Login</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {systemUsers.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={user.avatar} alt={user.name} />
                              <AvatarFallback>{user.initials}</AvatarFallback>
                            </Avatar>
                            {user.name}
                          </div>
                        </TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.role}</TableCell>
                        <TableCell>{user.lastLogin}</TableCell>
                        <TableCell>
                          <Badge
                            variant={
                              user.status === "Active" ? "default" : "secondary"
                            }
                          >
                            {user.status}
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
                              <DropdownMenuItem>Edit User</DropdownMenuItem>
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
            </Card>

            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                  <CardDescription>Recent system user activity</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userActivities.map((activity, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <Avatar className="mt-1 h-8 w-8">
                          <AvatarImage
                            src={activity.avatar}
                            alt={activity.user}
                          />
                          <AvatarFallback>{activity.initials}</AvatarFallback>
                        </Avatar>
                        <div className="grid gap-1">
                          <p className="text-sm font-medium leading-none">
                            {activity.user}
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
                    Manage system permission groups
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
                                {group.users} users
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

          <TabsContent value="billing" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
                <CardDescription>
                  Manage school subscriptions and billing
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
                      Subscription Plans
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Plan Name</TableHead>
                          <TableHead>Features</TableHead>
                          <TableHead>Price</TableHead>
                          <TableHead>Active Schools</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {subscriptionPlans.map((plan) => (
                          <TableRow key={plan.id}>
                            <TableCell className="font-medium">
                              {plan.name}
                            </TableCell>
                            <TableCell>{plan.features}</TableCell>
                            <TableCell>₹{plan.price}/year</TableCell>
                            <TableCell>{plan.activeSchools}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  plan.status === "Active"
                                    ? "default"
                                    : "secondary"
                                }
                              >
                                {plan.status}
                              </Badge>
                            </TableCell>
                            <TableCell className="text-right">
                              <Button variant="ghost" size="sm">
                                Edit Plan
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">
                      Recent Transactions
                    </h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Transaction ID</TableHead>
                          <TableHead>School</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Plan</TableHead>
                          <TableHead>Status</TableHead>
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
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Security & Compliance</CardTitle>
                <CardDescription>
                  Manage system security and compliance settings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="grid gap-4 md:grid-cols-3">
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <Shield className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Security Status</p>
                          <Badge className="mt-1" variant="default">
                            Secure
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            Last scan: Today, 08:45 AM
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <LockIcon className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Authentication</p>
                          <Badge className="mt-1" variant="default">
                            2FA Enabled
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            For all system admins
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="bg-muted/50">
                      <CardContent className="p-4">
                        <div className="flex flex-col items-center justify-center text-center">
                          <FileCheck className="mb-2 h-8 w-8 text-muted-foreground" />
                          <p className="text-sm font-medium">Compliance</p>
                          <Badge className="mt-1" variant="default">
                            Compliant
                          </Badge>
                          <p className="text-xs text-muted-foreground mt-1">
                            GDPR, COPPA, ISO 27001
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium mb-4">Security Logs</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Event</TableHead>
                          <TableHead>User</TableHead>
                          <TableHead>IP Address</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Date & Time</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {securityLogs.map((log, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium">
                              {log.event}
                            </TableCell>
                            <TableCell>{log.user}</TableCell>
                            <TableCell>{log.ipAddress}</TableCell>
                            <TableCell>{log.location}</TableCell>
                            <TableCell>{log.dateTime}</TableCell>
                            <TableCell>
                              <Badge
                                variant={
                                  log.status === "Success"
                                    ? "default"
                                    : "destructive"
                                }
                              >
                                {log.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Data Backup Status</CardTitle>
                        <CardDescription>
                          System data backup information
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Last Successful Backup
                            </span>
                            <span className="text-sm">Today, 03:00 AM</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Backup Frequency
                            </span>
                            <span className="text-sm">Daily</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Retention Period
                            </span>
                            <span className="text-sm">90 days</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-medium">
                              Backup Storage
                            </span>
                            <span className="text-sm">
                              Encrypted Cloud Storage
                            </span>
                          </div>
                          <Button variant="outline" className="w-full">
                            View Backup History
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Compliance Reports</CardTitle>
                        <CardDescription>
                          System compliance documentation
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {complianceReports.map((report, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between"
                            >
                              <div>
                                <p className="text-sm font-medium">
                                  {report.name}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  Generated: {report.date}
                                </p>
                              </div>
                              <Button variant="outline" size="sm">
                                <FileText className="mr-2 h-4 w-4" />
                                Download
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* System Notifications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>System Notifications</CardTitle>
              <CardDescription>
                Recent system alerts and notifications
              </CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <Bell className="mr-2 h-4 w-4" />
              Notification Settings
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {systemNotifications.map((notification, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div
                    className={`mt-1 flex h-8 w-8 items-center justify-center rounded-full ${getNotificationTypeColor(
                      notification.type
                    )}`}
                  >
                    {getNotificationTypeIcon(notification.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">
                        {notification.title}
                      </p>
                      <Badge variant="outline">{notification.time}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {notification.message}
                    </p>
                    {notification.action && (
                      <div className="flex justify-end">
                        <Button variant="ghost" size="sm">
                          {notification.action}
                        </Button>
                      </div>
                    )}
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

function getNotificationTypeColor(type) {
  switch (type) {
    case "info":
      return "bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300";
    case "warning":
      return "bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300";
    case "error":
      return "bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-300";
    case "success":
      return "bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-300";
    default:
      return "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300";
  }
}

function getNotificationTypeIcon(type) {
  switch (type) {
    case "info":
      return <Globe className="h-4 w-4" />;
    case "warning":
      return <HelpCircle className="h-4 w-4" />;
    case "error":
      return <Shield className="h-4 w-4" />;
    case "success":
      return <CheckIcon className="h-4 w-4" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
}

// Sample data
const systemResources = [
  { name: "CPU Usage", used: 42, total: 100 },
  { name: "Memory Usage", used: 8.2, total: 16 },
  { name: "Storage Usage", used: 1.8, total: 5 },
  { name: "Database Connections", used: 124, total: 500 },
];

const schools = [
  {
    id: 1,
    name: "Delhi Public School",
    location: "Delhi",
    students: 2845,
    staff: 142,
    subscription: "Enterprise",
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
    subscription: "Premium",
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
    subscription: "Standard",
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
    subscription: "Premium",
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
    subscription: "Standard",
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

const systemUsers = [
  {
    id: 1,
    name: "Rahul Verma",
    email: "rahul.verma@schoolmanage.com",
    role: "System Admin",
    lastLogin: "Today, 09:45 AM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RV",
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "priya.sharma@schoolmanage.com",
    role: "Support Staff",
    lastLogin: "Today, 08:30 AM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PS",
  },
  {
    id: 3,
    name: "Vikram Singh",
    email: "vikram.singh@schoolmanage.com",
    role: "Account Manager",
    lastLogin: "Yesterday, 05:15 PM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VS",
  },
  {
    id: 4,
    name: "Anita Desai",
    email: "anita.desai@schoolmanage.com",
    role: "System Admin",
    lastLogin: "Yesterday, 03:20 PM",
    status: "Active",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AD",
  },
  {
    id: 5,
    name: "Rajesh Kumar",
    email: "rajesh.kumar@schoolmanage.com",
    role: "Support Staff",
    lastLogin: "Apr 8, 2023, 10:45 AM",
    status: "On Leave",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RK",
  },
];

const userActivities = [
  {
    user: "Rahul Verma",
    action: "Added a new school: City Montessori School",
    time: "Today, 09:45 AM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "RV",
  },
  {
    user: "Priya Sharma",
    action: "Updated subscription plan for St. Mary's Academy",
    time: "Today, 08:30 AM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "PS",
  },
  {
    user: "Vikram Singh",
    action: "Created a new system user account for Anita Desai",
    time: "Yesterday, 05:15 PM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "VS",
  },
  {
    user: "Anita Desai",
    action: "Generated monthly billing report",
    time: "Yesterday, 03:20 PM",
    avatar: "/placeholder.svg?height=32&width=32",
    initials: "AD",
  },
];

const permissionGroups = [
  {
    name: "System Administrators",
    description: "Full access to all system features and settings",
    users: 5,
  },
  {
    name: "Support Staff",
    description: "Access to support tickets and basic system settings",
    users: 8,
  },
  {
    name: "Account Managers",
    description: "Access to school accounts and billing information",
    users: 6,
  },
  {
    name: "Content Managers",
    description: "Access to system content and announcements",
    users: 4,
  },
];

const subscriptionPlans = [
  {
    id: 1,
    name: "Standard Plan",
    features: "Basic features, up to 500 students",
    price: "2,50,000",
    activeSchools: 8,
    status: "Active",
  },
  {
    id: 2,
    name: "Premium Plan",
    features: "Advanced features, up to 2000 students",
    price: "5,00,000",
    activeSchools: 10,
    status: "Active",
  },
  {
    id: 3,
    name: "Enterprise Plan",
    features: "All features, unlimited students",
    price: "10,00,000",
    activeSchools: 4,
    status: "Active",
  },
  {
    id: 4,
    name: "Trial Plan",
    features: "Limited features, up to 100 students",
    price: "0",
    activeSchools: 2,
    status: "Active",
  },
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

const securityLogs = [
  {
    event: "Login Attempt",
    user: "Rahul Verma",
    ipAddress: "192.168.1.1",
    location: "Delhi, India",
    dateTime: "Today, 09:45 AM",
    status: "Success",
  },
  {
    event: "Password Change",
    user: "Priya Sharma",
    ipAddress: "192.168.1.2",
    location: "Mumbai, India",
    dateTime: "Today, 08:30 AM",
    status: "Success",
  },
  {
    event: "Login Attempt",
    user: "Unknown",
    ipAddress: "203.45.67.89",
    location: "Beijing, China",
    dateTime: "Today, 07:15 AM",
    status: "Failed",
  },
  {
    event: "API Access",
    user: "System",
    ipAddress: "192.168.1.5",
    location: "Bangalore, India",
    dateTime: "Today, 06:30 AM",
    status: "Success",
  },
  {
    event: "Database Backup",
    user: "System",
    ipAddress: "192.168.1.10",
    location: "Mumbai, India",
    dateTime: "Today, 03:00 AM",
    status: "Success",
  },
];

const complianceReports = [
  {
    name: "GDPR Compliance Report",
    date: "Apr 1, 2023",
  },
  {
    name: "Data Security Audit Report",
    date: "Mar 15, 2023",
  },
  {
    name: "ISO 27001 Compliance Report",
    date: "Mar 1, 2023",
  },
  {
    name: "COPPA Compliance Report",
    date: "Feb 15, 2023",
  },
];

const systemNotifications = [
  {
    type: "info",
    title: "System Update Scheduled",
    message:
      "A system update is scheduled for April 15, 2023, at 2:00 AM. The system will be unavailable for approximately 30 minutes.",
    time: "1 hour ago",
    action: "View Details",
  },
  {
    type: "warning",
    title: "Storage Space Running Low",
    message:
      "The system storage space is running low. Currently at 85% capacity. Please consider cleaning up unnecessary data.",
    time: "3 hours ago",
    action: "Manage Storage",
  },
  {
    type: "success",
    title: "Database Backup Completed",
    message:
      "The daily database backup has been completed successfully. All data has been securely stored.",
    time: "6 hours ago",
    action: null,
  },
  {
    type: "error",
    title: "Failed Login Attempts Detected",
    message:
      "Multiple failed login attempts detected from IP 203.45.67.89. The IP has been temporarily blocked.",
    time: "Yesterday",
    action: "View Security Logs",
  },
];
