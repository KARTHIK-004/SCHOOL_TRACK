import { useEffect } from "react";
import { SchoolColumns } from "./SchoolColumns.jsx";
import DataTable from "@/components/DataTable/TableComponents/DataTable";
import TableHeader from "@/components/DataTable/TableHeader/TableHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { useSchool } from "@/context/SchoolContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function SchoolDirectory() {
  const { schools, isLoading, fetchSchools } = useSchool();

  useEffect(() => {
    fetchSchools();
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-2xl font-bold tracking-tight">
              School Management
            </h2>
            <div className="text-muted-foreground">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>School Directory</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Schools</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">{schools.length}</div>
              )}
              <div className="text-xs text-muted-foreground">All time</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Recent Schools</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  {
                    schools.filter((school) => {
                      const createdAt = new Date(school.createdAt);
                      const thirtyDaysAgo = new Date();
                      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
                      return createdAt >= thirtyDaysAgo;
                    }).length
                  }
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                Added in last 30 days
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Subscription Rate</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  {schools.length > 0
                    ? Math.round(
                        (schools.filter(
                          (school) => school.subscriptionPlan === "Premium"
                        ).length /
                          schools.length) *
                          100
                      )
                    : 0}
                  %
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                Premium subscriptions
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Average Students</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  {schools.length > 0
                    ? Math.round(
                        schools.reduce(
                          (sum, school) =>
                            sum + (parseInt(school.numberOfStudents) || 0),
                          0
                        ) / schools.length
                      )
                    : 0}
                </div>
              )}
              <div className="text-xs text-muted-foreground">Per school</div>
            </CardContent>
          </Card>
        </div>
        <div>
          <TableHeader
            title="Schools"
            linkTitle="Add School"
            href="/dashboard/schools/create"
            data={schools}
            model="school"
          />
          <div className="py-2">
            {isLoading ? (
              <div className="space-y-4">
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
                <Skeleton className="h-12 w-full" />
              </div>
            ) : schools.length > 0 ? (
              <DataTable data={schools} columns={SchoolColumns} />
            ) : (
              <p className="text-center">No schools found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
