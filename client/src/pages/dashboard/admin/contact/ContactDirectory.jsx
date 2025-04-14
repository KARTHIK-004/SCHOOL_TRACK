import { useEffect } from "react";
import { ContactColumns } from "./ContactColoumns.jsx";
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
import { useContact } from "@/context/ContactContext";
import { Skeleton } from "@/components/ui/skeleton";

export default function ContactDirectory() {
  const { contacts, isLoading, fetchContacts } = useContact();

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="flex flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex justify-between items-center">
          <div className="flex flex-col space-y-2 ">
            <h2 className="text-2xl font-bold tracking-tight">
              Contact Management
            </h2>
            <div className="text-muted-foreground">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Contact Directory</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Total Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">{contacts.length}</div>
              )}
              <div className="text-xs text-muted-foreground">All time</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Unread Contacts</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  {contacts.filter((contact) => !contact.read).length}
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                Require attention
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Resolution Rate</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">
                  {Math.round(
                    (contacts.filter((contact) => contact.status === "Resolved")
                      .length /
                      contacts.length) *
                      100
                  )}
                  %
                </div>
              )}
              <div className="text-xs text-muted-foreground">
                Successfully resolved
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Average Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <Skeleton className="h-8 w-16" />
              ) : (
                <div className="text-2xl font-bold">8.5 hrs</div>
              )}
              <div className="text-xs text-muted-foreground">
                From submission
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <TableHeader
            title="Contacts"
            linkTitle="Add Contact"
            href="/contact-us"
            data={contacts}
            model="contact"
          />
          <div className="py-8">
            {contacts.length > 0 ? (
              <DataTable data={contacts} columns={ContactColumns} />
            ) : (
              <p className="text-center">No contacts found.</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
